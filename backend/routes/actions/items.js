const express = require("express");
const { PrismaClient } = require("@prisma/client");
const debug = require("debug")("actions");
const i18next = require("i18next");
const anchor = require("@coral-xyz/anchor");
const web3 = require("@solana/web3.js");
const { createPostResponse } = require("@solana/actions");
const BN = require("bn.js");
const path = require("path");

const IDL = require(path.resolve("helpers/idl.json"));
const logger = require(path.resolve("helpers/logger"));
const { LAMPORTS_PER_SOL } = require(path.resolve("helpers/utils"));

const router = express.Router();
const prisma = new PrismaClient();

/**
 * transaction
 */
const PROGRAM_ID = new web3.PublicKey(
  process.env.PROGRAM_ID || "CF2FBoCnN6bHgSUT1stncf9TwpgG5nAgntBRJp4eXChD"
);

const connection = new web3.Connection(
  process.env.RPC_URL || web3.clusterApiUrl("devnet")
);

const [marketplace_pda] = web3.PublicKey.findProgramAddressSync(
  [Buffer.from("marketplace")],
  PROGRAM_ID
);

const [treasury_pda] = web3.PublicKey.findProgramAddressSync(
  [Buffer.from("treasury")],
  PROGRAM_ID
);

const getAccountAta = async (mint_key, account_pubkey) => {
  const account_ata = await anchor.utils.token.associatedAddress({
    mint: mint_key,
    owner: account_pubkey,
  });
  return account_ata;
};

const getListingPda = async (mint_key) => {
  const [listing] = web3.PublicKey.findProgramAddressSync(
    [marketplace_pda.toBuffer(), mint_key.toBuffer()],
    PROGRAM_ID
  );
  return listing;
};

const solToLamports = (sol) => {
  // const formattedNum =
  //   typeof sol === "string" && Number(sol) > 1_000_000_000
  //     ? (BigInt(sol.replace(/\..*$/, "")) * BigInt(LAMPORTS_PER_SOL)).toString()
  //     : Math.floor(Number(sol) * LAMPORTS_PER_SOL).toString();

  return new BN(sol * LAMPORTS_PER_SOL);
};

const declineInstructionInx = async (
  program,
  transaction,
  user_key,
  mint_key,
  listing_pda,
  decline_offerer_keys
) => {
  const declineOfferIxs = [];
  for (const decline_offerer_key of decline_offerer_keys) {
    const de_offerer_key = new web3.PublicKey(decline_offerer_key);
    const declineOfferIx = await program.methods
      .declineOffer()
      .accounts({
        maker: user_key,
        offerer: de_offerer_key,
        marketplace: marketplace_pda,
        makerMint: mint_key,
        listing: listing_pda,
        treasury: treasury_pda,
        systemProgram: web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      })
      .instruction();
    declineOfferIxs.push(declineOfferIx);
    transaction.add(declineOfferIx);
  }
  console.log(declineOfferIxs);
  return declineOfferIxs;
};

const purchaseNFT = async (
  mint_key_str,
  user_key_str,
  seller_key_str,
  provider,
  decline_offerer_keys
) => {
  try {
    const mint_key = new web3.PublicKey(mint_key_str);
    const user_key = new web3.PublicKey(user_key_str);
    const seller_key = new web3.PublicKey(seller_key_str);

    const program = new anchor.Program(IDL, PROGRAM_ID, provider);
    const user_ata = await getAccountAta(mint_key, user_key);
    const listing_pda = await getListingPda(mint_key);
    const vault_ata = await getAccountAta(mint_key, listing_pda);

    console.log(marketplace_pda.toString(), treasury_pda.toString());
    console.log(user_ata.toString(), listing_pda.toString());
    console.log(vault_ata.toString());
    const transaction = new web3.Transaction();
    const txHash = await program.methods
      .purchase()
      .accounts({
        taker: user_key,
        maker: seller_key,
        marketplace: marketplace_pda,
        makerMint: mint_key,
        takerAta: user_ata,
        vault: vault_ata,
        listing: listing_pda,
        treasury: treasury_pda,
        systemProgram: web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
      })
      .instruction();
    const declineOfferIxs = await declineInstructionInx(
      program,
      transaction,
      user_key,
      mint_key,
      listing_pda,
      decline_offerer_keys
    );
    transaction.add(txHash);
    return transaction;
  } catch (e) {
    console.log("purchase", e);
  }
};

const offerNFT = async (mint_key_str, user_key_str, offer_price, provider) => {
  try {
    const mint_key = new web3.PublicKey(mint_key_str);
    const user_key = new web3.PublicKey(user_key_str);
    const seller_key = new web3.PublicKey(user_key_str);
    const program = new anchor.Program(IDL, PROGRAM_ID, provider);
    const user_ata = await getAccountAta(mint_key, user_key);
    const listing_pda = await getListingPda(mint_key);
    const vault_ata = await getAccountAta(mint_key, listing_pda);

    console.log(marketplace_pda.toString(), treasury_pda.toString());
    console.log(user_ata.toString(), listing_pda.toString());
    console.log(vault_ata.toString());
    const transaction = new web3.Transaction();
    const offerIx = await program.methods
      .makeOffer(offer_price)
      .accounts({
        offerer: user_key,
        marketplace: marketplace_pda,
        makerMint: mint_key,
        offererAta: user_ata,
        listing: listing_pda,
        treasury: treasury_pda,
        systemProgram: web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
      })
      .instruction();
    transaction.add(offerIx);
    return transaction;
  } catch (e) {
    console.log("offer", e);
  }
};

router.get("/:id", async (req, res) => {
  try {
    logger.info("======================= ACTION(GET) =======================");
    const { id } = req.params;
    logger.info("ITEM ID: " + id);

    const item = await prisma.items.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!item) {
      logger.info("NOT FOUND ITEM");
      debug("Not Found Item");
      return res.status(500).send(i18next.t("errors.internal_error"));
    }
    logger.info("ITEM: " + JSON.stringify(item));

    if (item.status !== "list") {
      logger.info("ITEM NOT LISTED");
      debug("Item Not Listed");
      return res.status(500).send(i18next.t("errors.internal_error"));
    }

    return res.status(200).json({
      icon: item.image,
      title: item.name,
      description: item.description,
      links: {
        actions: [
          {
            label: "Buy (" + item.price + " SOL)",
            href: "/actions/items/" + item.id + "/buy",
          },
          {
            label: "Make Offer",
            href: "/actions/items/" + item.id + "/offer/{price}",
            parameters: [
              {
                name: "price",
                label: "Enter offer price",
              },
            ],
          },
        ],
      },
    });
  } catch (error) {
    debug(error);
    logger.info("ERROR: " + error);
    return res.status(500).send(i18next.t("errors.internal_error"));
  } finally {
    logger.info("======================= ACTION(GET) =======================");
    logger.info("\n");
    logger.info("\n");
    prisma.$disconnect();
  }
});

router.post("/:id/buy", async (req, res) => {
  try {
    let { account } = req.body;
    logger.info("actions-account: " + account);
    account = new web3.PublicKey(account);

    const { id } = req.params;
    const item = await prisma.items.findUnique({
      include: {
        collector: true,
        offers: {
          include: {
            user: true,
          },
          where: {
            status: "new",
          },
        },
      },
      where: {
        id: parseInt(id),
      },
    });
    if (!item) {
      logger.info("Not Found Item");
      return res.status(500).send(i18next.t("errors.internal_error"));
    }
    logger.info("actions-item: " + JSON.stringify(item));

    if (item.status !== "list") {
      logger.info("Item Not Listed");
      return res.status(500).send(i18next.t("errors.internal_error"));
    }
    const amount = Number(item.price);
    const item_mint = item.contract_address;
    const item_seller = item.collector.wallet_address;
    const item_buyer = account.toString();

    const dummyWallet = {
      publicKey: account,
      signTransaction: () =>
        Promise.reject(new Error("Dummy wallet can't sign")),
      signAllTransactions: () =>
        Promise.reject(new Error("Dummy wallet can't sign")),
    };

    const provider = new anchor.AnchorProvider(connection, dummyWallet, {
      skipPreflight: true,
      maxRetries: 0,
    });

    const decline_offerer_keys = item.offers.map((offer) => {
      return offer.user?.wallet_address;
    });
    logger.info(
      "actions-decline_offerer_keys: " + JSON.stringify(decline_offerer_keys)
    );

    const transaction = await purchaseNFT(
      item_mint,
      item_buyer,
      item_seller,
      provider,
      decline_offerer_keys
    );
    // let to = new web3.PublicKey("GUFxwDrsLzSQ27xxTVe4y9BARZ6cENWmjzwe8XPy7AKu");
    // const transaction = new web3.Transaction().add(
    //   web3.SystemProgram.transfer({
    //     fromPubkey: account,
    //     lamports: new BN("100000000"),
    //     toPubkey: to,
    //   })
    // );
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    transaction.feePayer = account;
    logger.info("actions-transaction: " + JSON.stringify(transaction));
    const payload = await createPostResponse({
      fields: { transaction },
    });

    return res.status(200).json(payload);
  } catch (error) {
    logger.info("action.error" + error);
    return res.status(500).send(i18next.t("errors.internal_error"));
  } finally {
    prisma.$disconnect();
  }
});

router.post("/:id/offer/:amount", async (req, res) => {
  try {
    let { account } = req.body;
    logger.info("actions-account: " + account);
    account = new web3.PublicKey(account);

    const { id } = req.params;
    const item = await prisma.items.findUnique({
      include: {
        collector: true,
        offers: {
          include: {
            user: true,
          },
          where: {
            status: "new",
          },
        },
      },
      where: {
        id: parseInt(id),
      },
    });
    if (!item) {
      logger.info("Not Found Item");
      return res.status(500).send(i18next.t("errors.internal_error"));
    }
    logger.info("actions-item: " + JSON.stringify(item));

    if (item.status !== "list") {
      logger.info("Item Not Listed");
      return res.status(500).send(i18next.t("errors.internal_error"));
    }

    debug(req.params.amount);
    const amount = Number(req.params.amount);
    const item_mint = item.contract_address;
    const item_seller = item.collector.wallet_address;
    const item_buyer = account.toString();

    const dummyWallet = {
      publicKey: account,
      signTransaction: () =>
        Promise.reject(new Error("Dummy wallet can't sign")),
      signAllTransactions: () =>
        Promise.reject(new Error("Dummy wallet can't sign")),
    };

    const provider = new anchor.AnchorProvider(connection, dummyWallet, {
      skipPreflight: true,
      maxRetries: 0,
    });

    const transaction = await offerNFT(
      item_mint,
      item_buyer,
      solToLamports(amount),
      provider
    );
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    transaction.feePayer = account;
    logger.info("actions-transaction: " + JSON.stringify(transaction));
    const payload = await createPostResponse({
      fields: { transaction },
    });

    return res.status(200).json(payload);
  } catch (error) {
    debug(error);
    logger.info("action.error: " + error);
    return res.status(500).send(i18next.t("errors.internal_error"));
  } finally {
    prisma.$disconnect();
  }
});

module.exports = router;

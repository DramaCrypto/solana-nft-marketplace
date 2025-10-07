import BN from "bn.js";
import * as web3 from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import {
  createMint,
  createAssociatedTokenAccount,
  getOrCreateAssociatedTokenAccount,
  mintTo,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import IDL from "./idl.json";
// import { successAlert } from "./toastGroup";

const PROGRAM_ID = new web3.PublicKey(
  "CF2FBoCnN6bHgSUT1stncf9TwpgG5nAgntBRJp4eXChD"
);

let connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");

const [marketplace_pda] = web3.PublicKey.findProgramAddressSync(
  [Buffer.from("marketplace")],
  PROGRAM_ID
);

const [treasury_pda] = web3.PublicKey.findProgramAddressSync(
  [Buffer.from("treasury")],
  PROGRAM_ID
);

export const getAccountAta = async (mint_key, account_pubkey) => {
  const account_ata = await anchor.utils.token.associatedAddress({
    mint: mint_key,
    owner: account_pubkey,
  });
  return account_ata;
};

export const getListingPda = async (mint_key) => {
  const [listing] = web3.PublicKey.findProgramAddressSync(
    [marketplace_pda.toBuffer(), mint_key.toBuffer()],
    PROGRAM_ID
  );
  return listing;
};

export const listNFT = async (mint_key_str, user_key_str, item_price) => {
  try {
    const mint_key = new web3.PublicKey(mint_key_str);
    const user_key = new web3.PublicKey(user_key_str);
    const provider = new anchor.AnchorProvider(
      connection,
      window.solana,
      anchor.AnchorProvider.defaultOptions()
    );
    const program = new anchor.Program(IDL, PROGRAM_ID, provider);
    const maker_ata = await getAccountAta(mint_key, user_key);
    const listing_pda = await getListingPda(mint_key);
    const vault_ata = await getAccountAta(mint_key, listing_pda);

    console.log(marketplace_pda.toString(), treasury_pda.toString());
    console.log(maker_ata.toString(), listing_pda.toString());
    console.log(vault_ata.toString());
    const txHash = await program.methods
      .list(new BN(item_price * 10 ** 9))
      .accounts({
        maker: user_key,
        marketplace: marketplace_pda,
        makerMint: mint_key,
        makerAta: maker_ata,
        vault: vault_ata,
        listing: listing_pda,
        systemProgram: web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
      })
      .rpc();
    await connection.confirmTransaction(txHash, "finalized");
    console.log("finished listing");
    // successAlert(
    //   <div>
    //     Your NFT is listed successfully{" "}
    //     <a
    //       href="https://example.com"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="toast-link"
    //     >
    //       link
    //     </a>
    //   </div>
    // );
    return 1;
  } catch (e) {
    console.log("list", e);
    return 0;
  }
};

export const unlistNFT = async (
  mint_key_str,
  user_key_str,
  decline_offerer_keys
) => {
  try {
    const mint_key = new web3.PublicKey(mint_key_str);
    const user_key = new web3.PublicKey(user_key_str);
    const provider = new anchor.AnchorProvider(
      connection,
      window.solana,
      anchor.AnchorProvider.defaultOptions()
    );
    const program = new anchor.Program(IDL, PROGRAM_ID, provider);
    const maker_ata = await getAccountAta(mint_key, user_key);
    const listing_pda = await getListingPda(mint_key);
    const vault_ata = await getAccountAta(mint_key, listing_pda);

    console.log(marketplace_pda.toString(), treasury_pda.toString());
    console.log(maker_ata.toString(), listing_pda.toString());
    console.log(vault_ata.toString());
    const transaction = new web3.Transaction();
    const unlistIx = await program.methods
      .delist()
      .accounts({
        maker: user_key,
        marketplace: marketplace_pda,
        makerMint: mint_key,
        makerAta: maker_ata,
        vault: vault_ata,
        listing: listing_pda,
        systemProgram: web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
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
    transaction.add(unlistIx);
    const txHash = await provider.sendAndConfirm(transaction, []);
    await connection.confirmTransaction(txHash, "finalized");
    console.log("finished delisting");
    return 1;
  } catch (e) {
    console.log("unlist", e);
    return 0;
  }
};

export const purchaseNFT = async (
  mint_key_str,
  user_key_str,
  seller_key_str,
  decline_offerer_keys
) => {
  try {
    const mint_key = new web3.PublicKey(mint_key_str);
    const user_key = new web3.PublicKey(user_key_str);
    const seller_key = new web3.PublicKey(seller_key_str);
    const provider = new anchor.AnchorProvider(
      connection,
      window.solana,
      anchor.AnchorProvider.defaultOptions()
    );
    const program = new anchor.Program(IDL, PROGRAM_ID, provider);
    const user_ata = await getAccountAta(mint_key, user_key);
    const listing_pda = await getListingPda(mint_key);
    const vault_ata = await getAccountAta(mint_key, listing_pda);

    console.log(marketplace_pda.toString(), treasury_pda.toString());
    console.log(user_ata.toString(), listing_pda.toString());
    console.log(vault_ata.toString());
    const transaction = new web3.Transaction();
    const purchaseIx = await program.methods
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
    transaction.add(purchaseIx);
    const txHash = await provider.sendAndConfirm(transaction, []);
    await connection.confirmTransaction(txHash, "finalized");
    console.log("finished delisting");
    return 1;
  } catch (e) {
    console.log("purchase", e);
    return 0;
  }
};

export const offerNFT = async (mint_key_str, user_key_str, offer_price) => {
  try {
    const mint_key = new web3.PublicKey(mint_key_str);
    const user_key = new web3.PublicKey(user_key_str);
    const seller_key = new web3.PublicKey(user_key_str);
    const provider = new anchor.AnchorProvider(
      connection,
      window.solana,
      anchor.AnchorProvider.defaultOptions()
    );
    const program = new anchor.Program(IDL, PROGRAM_ID, provider);
    const user_ata = await getAccountAta(mint_key, user_key);
    const listing_pda = await getListingPda(mint_key);
    const vault_ata = await getAccountAta(mint_key, listing_pda);

    console.log(marketplace_pda.toString(), treasury_pda.toString());
    console.log(user_ata.toString(), listing_pda.toString());
    console.log(vault_ata.toString());
    console.log(new BN(offer_price));
    const txHash = await program.methods
      .makeOffer(new BN(offer_price * 10 ** 9))
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
      .rpc();
    await connection.confirmTransaction(txHash, "finalized");
    console.log("finished delisting");
    return 1;
  } catch (e) {
    console.log("offer", e);
    return 0;
  }
};

export const unofferNFT = async (mint_key_str, user_key_str) => {
  try {
    const mint_key = new web3.PublicKey(mint_key_str);
    const user_key = new web3.PublicKey(user_key_str);
    const seller_key = new web3.PublicKey(user_key_str);
    const provider = new anchor.AnchorProvider(
      connection,
      window.solana,
      anchor.AnchorProvider.defaultOptions()
    );
    const program = new anchor.Program(IDL, PROGRAM_ID, provider);
    const user_ata = await getAccountAta(mint_key, user_key);
    const listing_pda = await getListingPda(mint_key);
    const vault_ata = await getAccountAta(mint_key, listing_pda);

    console.log(marketplace_pda.toString(), treasury_pda.toString());
    console.log(user_ata.toString(), listing_pda.toString());
    console.log(vault_ata.toString());
    const txHash = await program.methods
      .cancelOffer()
      .accounts({
        offerer: user_key,
        marketplace: marketplace_pda,
        makerMint: mint_key,
        listing: listing_pda,
        treasury: treasury_pda,
        systemProgram: web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      })
      .rpc();
    await connection.confirmTransaction(txHash, "finalized");
    console.log("finished delisting");
    return 1;
  } catch (e) {
    console.log("unoffer", e);
    return 0;
  }
};

export const acceptOfferNFT = async (
  mint_key_str,
  user_key_str,
  accept_offer_key_str,
  decline_offerer_keys
) => {
  try {
    const mint_key = new web3.PublicKey(mint_key_str);
    const user_key = new web3.PublicKey(user_key_str);
    const offerer_key = new web3.PublicKey(accept_offer_key_str);
    const provider = new anchor.AnchorProvider(
      connection,
      window.solana,
      anchor.AnchorProvider.defaultOptions()
    );
    const program = new anchor.Program(IDL, PROGRAM_ID, provider);
    const user_ata = await getAccountAta(mint_key, user_key);
    const offerer_ata = await getAccountAta(mint_key, offerer_key);
    const listing_pda = await getListingPda(mint_key);
    const vault_ata = await getAccountAta(mint_key, listing_pda);

    console.log(marketplace_pda.toString(), treasury_pda.toString());
    console.log(user_ata.toString(), listing_pda.toString());
    console.log(vault_ata.toString());
    const acceptOfferIx = await program.methods
      .acceptOffer()
      .accounts({
        maker: user_key,
        offerer: offerer_key,
        marketplace: marketplace_pda,
        makerMint: mint_key,
        offererAta: offerer_ata,
        listing: listing_pda,
        vault: vault_ata,
        treasury: treasury_pda,
        systemProgram: web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
      })
      .instruction();
    const transaction = new web3.Transaction().add(acceptOfferIx);

    // for (const decline_offerer_key of decline_offerer_keys) {
    //   const de_offerer_key = new web3.PublicKey(decline_offerer_key);
    //   const declineOfferIx = await program.methods
    //     .declineOffer()
    //     .accounts({
    //       maker: user_key,
    //       offerer: de_offerer_key,
    //       marketplace: marketplace_pda,
    //       makerMint: mint_key,
    //       listing: listing_pda,
    //       treasury: treasury_pda,
    //       systemProgram: web3.SystemProgram.programId,
    //       tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
    //     })
    //     .instruction();
    //   transaction.add(declineOfferIx);
    // }
    const declineOfferIxs = await declineInstructionInx(
      program,
      transaction,
      user_key,
      mint_key,
      listing_pda,
      decline_offerer_keys
    );
    // declineOfferIxs.map((x) => {
    //   transaction.add(x);
    // });
    const txHash = await provider.sendAndConfirm(transaction, []);
    await connection.confirmTransaction(txHash, "finalized");
    console.log("finished delisting");
    return 1;
  } catch (e) {
    console.log("unoffer", e);
    return 0;
  }
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

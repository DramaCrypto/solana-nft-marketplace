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
import type { Errors } from "../target/types/errors";

describe("anchor_marketplace", async () => {
  // Configure the client to use the local cluster
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Errors as anchor.Program<Errors>;
  
  const maker = pg.wallets.wallet2;
  const taker = pg.wallets.wallet1;
  console.log("maker", maker.publicKey.toString());
  console.log("taker", taker.publicKey.toString());
  const [marketplace] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("marketplace")],
    program.programId
  );
  console.log("marketplace", marketplace.toString());
  const [treasury] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("treasury")],
    program.programId
  );
  console.log("treasury", treasury.toString());
  const maker_mint = new anchor.web3.PublicKey(
    "DroiDxfPKcHB1ecM1oDw4H4vvUHDgcQGMvAE5phDWjVs"
  );
  const maker_ata = await anchor.utils.token.associatedAddress({
    mint: maker_mint,
    owner: maker.publicKey,
  });
  console.log("maker_ata", maker_ata.toString());
  const taker_ata = await anchor.utils.token.associatedAddress({
    mint: maker_mint,
    owner: taker.publicKey,
  });
  console.log("taker_ata", taker_ata.toString());
  const [listing] = web3.PublicKey.findProgramAddressSync(
    [marketplace.toBuffer(), maker_mint.toBuffer()],
    program.programId
  );
  console.log("listing", listing.toString());
  const vault = await anchor.utils.token.associatedAddress({
    mint: maker_mint,
    owner: listing,
  });
  console.log("vault", vault.toString());

  // const [nftAccount] = await web3.PublicKey.findProgramAddress(
  //   [
  //     maker.publicKey.toBuffer(),
  //     TOKEN_PROGRAM_ID.toBuffer(),
  //     maker_mint.toBuffer(),
  //   ],
  //   anchor.utils.token.ASSOCIATED_PROGRAM_ID
  // );
  // try {
  //   const accountInfo = await await program.provider.connection.getAccountInfo(nftAccount);
  //   console.log(accountInfo.owner.toString());
  // } catch (error) {
  //   console.error("Error fetching account info:", error);
  //   return null;
  // }

  // Check if the associated token account (ATA) for the NFT exists
  // const [ataAddress] = await web3.PublicKey.findProgramAddress(
  //   [
  //     maker.publicKey.toBuffer(),
  //     anchor.utils.token.TOKEN_PROGRAM_ID.toBuffer(),
  //     maker_mint.toBuffer(),
  //   ],
  //   anchor.utils.token.ASSOCIATED_PROGRAM_ID
  // );
  // const ataInfo = await program.provider.connection.getAccountInfo(ataAddress);
  // if (!ataInfo) {
  //   console.log("Associated token account does not exist. Creating it now...");
  // } else {
  //   console.log("Associated token account already exists.", ataInfo);
  // }

  // it("initialize", async () => {
  //   // Send transaction

  //   const txHash = await program.methods
  //     .initialize(new anchor.BN(100).toNumber())
  //     .accounts({
  //       admin: maker.publicKey,
  //       marketplace: marketplace,
  //       treasury: treasury,
  //       systemProgram: web3.SystemProgram.programId,
  //       rent: web3.SYSVAR_RENT_PUBKEY,
  //     })
  //     .rpc({ skipPreflight: true });
  //   console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);

  //   await program.provider.connection.confirmTransaction(txHash, "finalized");
  //   console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
  // });

  // it("list", async () => {
  //   // Send transaction
  //   const txHash = await program.methods
  //     .list(new anchor.BN(10000000))
  //     .accounts({
  //       maker: maker.publicKey,
  //       marketplace: marketplace,
  //       makerMint: maker_mint,
  //       makerAta: maker_ata,
  //       vault: vault,
  //       listing: listing,
  //       systemProgram: web3.SystemProgram.programId,
  //       tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
  //       associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
  //     })
  //     .rpc();

  //   await program.provider.connection.confirmTransaction(txHash, "finalized");
  //   console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
  //   const listingAccount = await program.account.listing.fetch(listing);
  //   const price = new BN(listingAccount.price);
  //   console.log(`Price: ${price.toString()}`);
  //   console.log("Listing Account:", listingAccount);
  // });

  // it("delist", async () => {
  //   // Send transaction
  //   const txHash = await program.methods
  //     .delist()
  //     .accounts({
  //       maker: maker.publicKey,
  //       marketplace: marketplace,
  //       makerMint: maker_mint,
  //       makerAta: maker_ata,
  //       vault: vault,
  //       listing: listing,
  //       systemProgram: web3.SystemProgram.programId,
  //       tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
  //     })
  //     .rpc();
  //   console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);

  //   await program.provider.connection.confirmTransaction(txHash, "finalized");
  //   console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
  // });

  // it("purchase", async () => {
  //   const txHash = await program.methods
  //     .purchase()
  //     .accounts({
  //       taker: taker.publicKey,
  //       maker: maker.publicKey,
  //       marketplace: marketplace,
  //       makerMint: maker_mint,
  //       takerAta: taker_ata,
  //       vault: vault,
  //       listing: listing,
  //       treasury: treasury,
  //       systemProgram: web3.SystemProgram.programId,
  //       tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
  //       associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
  //     })
  //     .rpc();
  //   console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);
  //   await program.provider.connection.confirmTransaction(txHash, "finalized");
  //   console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
  // });

  // it("make offer", async () => {
  //   // Send transaction
  //   const txHash = await program.methods
  //     .makeOffer(new BN(1000000))
  //     .accounts({
  //       offerer: taker.publicKey,
  //       marketplace: marketplace,
  //       makerMint: maker_mint,
  //       offererAta: taker_ata,
  //       listing: listing,
  //       treasury: treasury,
  //       systemProgram: web3.SystemProgram.programId,
  //       tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
  //       associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
  //     })
  //     .rpc();
  //   console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);

  //   await program.provider.connection.confirmTransaction(txHash, "finalized");
  //   console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);

  //   const listingAccount = await program.account.listing.fetch(listing);
  //   listingAccount.offers.forEach((offer: any) => {
  //       const price = new BN(offer.price);
  //       console.log(`Offerer: ${offer.offerer.toString()}, Price: ${price.toString()}`);
  //   });
  // });

  // it("cancel offer", async () => {
  //   // Send transaction
  //   const txHash = await program.methods
  //     .cancelOffer()
  //     .accounts({
  //       offerer: taker.publicKey,
  //       marketplace: marketplace,
  //       makerMint: maker_mint,
  //       listing: listing,
  //       treasury: treasury,
  //       systemProgram: web3.SystemProgram.programId,
  //       tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
  //     })
  //     .rpc();
  //   console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);

  //   await program.provider.connection.confirmTransaction(txHash, "finalized");
  //   console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
  // });

  // it("accept offer", async () => {
  //   // Send transaction
  //   const txHash = await program.methods
  //     .acceptOffer()
  //     .accounts({
  //       maker: maker.publicKey,
  //       offerer: taker.publicKey,
  //       marketplace: marketplace,
  //       makerMint: maker_mint,
  //       offererAta: taker_ata,
  //       listing: listing,
  //       vault: vault,
  //       treasury: treasury,
  //       systemProgram: web3.SystemProgram.programId,
  //       tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
  //       associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
  //     })
  //     .rpc();
  //   console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);

  //   await program.provider.connection.confirmTransaction(txHash, "finalized");
  //   console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
  // });

  // it("decline offer", async () => {
  //   // Send transaction
  //   const txHash = await program.methods
  //     .declineOffer()
  //     .accounts({
  //       maker: maker.publicKey,
  //       offerer: taker.publicKey,
  //       marketplace: marketplace,
  //       makerMint: maker_mint,
  //       listing: listing,
  //       treasury: treasury,
  //       systemProgram: web3.SystemProgram.programId,
  //       tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
  //     })
  //     .rpc();
  //   console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);

  //   await program.provider.connection.confirmTransaction(txHash, "finalized");
  //   console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
  // });

  // it("withdraw funds from treasury", async () => {
  //   // Send transaction
  //   const txHash = await program.methods
  //     .withdrawFromTreasury(new BN(10000000))
  //     .accounts({
  //       signer: maker.publicKey,
  //       receiver: taker.publicKey,
  //       marketplace: marketplace,
  //       treasury: treasury,
  //       systemProgram: web3.SystemProgram.programId,
  //     })
  //     .rpc();
  //   console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);

  //   await program.provider.connection.confirmTransaction(txHash, "finalized");
  //   console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
  // });
});

const { Connection, clusterApiUrl, PublicKey } = require("@solana/web3.js");
const { Metaplex } = require("@metaplex-foundation/js");

const LAMPORTS_PER_SOL = 1000000000;

const isEmpty = (value) => {
  if (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.length === 0) ||
    (typeof value === "object" && Object.keys(value).length === 0)
  )
    return true;
  return false;
};

const responseData = (res, data) => {
  return res.json({
    status: 1,
    data,
  });
};

const responseError = (res, error) => {
  return res.json({
    status: 0,
    error,
  });
};

const getAllNFTs = async (mintAddress) => {
  // Dynamically import node-fetch
  const fetch = await import("node-fetch");

  // Connect to the Solana cluster
  const connection = new Connection(
    "https://alpha-fabled-moon.solana-mainnet.quiknode.pro/cc9e874f0d007a277ced20c24c64a2f6beca32cb/"
  );
  const metaplex = new Metaplex(connection);
  // Fetch all metadata accounts
  const nft_model = await metaplex.nfts().findByMint({ mintAddress });

  // console.log("metadataAccounts", nft_model);

  const nft_address = nft_model.address.toString();
  let nft_collection = "";
  if (nft_model.collection) {
    nft_collection = nft_model.collection.address.toString();
  }
  const nft_metadata = nft_model.json;

  const largestAccounts = await connection.getTokenLargestAccounts(mintAddress);
  const largestAccountInfo = await connection.getParsedAccountInfo(
    largestAccounts.value[0].address
  );

  const item_info = {
    collect: nft_collection,
    mint: nft_address,
    owner: largestAccountInfo.value.data.parsed.info.owner,
    metadata: nft_metadata,
  };

  // console.log("item_info", JSON.stringify(item_info));
  return item_info;
};

module.exports = {
  isEmpty,
  responseData,
  responseError,
  LAMPORTS_PER_SOL,
  getAllNFTs,
};

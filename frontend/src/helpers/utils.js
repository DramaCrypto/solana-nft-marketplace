import axios from "axios";

export const LAMPORTS_PER_SOL = 1000000000;

export const simplifyWalletAddress = (walletAddress) => {
  if (typeof walletAddress !== "string") return;
  return (
    walletAddress.substring(0, 4) +
    "..." +
    walletAddress.substring(walletAddress.length - 5, walletAddress.length - 1)
  );
};

export const delay = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};

export function toFixed(num, fixed) {
  const re = new RegExp(`^-?\\d+(?:\\.\\d{0,${fixed || -1}})?`);
  return num.toString().match(re)[0];
}

export async function getSolPrice() {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true"
  );
  return response.data.solana?.usd;
}

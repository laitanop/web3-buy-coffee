import { http, createConfig } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";

// Alchemy RPC URL or API key from environment variable
const alchemyRpc = import.meta.env.VITE_RCP_ALCHEMY;

// Extract API key if a full URL is provided
let alchemyApiKey = alchemyRpc;
if (
  alchemyRpc &&
  (alchemyRpc.startsWith("http://") || alchemyRpc.startsWith("https://"))
) {
  // Extract the API key from the URL (everything after the last '/')
  const urlParts = alchemyRpc.split("/");
  alchemyApiKey = urlParts[urlParts.length - 1];
}

// Define chains based on environment
const chains = [
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  ...(import.meta.env.VITE_ENABLE_TESTNETS === "true" ? [sepolia] : []),
];

// Map chain IDs to Alchemy network names
const alchemyNetworkNames = {
  [mainnet.id]: "eth-mainnet",
  [polygon.id]: "polygon-mainnet",
  [optimism.id]: "opt-mainnet",
  [arbitrum.id]: "arb-mainnet",
  [base.id]: "base-mainnet",
  [sepolia.id]: "eth-sepolia",
};

// Configure transports with Alchemy
const transports = {};
chains.forEach((chain) => {
  const networkName = alchemyNetworkNames[chain.id];
  transports[chain.id] = http(
    alchemyApiKey && networkName
      ? `https://eth-sepolia.g.alchemy.com/v2/${alchemyRpc}`
      : undefined
  );
});

export const config = getDefaultConfig({
  appName: "Buy Me a Coffee",
  projectId: import.meta.env.VITE_RAINBOWKIT_PROJECT_ID,
  chains,
  transports,
});

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Buy Me a Coffee",
  projectId: import.meta.env.VITE_RAINBOWKIT_PROJECT_ID,
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(import.meta.env.VITE_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
});

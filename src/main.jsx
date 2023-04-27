import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { filecoinHyperspace } from "wagmi/chains";

const chains = [filecoinHyperspace];
const projectId = import.meta.env.VITE_WEB3MODAL_PROJECT_ID;

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  themeMode: "dark" | "light",
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <App />
    </WagmiConfig>
    <Web3Modal
      themeVariables={{
        "--w3m-font-family": "Mono, sans-serif",
        "--w3m-accent-color": "#c026d3",

        "--w3m-accent-fill-color": "#ffff",
      }}
      projectId={projectId}
      ethereumClient={ethereumClient}
    />
  </React.StrictMode>
);

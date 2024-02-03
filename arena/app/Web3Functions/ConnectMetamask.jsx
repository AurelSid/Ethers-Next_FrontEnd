"use client";

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { BrowserProvider, parseUnits } from "ethers";
import abi from "@/abi";
import execute from "./ApiRequest";

// Import from a specific export
import { HDNodeWallet } from "ethers/wallet";
export default function ConnectMetamask() {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);
  const provider = new ethers.BrowserProvider(window.ethereum);
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);

        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }
  return (
    <div>
      {hasMetamask ? (
        !isConnected ? (
          <button
            onClick={() => connect()}
            className=" bg-violet-600 px-5 py-1 rounded-full"
          >
            connect
          </button>
        ) : (
          ""
        )
      ) : (
        "Please install metamask"
      )}

      {isConnected ? <button onClick={() => execute()}>Execute</button> : ""}
    </div>
  );
}

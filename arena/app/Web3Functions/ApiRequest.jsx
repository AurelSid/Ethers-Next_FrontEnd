import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { BrowserProvider, parseUnits } from "ethers";
import abi from "@/abi";

async function execute() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  console.log(signer);
  const address = "0x3e4aCD6fdbAd6c877dAE51E268f38165De609E67";
  const contract = new ethers.Contract(address, abi, signer);
  let result = await contract.request();
  const response = await contract.response();
  console.log("Contract response:", response.toString());
}
export default execute;

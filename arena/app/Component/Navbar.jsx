"use client";

import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { BrowserProvider, parseUnits } from "ethers";
import abi from "@/abi";
import execute from "../Web3Functions/ApiRequest";
import ConnectMetamask from "../Web3Functions/ConnectMetamask";

const Navbar = () => {
  return (
    <div className="absolute w-full h-20 justify-end items-center mt-6">
      <div className="   items-center flex justify-center my-auto ">
        <div className="grid grid-cols-3 gap-6">
          <h1 className=" flex cursor-pointer  ">Home</h1>
          <h1 className=" flex cursor-pointer  ">About us</h1>
          <h1 className=" flex cursor-pointer  ">contact</h1>
        </div>

        <img
          src="/emblem.png"
          alt=""
          className="h-12 w-12 invert absolute left-6 justify-center items-center my-auto flex "
        />
        <div className=" justify-center items-center my-auto flex absolute right-6 ">
          <ConnectMetamask />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

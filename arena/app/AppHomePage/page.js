"use client";
import React from "react";
import Tournaments from "../Component/Tournaments";

const page = () => {
  return (
    <div className="min-h-screen min-w-screen justify-center items-center flex bg-gradient-to-b from-black to-violet-900 select-none">
      <Tournaments />
    </div>
  );
};

export default page;

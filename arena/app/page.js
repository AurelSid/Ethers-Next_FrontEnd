"use client";

import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";

export default function Home() {
  return (
    <div className="  w-full max-h-screen">
      <Hero />
    </div>
  );
}

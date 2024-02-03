import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="min-h-screen min-w-screen justify-center items-center flex bg-gradient-to-b from-black to-violet-900 select-none">
      <div className="grid grid-cols-2 mx-40">
        <div className="m-auto">
          <img src="/emblem.png" alt="" className="invert" />
        </div>
        <div className="m-auto">
          <h1 className="text-6xl font-bold">ENTER THE ARENA</h1>
          <h1 className="text-xl ">
            Unleash the power of your passion for esports with [Your Platform
            Name], the revolutionary web2 smart contract powered e-sport betting
            platform. Dive into the next generation of online gaming and
            experience the thrill like never before.
          </h1>
          <div className="mt-5   gap-10  ">
            <Link href="/AppHomePage">
              <button className=" bg-violet-600 px-5 py-3 rounded-full max-w-40 m-3">
                Enter App
              </button>
            </Link>
            <button className=" bg-violet-600 px-5 py-3 rounded-full max-w-40 m-3">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

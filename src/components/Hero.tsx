import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Hero = () => (
  <div className="w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center space-y-6 py-10 px-12">
    <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl xl:w-3/4 font-bold text-gray-900 leading-tight text-center">
      AI-Enabled Privacy <br />
      Compliance, Simplified
    </h1>
    <p className="text-xs lg:text-sm w-[80%] md:w-[60%] xl:w-[40%] text-center text-gray-500">
      Empower your organization with an all-in-one platform for automated
      privacy compliance, secure data handling, and seamless AI integrations.
    </p>
    <div className="flex space-x-4">
      <button className="flex items-center gap-2 px-4 py-3 bg-black text-white text-sm rounded-full font-semibold shadow-md shadow-black/80 hover:shadow-md hover:shadow-green-400 cursor-pointer transition-all duration-200 hover:scale-105 group">
        <Image
          src="/images/face-2.jpg"
          alt="phone-call"
          className="h-6 w-6 rounded-full"
          width={64}
          height={32}
        />
        Book a 15 Minute Call
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </button>

      {/* <button className="px-6 py-2 bg-gray-50 border border-gray-300 rounded-2xl font-semibold text-gray-900 text-sm hover:bg-gray-100 transition cursor-pointer">
        Sign Up
        </button> */}
    </div>
    <div className="flex flex-row items-center gap-2 -py-0 px-4 mb-2 -mt-2 text-xs text-gray-400 font-semibold rounded-full ">
      <span className="inline-block w-4 h-4 rounded-full bg-green-400 shadow-inner mr-1 border-3 border-green-200"></span>
      <p>2 SPOTS AVAILABLE</p>
    </div>
    <div className="overflow-hidden w-3/4">
      <div className="flex gap-4 lg:gap-14 xl:gap-28 mt-6 mb-10 animate-marquee min-w-max">
        <Image
          src="/images/DataGrail_Logo.svg"
          alt="Window"
          className="h-10 md:h-13 xl:h-14 w-auto grayscale opacity-30"
          width={80}
          height={32}
        />
        <Image
          src="/images/TrustArc_Logo.svg"
          alt="TrustArc Logo"
          className="h-10 md:h-13 xl:h-14 w-auto grayscale opacity-30"
          width={80}
          height={32}
        />
        <Image
          src="/images/mine_Logo.svg"
          alt="TrustArc Logo"
          className="h-10 md:h-13 xl:h-14 w-auto grayscale opacity-30"
          width={80}
          height={32}
        />
        <Image
          src="/images/DataGrail_Logo.svg"
          alt="Window"
          className="h-10 md:h-13 xl:h-14 w-auto grayscale opacity-30"
          width={80}
          height={32}
        />
        <Image
          src="/images/DataGrail_Logo.svg"
          alt="Window"
          className="h-10 md:h-13 xl:h-14 w-auto grayscale opacity-30"
          width={80}
          height={32}
        />
        <Image
          src="/images/TrustArc_Logo.svg"
          alt="TrustArc Logo"
          className="h-10 md:h-13 xl:h-14 w-auto grayscale opacity-30"
          width={80}
          height={32}
        />
        <Image
          src="/images/mine_Logo.svg"
          alt="TrustArc Logo"
          className="h-10 md:h-13 xl:h-14 w-auto grayscale opacity-30"
          width={80}
          height={32}
        />
        <Image
          src="/images/DataGrail_Logo.svg"
          alt="Window"
          className="h-10 md:h-13 xl:h-14 w-auto grayscale opacity-30"
          width={80}
          height={32}
        />
      </div>
    </div>
    <div className="relative overflow-hidden h-full lg:h-full xl:h-full w-full md:w-3/4 xl:mb-12">
      <Image
        src="/images/dashboard-4.png"
        alt="dashboard"
        className="w-full h-auto object-cover rounded-xl"
        width={480}
        height={160}
      />
      {/* Bottom blur overlay */}
      <div
        className="pointer-events-none absolute left-0 bottom-0 w-full h-16 md:h-24 rounded-b-xl"
        style={{
          background:
            "linear-gradient(to top, rgba(255,255,255,0.8) 70%, transparent 100%)",
          filter: "blur(4px)",
        }}
      />
    </div>
  </div>
);

export default Hero;

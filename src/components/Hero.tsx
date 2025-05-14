import React from "react";
import Image from "next/image";

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
      <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-2xl font-semibold shadow-lg shadow-black/40 hover:shadow-xl transition cursor-pointer">
        Get Early Access
        <span>→</span>
      </button>
      <button className="px-6 py-2 bg-white border border-gray-100 rounded-2xl font-semibold text-gray-900 shadow hover:shadow-2xl hover:bg-gray-50 transition cursor-pointer">
        Sign Up
      </button>
    </div>
    <div className="flex gap-4 lg:gap-14 xl:flex flex-wrap justify-center items-center xl:gap-28 mt-6 mb-10">
      <Image
        src="/images/DataGrail_Logo.svg"
        alt="Window"
        className="h-10 md:h-13 xl:h-17 w-auto grayscale opacity-30 fade-left"
        width={80}
        height={32}
      />
      <Image
        src="/images/TrustArc_Logo.svg"
        alt="TrustArc Logo"
        className="h-10 md:h-13 xl:h-17 w-auto grayscale opacity-30"
        width={80}
        height={32}
      />
      <Image
        src="/images/mine_Logo.svg"
        alt="TrustArc Logo"
        className="h-10 md:h-13 xl:h-17 w-auto grayscale opacity-30"
        width={80}
        height={32}
      />
      <Image
        src="/images/DataGrail_Logo.svg"
        alt="Window"
        className="h-10 md:h-13 xl:h-17 w-auto grayscale opacity-30 fade-right"
        width={80}
        height={32}
      />
    </div>
    <div className="overflow-hidden h-full lg:h-full xl:h-full w-full md:w-3/4 xl:mb-12">
      <Image
        src="/images/dashboard-4.png"
        alt="dashboard"
        className="w-full h-auto object-cover rounded-xl"
        width={480}
        height={160}
      />
    </div>
  </div>
);

export default Hero;

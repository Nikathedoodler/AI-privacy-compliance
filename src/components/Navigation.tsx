"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-[90%] md:w-5/8 mx-auto flex items-center justify-between py-4 px-6 md:px-8 bg-white/80 backdrop-blur-md border border-gray-100 rounded-full mt-0 shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/images/logo.png"
          alt="Cuckoo Logo"
          width={32}
          height={32}
        />
        <span className="font-bold text-lg">Doo</span>
      </div>
      {/* Center: Links */}
      <div className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-black transition">
          Features
        </a>
        <a href="#" className="hover:text-black transition">
          Pricing
        </a>
        <a href="#" className="hover:text-black transition">
          Contact
        </a>
      </div>
      {/* Right: Language, Login */}
      <div className="flex space-x-4">
        <button className="px-6 py-2 mr-0 bg-black border border-gray-100 rounded-2xl font-semibold text-white shadow hover:shadow-xl transition cursor-pointer">
          Book a Demo
        </button>
        <div className="reletaive">
          <button
            className="lg:hidden cursor-pointer ml-2 pt-1"
            onClick={toggleMenu}
          >
            <Image
              src="/images/menu-bar-2.png"
              alt="burger-menu"
              width={36}
              height={18}
            />
          </button>
          {isOpen && (
            <div
              className={`lg:hidden absolute top-20 right-1 bg-white shadow-lg rounded-3xl p-4 w-40 z-10 transition-all duration-300 ease-in-out
                ${
                  isOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
            >
              <div className="flex items-center hover:bg-gray-100">
                <Image
                  src="/images/features.png"
                  alt="pricing"
                  className="h-7 w-auto"
                  width={24}
                  height={8}
                />
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Features
                </a>
              </div>
              <div className="flex items-center hover:bg-gray-100">
                <Image
                  src="/images/pricing.svg"
                  alt="pricing"
                  className="h-7 w-auto"
                  width={24}
                  height={8}
                />
                <a href="#" className="block px-4 py-2 text-gray-700">
                  Pricing
                </a>
              </div>
              <div className="flex items-center hover:bg-gray-100">
                <Image
                  src="/images/contact.png"
                  alt="pricing"
                  className="h-7 w-auto"
                  width={24}
                  height={8}
                />
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

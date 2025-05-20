"use client";

import React, { act } from "react";
import { useState } from "react";

const Dashboard = () => {
  const [activeSection, setActiveSection] = React.useState("users");
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const navButtonClass = (section: string) =>
    `px-6 py-4 rounded-4xl font-semibold cursor-pointer flex items-center gap-2 bg-[#232a41] ${
      activeSection === section ? "bg-[#B9FF66] text-black" : "text-gray-300"
    }`;

  return (
    <div
      id="#dashboard"
      className="w-full flex flex-col xl:space-y-16 mx-auto min-h-screen py-10 px-12 2xl:px-30 font-[\'CoFo Sans\',sans-serif]"
      style={{
        background:
          "radial-gradient(ellipse at 60% 0%, #232a41 0%, #191E2C 70%, #191E2C 100%)",
      }}
    >
      <div className="text-[#ffffff] flex justify-between items-center">
        <div className="flex">
          {/* Responsive navigation: horizontal on lg+, vertical sidebar on <lg */}
          <div className="flex xl:flex-row flex-col xl:space-x-2 xl:space-y-0 space-y-4 xl:items-center items-start xl:w-auto w-16 fixed xl:static left-0 top-0 z-30 h-full bg-transparent xl:bg-transparent pt-33 xl:pt-0 ml-10">
            <button
              onClick={() => handleSectionChange("dashboard")}
              className={
                navButtonClass("dashboard") +
                " w-full justify-center xl:justify-start"
              }
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect
                  x="4"
                  y="4"
                  width="5"
                  height="5"
                  rx="1.5"
                  stroke="currentColor"
                />
                <rect
                  x="15"
                  y="4"
                  width="5"
                  height="5"
                  rx="1.5"
                  stroke="currentColor"
                />
                <rect
                  x="15"
                  y="15"
                  width="5"
                  height="5"
                  rx="1.5"
                  stroke="currentColor"
                />
                <rect
                  x="4"
                  y="15"
                  width="5"
                  height="5"
                  rx="1.5"
                  stroke="currentColor"
                />
              </svg>
              <span className="hidden xl:inline">Dashboard</span>
            </button>
            <button
              onClick={() => handleSectionChange("user")}
              className={
                navButtonClass("user") +
                " w-full justify-center xl:justify-start"
              }
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" />
                <path d="M7 21v-2a4 4 0 0 1 3-3.87" stroke="currentColor" />
                <circle cx="12" cy="7" r="4" stroke="currentColor" />
              </svg>
              <span className="hidden xl:inline">Users</span>
            </button>
            <button
              onClick={() => handleSectionChange("usage")}
              className={
                navButtonClass("usage") +
                " w-full justify-center xl:justify-start"
              }
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                  stroke="currentColor"
                />
                <path d="M12 6v6l4 2" stroke="currentColor" />
              </svg>
              <span className="hidden xl:inline">Usage</span>
            </button>
            <button
              onClick={() => handleSectionChange("templates")}
              className={
                navButtonClass("templates") +
                " w-full justify-center xl:justify-start"
              }
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                  stroke="currentColor"
                />
                <path
                  d="M20 2H6.5A2.5 2.5 0 0 0 4 4.5v15"
                  stroke="currentColor"
                />
              </svg>
              <span className="hidden xl:inline">Templates</span>
            </button>
            <button
              onClick={() => handleSectionChange("booking")}
              className={
                navButtonClass("booking") +
                " w-full justify-center xl:justify-start"
              }
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" stroke="currentColor" />
              </svg>
              <span className="hidden xl:inline">Booking</span>
            </button>
          </div>
        </div>
        <div className="flex space-x-4 items-center mb-10 xl:mb-0">
          <button className="flex items-center gap-2 px-6 py-4 rounded-4xl bg-[#232a41] text-gray-300 font-semibold cursor-pointer hover:bg-[#232a41] transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 14v2a4 4 0 01-8 0v-2m8 0a4 4 0 00-8 0m8 0V7a4 4 0 00-8 0v7m8 0h2m-2 0v2m0-2v-2"
              />
              <circle
                cx="9"
                cy="7"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M17 11h4m-2-2v4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Invite user
          </button>
          <button className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#232a41] hover:bg-[#2c3450] transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-300 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#232a41]" />
          </button>
          <button className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#232a41] hover:bg-[#2c3450] transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-300 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#232a41]" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#232a41] hover:bg-[#2c3450] transition overflow-hidden">
            <img
              src="/images/face-2.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
            />
          </button>
        </div>
      </div>
      {activeSection === "dashboard" && (
        <div className="ml-22 xl:ml-10 text-gray-300">
          <div className="text-4xl font-semibold mb-10">Dashboard</div>
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Projects Card */}
            <div className="w-full xl:w-5/8 rounded-4xl bg-[#232a41] text-gray-300 font-semibold cursor-pointer p-8 shadow-lg flex flex-col gap-6 min-w-[320px]">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold">
                  Projects{" "}
                  <span className="text-[#6C7A93] text-lg font-normal">
                    {`{88}`}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#232a41] border border-[#31374a] hover:bg-[#31374a] transition">
                    <svg
                      className="h-5 w-5 text-[#B9FF66]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 5v14m7-7H5" strokeLinecap="round" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#232a41] border border-[#31374a] hover:bg-[#31374a] transition">
                    <svg
                      className="h-5 w-5 text-[#6C7A93]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {/* Example Project Card */}
                <div className="rounded-2xl p-5 bg-[#3D55B6] text-white relative overflow-hidden flex flex-col min-h-[120px]">
                  <div className="text-xs opacity-70 mb-1">#Finance</div>
                  <div className="font-bold text-lg">Decem App</div>
                  <div className="text-xs opacity-70 mb-2">
                    Completed tasks: 988
                  </div>
                  <div className="flex items-end justify-between mt-auto">
                    <div className="font-bold text-2xl">$ 391,991</div>
                    <div className="flex -space-x-2">
                      <img
                        src="/images/face-2.jpg"
                        className="w-7 h-7 rounded-full border-2 border-[#232a41]"
                        alt=""
                      />
                      <img
                        src="/images/face-2.jpg"
                        className="w-7 h-7 rounded-full border-2 border-[#232a41]"
                        alt=""
                      />
                      <span className="ml-2 text-xs bg-[#232a41] rounded-full px-2 py-0.5">
                        +12
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 opacity-30">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 18l6-6-6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="rounded-2xl p-5 bg-[#DC6F31] text-white relative overflow-hidden flex flex-col min-h-[120px]">
                  <div className="text-xs opacity-70 mb-1">#Education</div>
                  <div className="font-bold text-lg">SkyLux</div>
                  <div className="text-xs opacity-70 mb-2">
                    Completed tasks: 12
                  </div>
                  <div className="flex items-end justify-between mt-auto">
                    <div className="font-bold text-2xl">$ 51,792</div>
                    <div className="flex -space-x-2">
                      <img
                        src="/images/face-2.jpg"
                        className="w-7 h-7 rounded-full border-2 border-[#232a41]"
                        alt=""
                      />
                      <img
                        src="/images/face-2.jpg"
                        className="w-7 h-7 rounded-full border-2 border-[#232a41]"
                        alt=""
                      />
                      <span className="ml-2 text-xs bg-[#232a41] rounded-full px-2 py-0.5">
                        +3
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 opacity-30">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 18l6-6-6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="rounded-2xl p-5 bg-[#3D55B6] text-white relative overflow-hidden flex flex-col min-h-[120px]">
                  <div className="text-xs opacity-70 mb-1">#Finance</div>
                  <div className="font-bold text-lg">DushMash</div>
                  <div className="text-xs opacity-70 mb-2">
                    Completed tasks: 32
                  </div>
                  <div className="flex items-end justify-between mt-auto">
                    <div className="font-bold text-2xl">$ 31,955</div>
                    <div className="flex -space-x-2">
                      <img
                        src="/images/face-2.jpg"
                        className="w-7 h-7 rounded-full border-2 border-[#232a41]"
                        alt=""
                      />
                      <span className="ml-2 text-xs bg-[#232a41] rounded-full px-2 py-0.5">
                        +2
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 opacity-30">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 18l6-6-6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="rounded-2xl p-5 bg-[#4E956A] text-white relative overflow-hidden flex flex-col min-h-[120px]">
                  <div className="text-xs opacity-70 mb-1">#Healthcare</div>
                  <div className="font-bold text-lg">Biofarm</div>
                  <div className="text-xs opacity-70 mb-2">
                    Completed tasks: 19
                  </div>
                  <div className="flex items-end justify-between mt-auto">
                    <div className="font-bold text-2xl">$ 11,538</div>
                    <div className="flex -space-x-2">
                      <img
                        src="/images/face-2.jpg"
                        className="w-7 h-7 rounded-full border-2 border-[#232a41]"
                        alt=""
                      />
                      <span className="ml-2 text-xs bg-[#232a41] rounded-full px-2 py-0.5">
                        +4
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 opacity-30">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 18l6-6-6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="rounded-2xl p-5 bg-[#C50505] text-white relative overflow-hidden flex flex-col min-h-[120px]">
                  <div className="text-xs opacity-70 mb-1">#Travel</div>
                  <div className="font-bold text-lg">PAD move</div>
                  <div className="text-xs opacity-70 mb-2">
                    Completed tasks: 35
                  </div>
                  <div className="flex items-end justify-between mt-auto">
                    <div className="font-bold text-2xl">$ 21,688</div>
                    <div className="flex -space-x-2">
                      <img
                        src="/images/face-2.jpg"
                        className="w-7 h-7 rounded-full border-2 border-[#232a41]"
                        alt=""
                      />
                      <span className="ml-2 text-xs bg-[#232a41] rounded-full px-2 py-0.5">
                        +2
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 opacity-30">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 18l6-6-6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="rounded-2xl p-5 bg-[#5f7ae5] text-white relative overflow-hidden flex flex-col min-h-[120px]">
                  <div className="text-xs opacity-70 mb-1">#Finance</div>
                  <div className="font-bold text-lg">DushMash</div>
                  <div className="text-xs opacity-70 mb-2">
                    Completed tasks: 32
                  </div>
                  <div className="flex items-end justify-between mt-auto">
                    <div className="font-bold text-2xl">$ 31,955</div>
                    <div className="flex -space-x-2">
                      <img
                        src="/images/face-2.jpg"
                        className="w-7 h-7 rounded-full border-2 border-[#232a41]"
                        alt=""
                      />
                      <span className="ml-2 text-xs bg-[#232a41] rounded-full px-2 py-0.5">
                        +2
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 opacity-30">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 18l6-6-6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            {/* Tools Section: AI Prompt Form + Export */}
            <div className="bg-transparent rounded-4xl p-8 shadow-lg flex flex-col gap-6">
              <div className="text-2xl font-bold mb-2">AI Tools</div>
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  /* handle AI call here */
                }}
              >
                <label className="font-semibold">Prompt</label>
                <textarea
                  className="bg-[#191E2C] border border-[#3D55B6] rounded-xl p-3 text-white resize-none focus:outline-none focus:border-[#B9FF66] transition"
                  rows={3}
                  placeholder="Ask the AI anything..."
                  required
                />
                <div className="flex gap-4 mt-2">
                  <button
                    type="submit"
                    className="bg-[#B9FF66] text-black font-bold px-6 py-2 rounded-xl hover:bg-[#A0E95A] transition"
                  >
                    Run AI
                  </button>
                  <button
                    type="button"
                    className="bg-[#459BBE] text-white font-bold px-6 py-2 rounded-xl hover:bg-[#357ca0] transition"
                    // onClick={handleExport}
                  >
                    Export
                  </button>
                </div>
              </form>
              {/* AI result output placeholder */}
              <div className="bg-[#191E2C] rounded-xl p-4 min-h-[60px] mt-2 text-[#B9FF66] text-lg">
                {/* AI result will appear here */}
                <span className="opacity-60">
                  AI output will appear here...
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

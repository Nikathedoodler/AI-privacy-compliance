import React from "react";

const Pricing = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 bg-black">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Choose Your Plan
      </h2>
      <div className="w-[90%] max-w-5xl flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Starter Plan */}
        <div className="flex-1">
          <div className="flex-1 bg-white/90 rounded-4xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 -mb-16 relative z-10">
            <div className="p-8 pb-4 flex flex-col items-center">
              <div className="text-gray-500 font-semibold mb-2">Starter</div>
              <div className="text-4xl font-bold text-gray-900">
                $0<span className="text-lg font-normal">/month</span>
              </div>
              <div className="text-xs text-gray-500 mb-6">
                (15% Commission On Sales/Tips)
              </div>
              <button className="w-full py-3 bg-black text-white rounded-full font-semibold shadow hover:bg-gray-900 transition mb-4">
                CHOOSE PLAN
              </button>
            </div>
          </div>
          {/* White overlay for intersection */}
          <div className="relative z-0">
            <div className="bg-black/90 border border-gray-800 text-white rounded-4xl flex-1 p-6 flex flex-col gap-3 text-sm pt-20 relative z-0">
              <div className="flex items-center gap-2">
                <span>✔</span>Automated Sales Chat
              </div>
              <div className="flex items-center gap-2">
                <span>✔</span>Manage Multiple Creators
              </div>
              <div className="flex items-center gap-2">
                <span>✔</span>AI-Powered Personalized Convos
              </div>
              <div className="flex items-center gap-2">
                <span>✔</span>Media Curation & Upsells
              </div>
            </div>
          </div>
        </div>
        {/* Pro Plan */}
        <div className="flex-1">
          <div className="flex-1 bg-lime-200 rounded-4xl flex flex-col border-4 border-b-8 border-lime-500 -mb-16 relative z-10">
            <div className="p-8 pb-4 flex flex-col items-center">
              <div className="text-gray-500 font-semibold mb-2">Pro</div>
              <div className="text-4xl font-bold text-gray-900">
                $30<span className="text-lg font-normal">/month</span>
              </div>
              <div className="text-xs text-gray-500 mb-6">
                (10% Commission On Sales/Tips)
              </div>
              <button className="w-full py-3 bg-black text-white rounded-full font-semibold shadow hover:bg-gray-900 transition mb-2">
                CHOOSE PLAN
              </button>
            </div>
          </div>
          <div className="relative z-0">
            <div className="bg-black/90 border border-gray-800 text-white rounded-4xl flex-1 p-6 flex flex-col gap-3 text-sm pt-20 pb-16 relative z-0">
              <div className="flex items-center gap-2">
                <span>✔</span>Everything In Starter
              </div>
              <div className="flex items-center gap-2">
                <span>✔</span>Customizable AI Personalities & Conversatin Styles
              </div>
            </div>
          </div>
        </div>
        {/* Elite Plan */}
        <div className="flex-1">
          <div className="flex-1 bg-white/90 rounded-4xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 -mb-16 relative z-10">
            <div className="p-8 pb-4 flex flex-col items-center">
              <div className="text-gray-500 font-semibold mb-2">ELITE</div>
              <div className="text-4xl font-bold text-gray-900">
                $100<span className="text-lg font-normal">/month</span>
              </div>
              <div className="text-xs text-gray-500 mb-6">
                (8.5% Commission On Sales/Tips)
              </div>
              <button className="w-full py-3 bg-black text-white rounded-full font-semibold shadow hover:bg-gray-900 transition mb-4">
                CHOOSE PLAN
              </button>
            </div>
          </div>
          <div className="relative z-0">
            <div className="bg-black/90 border border-gray-800 text-white rounded-4xl flex-1 p-6 flex flex-col gap-3 text-sm pt-20 pb-22 relative z-0">
              <div className="flex items-center gap-2">
                <span>✔</span>Everything In Pro
              </div>
              <div className="flex items-center gap-2">
                <span>✔</span>Lowest Commission = Highest Margins
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

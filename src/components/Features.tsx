import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

const Features = () => {
  return (
    <div
      id="features"
      className="w-full mx-auto text-gray-900 flex flex-col space-y-10 xl:w-3/4 py-10 px-12 scroll-mt-40"
    >
      <motion.div
        // initial={{ y: 30, opacity: 0 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // transition={{ duration: 1, delay: 1 }}
        className="flex flex-col sm:flex-row sm:justify-between space-y-6 sm:items-center text-center"
      >
        <div className="sm:w-3/4 lg:w-1/2 space-y-4">
          <h1 className="text-2xl sm:text-lg lg:text-xl sm:text-start font-bold mb-2">
            AI-Powered Compliance Tools
          </h1>
          <p className="sm:w-3/4 lg:w-full text-sm lg:text-md sm:text-start text-gray-500">
            Leverage advanced AI to automate compliance checks, ensuring your
            data always meet the latest privacy standards.
          </p>
        </div>
        <button className="w-full sm:w-auto min-w-[120px] max-w-[150px] mx-auto sm:mx-0 px-4 py-2 bg-black text-white rounded-full font-semibold shadow-md shadow-black/80 hover:shadow-md hover:shadow-green-400 transition-all duration-200 hover:scale-110 group cursor-pointer">
          Watch a Demo
        </button>
      </motion.div>
      {/* New Section: Cutting-edge AI models */}
      <motion.div
        // initial={{ y: 0, opacity: 0 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.6, delay: 0.8 }}
        className="w-full rounded-2xl p-4 sm:p-6 md:p-8 md:pr-0 mb-8 bg-gradient-to-r from-black via-gray-900 to-gray-400 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl"
      >
        {/* Left: Title and Buttons */}
        <div className="flex-1 flex flex-col gap-3 sm:gap-4 text-white text-center md:text-left">
          <h2 className="text-start text-xl sm:text-2xl md:text-2xl lg:text-lg xl:text-xl font-bold">
            Stay ahead of evolving regulations with our AI models
          </h2>
          <p className="text-sm text-start sm:text-base md:text-base lg:text-sm xl:text-sm opacity-80">
            Built for security, ease of use, and rapid deployment, our solution
            combines AI-driven tools, user-friendly dashboards, and robust
            compliance features-all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 justify-center md:justify-start">
            <button className="bg-white text-[#1e1a5a] font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition w-full sm:w-auto cursor-pointer">
              Browse AI Models
            </button>
          </div>
        </div>
        {/* Right: AI Model Cards */}
        <div className="flex-1 w-full flex flex-col sm:flex-row gap-4">
          <div className="flex-1 min-w-[180px] bg-white/10 rounded-xl p-4 flex flex-col justify-between shadow items-center sm:items-start text-center sm:text-left">
            <div>
              <div className="w-10 h-10 mb-2 rounded-lg bg-white/20 flex items-center justify-center mx-auto sm:mx-0">
                {/* Google AI logo */}
                <Image
                  src="/images/TrustArc_Logo.svg"
                  alt="Google AI"
                  width={32}
                  height={32}
                />
              </div>
              <div className="font-semibold">Google AI</div>
              <div className="text-xs opacity-80">
                Build your own AI project.
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[180px] bg-white/10 rounded-xl p-4 flex flex-col justify-between shadow items-center sm:items-start text-center sm:text-left">
            <div>
              <div className="w-10 h-10 mb-2 rounded-lg bg-white/20 flex items-center justify-center mx-auto sm:mx-0">
                {/* Anthropic logo */}
                <Image
                  src="/images/Mine_Logo.svg"
                  alt="Anthropic"
                  width={32}
                  height={32}
                />
              </div>
              <div className="font-semibold">Anthropic</div>
              <div className="text-xs opacity-80">
                Custom assistance at scale.
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[180px] bg-white/10 rounded-xl p-4 flex flex-col justify-between shadow items-center sm:items-start text-center sm:text-left fade-right">
            <div>
              <div className="w-10 h-10 mb-2 rounded-lg bg-white/20 flex items-center justify-center mx-auto sm:mx-0">
                {/* Perplexity logo */}
                <Image
                  src="/images/DataGrail_Logo.svg"
                  alt="Perplexity"
                  width={32}
                  height={32}
                />
              </div>
              <div className="font-semibold">Perplexity</div>
              <div className="text-xs opacity-80">Effective LLM queries.</div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Available Features */}
      <motion.div
        // initial={{ y: 30, opacity: 0 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // transition={{ duration: 1, delay: 1 }}
        className="w-full bg-gray-100 rounded-xl p-6 shadow-2xl "
      >
        <div>
          <h1 className="text-xl font-bold">Available Features</h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="flex flex-col items-center lg:items-start space-y-2 bg-gray-100 rounded-xl p-6 shadow-xl hover:-translate-y-2  hover:-translate-x-2 duration-500 hover:shadow-lg hover:bg-pink-100 cursor-pointer">
            <Image
              alt="logo"
              src="/images/secure-dash.png"
              className="h-10 lg:h-10 w-auto"
              width={32}
              height={16}
            />
            <h1 className="text-md font-semibold text-center lg:text-start">
              Secure User Dashboard
            </h1>
            <p className="hidden xl:block text-sm xl:text-xs">
              Central hub for monitoring privacy management activities
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-2 bg-gray-100 rounded-xl p-6 shadow-xl hover:-translate-y-2  hover:translate-x-2 duration-500 hover:shadow-lg hover:bg-pink-100 cursor-pointer">
            <Image
              alt="logo"
              src="/images/documents.svg"
              className="h-10 lg:h-10 w-auto"
              width={32}
              height={16}
            />
            <h1 className="text-md font-semibold text-center lg:text-start">
              Document & Template Library
            </h1>
            <p className="hidden xl:block text-sm xl:text-xs">
              Ready-to-use privacy policy documents and templates for compliance
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-2 bg-gray-100 rounded-xl p-6 shadow-xl hover:-translate-y-2  hover:-translate-x-2 duration-500 hover:shadow-lg hover:bg-pink-100 cursor-pointer">
            <Image
              alt="logo"
              src="/images/form-data.png"
              className="h-10 lg:h-10 w-auto"
              width={32}
              height={16}
            />
            <h1 className="text-md font-semibold text-center lg:text-start">
              Form Tools & Data Export
            </h1>
            <p className="hidden xl:block text-sm xl:text-xs">
              Dynamic form builders with options to exporting user data
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-2 bg-gray-100 rounded-xl p-6 shadow-xl hover:-translate-y-2  hover:translate-x-2 duration-500 hover:shadow-lg hover:bg-pink-100 cursor-pointer">
            <Image
              alt="logo"
              src="/images/admin.png"
              className="h-10 lg:h-8 w-auto"
              width={32}
              height={16}
            />
            <h1 className="text-md font-semibold text-center lg:text-start">
              Admin Panel
            </h1>
            <p className="hidden xl:block text-sm xl:text-xs">
              Control panel for managing user data, compliance settings, and
              more
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-2 bg-gray-100 rounded-xl p-6 shadow-xl hover:-translate-y-2  hover:-translate-x-2 duration-500 hover:shadow-lg hover:bg-pink-100 cursor-pointer">
            <Image
              alt="logo"
              src="/images/security.png"
              className="h-10 lg:h-8 w-auto"
              width={32}
              height={16}
            />
            <h1 className="text-md font-semibold text-center lg:text-start">
              End-to-End Security
            </h1>
            <p className="hidden xl:block text-sm xl:text-xs">
              Continues security measures covering all platform operations
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-2 bg-gray-100 rounded-xl p-6 shadow-xl hover:-translate-y-2  hover:translate-x-2 duration-500 hover:shadow-lg hover:bg-pink-100 cursor-pointer">
            <Image
              alt="logo"
              src="/images/payment.png"
              className="h-10 lg:h-10 w-auto"
              width={32}
              height={16}
            />
            <h1 className="text-md font-semibold text-center lg:text-start">
              Booking & Payments
            </h1>
            <p className="hidden xl:block text-sm xl:text-xs">
              System for scheduling consultainons and processing payments
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-2 bg-gray-100 rounded-xl p-6 shadow-xl hover:-translate-y-2  hover:-translate-x-2 duration-500 hover:shadow-lg hover:bg-pink-100 cursor-pointer">
            <Image
              alt="logo"
              src="/images/certification.svg"
              className="h-10 lg:h-10 w-auto"
              width={32}
              height={16}
            />
            <h1 className="text-md font-semibold text-center lg:text-start">
              Training & Certification
            </h1>
            <p className="hidden xl:block text-sm xl:text-xs">
              Educational Resources & Privacy Complinace Certification
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-2 bg-gray-100 rounded-xl p-6 shadow-xl hover:-translate-y-2  hover:translate-x-2 duration-500 hover:shadow-lg hover:bg-pink-100 cursor-pointer">
            <Image
              alt="logo"
              src="/images/encryption.png"
              className="h-10 lg:h-10 w-auto"
              width={32}
              height={16}
            />
            <h1 className="text-md font-semibold text-center lg:text-start">
              End-to-End Encryption
            </h1>
            <p className="hidden xl:block text-sm xl:text-xs">
              Continues security measures covering all platform operations
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;

"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const DarkWebReport = () => {
  const [domain, setDomain] = useState("");
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <motion.div
      className="min-h-screen bg-[#0D1117] text-white font-sans"
      style={{ backgroundPositionY: backgroundY }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Dark Web Report</h1>
            <p className="text-lg mb-8">
              Discover the hidden threats with SOCRadar Labs' Dark Web Report.
              In a flash, unveil if your data's made an appearance in the
              shadowy corners of dark web forums, black markets, leak sites, or
              Telegram channels.
            </p>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Do not use http:// or www"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full bg-[#1C2128] py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4C79]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF4C79] text-white px-4 py-2 rounded-md"
              >
                Free Report
              </motion.button>
            </div>
            <p className="text-sm text-gray-400">
              Type your domain to get your free dark web report
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/dark-web-report-preview.png"
              alt="Dark Web Report Preview"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Additional Sections */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            className="bg-[#1C2128] p-4 rounded-md mb-4 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                Country Threat Landscape Report
              </h2>
              <span className="text-2xl">+</span>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#1C2128] p-4 rounded-md cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">IOC Radar</h2>
              <span className="text-2xl">+</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DarkWebReport;

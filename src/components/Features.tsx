"use client";
import { motion } from "framer-motion";
import React from "react";
import Feature from "./Feature";
import { FaPager } from "react-icons/fa";
import { MdDevices, MdLayers, MdDesignServices } from "react-icons/md";
import { BiCustomize } from "react-icons/bi";
import { RiLayout2Fill } from "react-icons/ri";
import Image from "next/image";

const features = [
  {
    title: "Landing Page",
    description:
      "Create stunning landing pages that convert visitors into customers.",
    icon: <FaPager />,
  },
  {
    title: "Auto Layout",
    description:
      "Automate your layout process to create consistent designs effortlessly.",
    icon: <RiLayout2Fill />,
  },
  {
    title: "Pixel Perfect Design",
    description: "Achieve precision in your designs down to the last pixel.",
    icon: <MdDesignServices />,
  },
  {
    title: "Mobile Responsive",
    description:
      "Ensure your designs look great on any device, from mobile to desktop.",
    icon: <MdDevices />,
  },
  {
    title: "Easy Customizable",
    description: "Easily customize your designs to match your brand and style.",
    icon: <BiCustomize />,
  },
  {
    title: "Organized Layer",
    description:
      "Keep your design layers organized for better workflow and productivity.",
    icon: <MdLayers />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Features = () => {
  return (
    <div className="bg-black text-white py-[70px] sm:py-24">
      <div className="container relative mx-auto px-4">
        <motion.div
          className="absolute top-[20%] z-20 right-9"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/star.avif"
            width={50}
            height={50}
            alt="star"
            className="hero-object"
          />
        </motion.div>
        <motion.h2
          className="text-center font-bold text-5xl sm:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Everything you need
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy customizable lists, teamwork tools, and tracking all in one
            place. Set tasks, get reminders, and see your progress simply and
            quickly.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map(({ title, description, icon }, i) => (
            <Feature
              title={title}
              description={description}
              icon={icon}
              key={i}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;

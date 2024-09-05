"use client";

import Image from "next/image";
import appScreen from "../../public/showcase.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProductShowcase = () => {
  const scrollRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black to-[#5D2CAB] py-24 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl sm:text-7xl md:text-7xl font-bold mb-8">
          Intuitive Interface
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-center text-white/70 mb-16">
            Experience a sleek and modern interface that enhances user
            engagement. Our design ensures an intuitive and seamless user
            experience.
          </p>
        </div>
        <motion.div
          className="max-w-[1300px] mx-auto"
          style={{
            opacity: opacity,
            rotateX: rotateX,
            translateY: translateY,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={appScreen}
            alt="Product Screenshot"
            className="rounded-lg shadow-2xl"
            ref={scrollRef}
          />
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#5D2CAB] to-transparent"
        style={{
          translateY: useTransform(scrollYProgress, [0, 1], [100, 0]),
        }}
      />
    </div>
  );
};

export default ProductShowcase;

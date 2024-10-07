
"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimation,
  useInView,
} from "framer-motion";

const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  const background = useMotionTemplate`radial-gradient(
    300px circle at ${mouseX}px ${mouseY}px,
    rgba(128, 0, 128, 0.15),
    transparent 80%
  )`;

  const borderX = useMotionValue(-100);
  const borderY = useMotionValue(-100);
  const borderMask = useMotionTemplate`radial-gradient(
    100px 100px at ${borderX}px ${borderY}px,
    black,
    transparent
  )`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
      borderX.set(e.clientX - rect.left);
      borderY.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden border border-white/30 px-5 py-5 lg:py-10 text-center rounded-lg backdrop-filter backdrop-blur-lg bg-white/10"
      style={{ background }}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-lg"
        style={{
          WebkitMaskImage: borderMask,
          maskImage: borderMask,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-xl shadow-lg">
          <div className="text-2xl">{icon}</div>
        </motion.div>
        <motion.h3
          className="mt-6 font-bold text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="mt-2 text-lg text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Feature;

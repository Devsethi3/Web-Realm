// BentoGridWrapper
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <motion.div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <div className="absolute inset-0 overflow-hidden">
      {background}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
    </div>
    <div className="relative z-10 flex h-full flex-col justify-end p-6">
      <motion.div
        className="flex flex-col gap-2"
        initial={{ y: 0 }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <Icon className="h-8 w-8 text-white" />
          <h3 className="text-xl font-semibold text-white">{name}</h3>
        </div>
        <p className="max-w-lg text-neutral-200">{description}</p>
      </motion.div>
    </div>

    <motion.div
      className="absolute bottom-0 left-0 right-0 p-6"
      initial={{ y: 20, opacity: 0 }}
      whileHover={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 15px rgba(149, 96, 235, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-[#9560EB] to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center gap-2"
      >
        {cta} <FaArrowRight />
      </motion.button>
    </motion.div>
  </motion.div>
);

export { BentoCard, BentoGrid };

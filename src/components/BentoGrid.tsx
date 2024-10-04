// BentoGrid
import { BentoCard, BentoGrid } from "./BentoGridWrapper";
import {
  FaBell,
  FaCalendarAlt,
  FaFileAlt,
  FaShareSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";

const placeholderImages = [
  "/showcase-3.png",
  "/showcase-1.png",
  "/dark-theme.png",
  "/showcase-4.svg",
];

const features = [
  {
    Icon: FaFileAlt,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <motion.img
        src={placeholderImages[0]}
        alt="Save your files"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    ),
  },
  {
    Icon: FaBell,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <motion.img
        src={placeholderImages[1]}
        alt="Notifications"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    ),
  },
  {
    Icon: FaShareSquare,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <motion.img
        src={placeholderImages[2]}
        alt="Integrations"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    ),
  },
  {
    Icon: FaCalendarAlt,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <motion.img
        src={placeholderImages[3]}
        alt="Calendar"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    ),
  },
];

export function BentoGridContent() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

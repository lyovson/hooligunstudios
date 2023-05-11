"use client";

import { motion } from "framer-motion";

const buttonVariants = {
  initial: { y: 0, color: "rgb(255 237 213)" },
  hover: { y: 5, color: "rgb(255 237 213)" },
};

export default function Button({ children, className }) {
  return (
    <motion.div variants={buttonVariants} initial="initial" whileHover="hover">
      <button
        className={` rounded-lg border  border-[#bab49e] bg-transparent p-2 text-[#bab49e] shadow-md outline-none ${className}`}
      >
        {children}
      </button>
    </motion.div>
  );
}

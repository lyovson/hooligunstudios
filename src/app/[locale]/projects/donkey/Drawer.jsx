"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Drawer({ title, children, opened }) {
  const [isOpen, setIsOpen] = useState(opened);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <AnimatePresence>
      <article className="flex flex-col gap-2 text-lg">
        <h3
          onClick={toggle}
          className=" mt-4 bg-stone-900 p-4 font-title text-2xl"
        >
          {title}
        </h3>
        {isOpen && (
          <motion.main
            key={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            mode={"sync"}
            className=" bg-stome-900 flex flex-col gap-4  p-4"
          >
            {children}
          </motion.main>
        )}
      </article>
    </AnimatePresence>
  );
}

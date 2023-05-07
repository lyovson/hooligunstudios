"use client";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          className=" mt-4 flex flex-row gap-2 bg-stone-900 p-4  font-title text-2xl"
        >
          {title}
          {!isOpen ? (
            <FontAwesomeIcon icon={faChevronDown} className="mt-2 h-4 w-4" />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} className="mt-2 h-4 w-4" />
          )}
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

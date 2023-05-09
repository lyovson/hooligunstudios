"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  initial: { y: 0 },
  hover: { y: 5 },
};

export default function ProjectCard({ title, info, image }) {
  return (
    <motion.article
      layout
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
      className={` flex  max-h-[300px] max-w-[300px] flex-col items-center rounded-xl  bg-stone-900 bg-opacity-80 shadow-md  `}
    >
      <Image
        className={` rounded-t-xl`}
        src={image}
        width={300}
        height={300}
        alt={title}
      />
      <aside className=" flex w-full flex-col gap-8  rounded-b-xl border border-stone-800 p-4">
        <article className=" flex flex-col gap-2 p-4">
          <h3 className={`text-center font-title text-xl`}>{title}</h3>
        </article>
      </aside>
    </motion.article>
  );
}

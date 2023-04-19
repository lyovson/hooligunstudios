"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import Image from "next/image";

const berg = localFont({ src: "../../public/berg.ttf" });

const cardVariants = {
  initial: { y: 0 },
  hover: { y: 5 },
};

export default function Card({ info }) {
  return (
    <motion.article
      layout
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
      className={` grid grid-cols-1 grid-rows-1  rounded-xl bg-stone-900  bg-opacity-80 p-4   text-[#bab49e]  shadow-md lg:flex-row`}
    >
      <Image
        className={` col-start-1 row-start-1 aspect-auto h-[400px] w-[300px] rounded-xl `}
        src={info.image}
        width={200}
        height={400}
        alt={info.slug}
      />
      <aside className="col-start-1 row-start-1 flex flex-col gap-4 self-end bg-stone-900 bg-opacity-80 p-4 text-justify   lg:text-left">
        <h3 className={`${berg.className} text-3xl`}>{info.name}</h3>
        <p className="text-lg">{info.role}</p>
      </aside>
    </motion.article>
  );
}

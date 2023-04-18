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
      className={` flex max-w-[500px] flex-col items-center gap-8   rounded-xl bg-stone-900  bg-opacity-80 p-4   text-[#bab49e]  shadow-md lg:flex-row`}
    >
      <Image
        className={` aspect-auto rounded-xl `}
        src={info.image}
        width={200}
        height={400}
        alt={info.slug}
      />
      <aside className=" flex flex-col gap-4 text-justify  lg:text-left">
        <h3 className={`${berg.className} text-2xl`}>{info.name}</h3>
        <p className="text-lg">{info.role}</p>
        <p className="">{info.bio}</p>
      </aside>
    </motion.article>
  );
}

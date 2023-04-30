"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
      className={` flex max-w-[300px] flex-col items-center rounded-xl bg-stone-900 bg-opacity-80 shadow-md md:max-w-[800px]  md:flex-row md:justify-center `}
    >
      <Image
        className={` rounded-t-xl md:rounded-l-xl md:rounded-r-none`}
        src={info.image}
        width={300}
        height={300}
        alt={info.slug}
      />
      <aside className=" flex flex-col gap-8  p-4 ">
        <article className=" flex flex-col">
          <h3 className={`font-russian text-2xl font-bold`}>{info.name}</h3>
          <p className=" text-base font-extralight">{info.role}</p>
        </article>
      </aside>
    </motion.article>
  );
}

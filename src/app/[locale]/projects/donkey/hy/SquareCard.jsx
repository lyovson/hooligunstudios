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
      className={` flex max-w-[300px] flex-col items-center rounded-xl bg-stone-900 bg-opacity-80 shadow-md md:max-w-[800px]  md:flex-row md:items-start md:justify-center`}
    >
      <Image
        className={` rounded-t-xl md:rounded-l-xl md:rounded-r-none`}
        src={info.image}
        width={300}
        height={300}
        alt={info.slug}
      />
      <aside className=" flex flex-col gap-8  p-4 ">
        <article className=" flex flex-col gap-2">
          <h3 className={` font-title text-2xl`}>{info.name}</h3>
          <p className="italic">{info.role}</p>
          <p className=" text-base font-extralight">{info.bio}</p>
          {info.approved && (
            <p className=" my-8 w-[120px]  bg-green-700 p-2 text-center text-xs text-black ">
              Հաստատված
            </p>
          )}
          {!info.approved && (
            <p className=" my-8 w-[120px]  bg-yellow-700 p-2 text-center text-xs text-black ">
              Ցանկալի Թեկնածու
            </p>
          )}
        </article>
      </aside>
    </motion.article>
  );
}

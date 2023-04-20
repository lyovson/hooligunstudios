"use client";

import {
  faFacebook,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      className={`  flex  w-[400px]  items-center   `}
    >
      <Image
        className={`  aspect-square  rounded-full `}
        src={info.image}
        width={150}
        height={150}
        alt={info.slug}
      />
      <aside className=" flex flex-col gap-8  p-4 ">
        <article className=" flex flex-col">
          <h3 className={` text-xl font-bold`}>{info.name}</h3>
          <p className=" text-lg font-extralight">{info.role}</p>
        </article>
        <footer className="flex gap-2">
          <FontAwesomeIcon icon={faSquareFacebook} className="h-6 w-6 " />
          <FontAwesomeIcon icon={faSquareInstagram} className="h-6 w-6 " />
          <FontAwesomeIcon icon={faEnvelopeSquare} className="h-6 w-6 " />
        </footer>
      </aside>
    </motion.article>
  );
}

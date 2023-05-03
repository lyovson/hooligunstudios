"use client";

import {
  faBarcode,
  faPeopleGroup,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

const navItemVariants = {
  initial: { y: 0, color: "rgb(255 237 213)" },
  hover: { y: 5, color: "rgb(255 237 213)" },
};

export default function Menu() {
  return (
    <div className=" fixed bottom-0 left-0 right-0 flex items-center justify-around border-b-0 border-t border-[#bab49e] bg-black py-2 text-[#bab49e] shadow-md lg:absolute lg:bottom-auto lg:right-0 lg:top-0 lg:justify-center lg:gap-8 lg:border-b lg:border-t-0 lg:p-8">
      {[
        { href: "/projects/donkey/en", icon: faBarcode, label: "Story" },
        {
          href: "/projects/donkey/en/cast",
          icon: faPeopleGroup,
          label: "Prime Cast",
        },

        {
          href: "/projects/donkey/en/media",
          icon: faPhotoFilm,
          label: "Media",
        },
      ].map((item, index) => (
        <Link key={index} href={item.href}>
          <motion.div
            className="lg: flex cursor-pointer flex-col items-center gap-1 text-[#bab49e] lg:flex-row lg:gap-2 lg:border lg:border-[#bab49e] lg:p-2"
            variants={navItemVariants}
            initial="initial"
            whileHover="hover"
          >
            <FontAwesomeIcon icon={item.icon} size="lg" />
            <span className="text-xs lg:text-lg ">{item.label}</span>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

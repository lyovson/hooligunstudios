"use client";

import {
  faBarcode,
  faPeopleGroup,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItemVariants = {
  initial: { y: 0, color: "rgb(255 237 213)" },
  hover: { y: 5, color: "rgb(255 237 213)" },
};

export default function Menu() {
  return (
    <div className=" fixed bottom-0 left-0 right-0 flex items-center justify-around border-t  border-stone-900 bg-stone-900 py-2 text-[#bab49e] shadow-md lg:bottom-auto lg:left-auto lg:right-16 lg:top-1/2 lg:h-[50%] lg:w-[10%] lg:-translate-y-1/2 lg:transform lg:flex-col  lg:items-start lg:rounded-xl lg:border-t-0 lg:bg-opacity-80 lg:p-2">
      {[
        { href: "/projects/donkey/ru", icon: faBarcode, label: "Тритмент" },
        {
          href: "/projects/donkey/ru/cast",
          icon: faPeopleGroup,
          label: "Прайм Каст",
        },

        {
          href: "/projects/donkey/ru/media",
          icon: faPhotoFilm,
          label: "Медиа",
        },
      ].map((item, index) => (
        <Link key={index} href={item.href}>
          <motion.div
            className="flex cursor-pointer flex-col items-center gap-1 text-[#bab49e] lg:flex-row lg:gap-2 "
            variants={navItemVariants}
            initial="initial"
            whileHover="hover"
          >
            <FontAwesomeIcon icon={item.icon} size="lg" />
            <span className="text-xs lg:text-sm ">{item.label}</span>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

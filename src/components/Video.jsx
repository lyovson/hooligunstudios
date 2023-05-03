"use client";

import { motion } from "framer-motion";
import YouTube from "react-youtube";

const cardVariants = {
  initial: { y: 0 },
  hover: { y: 5 },
};

export default function Video({ videoId, title, info, className }) {
  return (
    <motion.section
      className={`flex w-full  flex-col items-center gap-8 ${className}`}
      layout
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
    >
      <article
        className={`relative block  w-full rounded-xl  bg-stone-900  bg-opacity-80 p-4 shadow-md`}
      >
        <YouTube
          key="video"
          videoId={videoId}
          className={`mx-auto`}
          iframeClassName={`aspect-video w-full h-fit  `}
        />
        <h3 className={`pt-4 text-2xl`}>{title}</h3>
        <p className="text-sm">{info}</p>
      </article>
    </motion.section>
  );
}

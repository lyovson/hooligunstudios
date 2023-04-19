"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import YouTube from "react-youtube";

const berg = localFont({ src: "../../public/berg.ttf" });

const videoVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 100 },
};

export default function Video({ videoId, name, className }) {
  return (
    <motion.section
      className={`flex w-full  flex-col items-center gap-8 ${className}`}
    >
      <article
        className={`relative block  w-full rounded-xl border-8 border-stone-900 bg-stone-900  bg-opacity-80 p-4 shadow-md`}
      >
        <YouTube
          key="video"
          videoId={videoId}
          className={`mx-auto`}
          iframeClassName={`aspect-video w-full h-fit  `}
        />
        <h3 className={`pt-4 text-lg ${berg.className}`}>{name}</h3>
      </article>
    </motion.section>
  );
}

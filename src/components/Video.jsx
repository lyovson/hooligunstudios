"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import YouTube from "react-youtube";

const berg = localFont({ src: "../../public/berg.ttf" });

export default function Video({ videoId, title, info, className }) {
  return (
    <motion.section
      className={`flex w-full  flex-col items-center gap-8 ${className}`}
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
        <h3 className={`pt-4 text-2xl  ${berg.className}`}>{title}</h3>
        <p>{info}</p>
      </article>
    </motion.section>
  );
}

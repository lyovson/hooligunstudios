import localFont from "next/font/local";
import Image from "next/image.js";

import crew from "../data/crew.js";
import Card from "./Card.jsx";

const berg = localFont({ src: "../../public/berg.ttf" });

export default function Crew() {
  return (
    <section
      style={{
        backgroundImage: "url(/crew-bckg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" relative flex flex-col pb-12 pt-10"
    >
      <h2 className={` ${berg.className} py-4   text-center  text-3xl`}>
        TEAM:
      </h2>
      <ssection className="flex flex-wrap justify-center    gap-4  ">
        {crew.map((info) => {
          return <Card info={info} key={info.slug} />;
        })}
      </ssection>
      <Image
        src={"/border-little.svg"}
        alt={"Stylized border with a skull"}
        width="1200"
        height="50"
        className=" absolute -bottom-8  z-10   mx-auto  px-4 sm:-bottom-9 md:-bottom-8 md:left-[calc(50%-300px)] md:w-[600px]"
      />
    </section>
  );
}

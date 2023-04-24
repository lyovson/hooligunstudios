import localFont from "next/font/local";
import Image from "next/image";

import Border from "./Border.jsx";

const berg = localFont({ src: "../../public/berg.ttf" });

export default function About() {
  return (
    <>
      <section
        style={{
          backgroundImage: "url(/about-bckg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative flex  flex-col items-center  justify-between  gap-10  p-8 pb-16    md:px-20"
      >
        <article className="lg:max-w-[65%]  ">
          <h2 className={` ${berg.className} py-4   text-left  text-3xl`}>
            WHO DA HELL ARE WE:
          </h2>
          <p className="  ">
            {`We are the "Hooligun Studios" - an indie movie studio with bold ideas, ambitious plans and zero tolerance for messing around. We started in 2020 masterminded and energized by the vision of Serj Gabyan and inspired by his 15+ years of networking, producing, and directing experience. Our creed is "do or die", no matter how dangerous it may sound. That's right, we don't believe in plan "B"s, and we know it works because we’ve done it. We’ve experienced the fucking hell of making an impressive movie, and we are determined to do it again. So behold, the best is yet to come, as it is inevitable when you do your dream job. The "Hooligun Studios" aims to make buxom movies that will stand the test of time. We shall take over the hearts of cinema lovers one movie at a time.`}
          </p>
        </article>
        <Image
          src={"/border-short.svg"}
          alt={"Stylized border with a skull"}
          width="1200"
          height="50"
          className="absolute -bottom-12 z-10 mx-auto px-4   sm:-bottom-16 md:-bottom-20 lg:hidden"
        />
        <Image
          src={"/border-long.svg"}
          alt={"Stylized border with a skull"}
          width="1200"
          height="50"
          className="absolute -bottom-16 z-10 mx-auto hidden  px-4 lg:block"
        />
      </section>
    </>
  );
}

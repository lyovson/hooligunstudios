import localFont from "next/font/local";
import Image from "next/image";

const berg = localFont({ src: "../../public/berg.ttf" });

export default function About() {
  return (
    <section
      style={{
        backgroundImage: "url(/about-bckg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex  flex-col-reverse  items-center  gap-10  p-8   md:flex-row md:px-20"
    >
      <article className="lg:max-w-[65%]  ">
        <h2 className={` ${berg.className} py-4   text-left  text-3xl`}>
          WHO DA HELL ARE WE:
        </h2>
        <p className="  ">
          {`We're Hooligun Studios, baby! And let me tell you something, we don't mess around. We're an indie movie studio that dreams up crazy ideas and forces them into reality. That's right, we don't make plan "B"s. We give our all to what we love, and we love great movies that stand the test of time. Drumroll please – the man behind the madness. Serj Gabyan, the engine, the mastermind, the one who's fueling our team with his 15+ years of networking, producing, and directing experience. He's the one who's bringing those flaming ideas to the table, and let me tell you, it's a sight to see. But he's not alone. He's got a team of brave, crazy, and talented individuals who are just as passionate about making great movies as he is. Together, we're gonna take the world by storm, one movie at a time.
`}
        </p>
      </article>
      {/* <Image
        src={"/crew.jpeg"}
        alt={"OTTK film logo"}
        width="300"
        height="300"
        className=" border-2 border-[#bab49e] p-2  opacity-70 sepia md:w-[50%] lg:w-[35%] "
      /> */}
    </section>
  );
}

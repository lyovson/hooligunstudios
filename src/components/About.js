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
      className="flex  flex-col-reverse  items-center  gap-10  p-8  lg:flex-row lg:px-20"
    >
      <article className="lg:max-w-[65%]  ">
        <h2
          className={` ${berg.className} py-4 text-center  text-3xl  lg:text-left`}
        >
          WHO DA HELL ARE WE:
        </h2>
        <p className="  ">
          {`Hooligun Studios is an indie movie studio. We aim to make movies that would stand the test of time. It's our dream job. Serj Gabyan the engine, mastermind, capitalizing on 15+ years of networking, producing and directing experience founded of Hooligun Studios, which happened in 2021, in the aftermath of covid and war in our country, with literally no plan “B” plunging into this endeavor and taking all of us along with him into the dive. During the production of the studio's first feature film OTTK, the team was replenished with talented, experienced, and similarly crazy-minded people that are and will make the world a bit more fun place to live.`}
        </p>
      </article>
    </section>
  );
}

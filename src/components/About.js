import localFont from "next/font/local";
import Image from "next/image";

const berg = localFont({ src: "../../public/berg.ttf" });

export default function About() {
  return (
    <section className="flex flex-col-reverse items-center  gap-10  p-8  text-justify   lg:flex-row lg:px-20">
      <article>
        <h2
          className={` ${berg.className} py-4 text-center  text-3xl  lg:text-left`}
        >
          WHO DA HELL ARE WE
        </h2>
        <p className="  text-justify ">
          {`Hooligun Studios is an indie movie studio backed by experienced creators and producers. We make movies that we'd watch in 20 years. It's a dream job for us, not a day job. In Hooligun Studios, we don't have a plan B; there's always "The Plan" that we do or die trying. Serj Gabyan founded Hooligun Studios in 2021, capitalizing on 15+ years of networking, producing, distribution, and literary know-how and reputation. During the production of the studio's first feature film OTTK, the team was replenished with talented, experienced, and similarly crazy-minded people that are and will make the world a bit more fun place to live`}
        </p>
      </article>
    </section>
  );
}

import localFont from "next/font/local";
import Image from "next/image";

const berg = localFont({ src: "../../public/berg.ttf" });

export default function Latest() {
  return (
    <section className="flex flex-col items-center gap-10  p-8 lg:flex-row lg:px-20">
      <Image
        src={"/posternew.jpg"}
        alt={"Hooligun studios logo"}
        width="300"
        height="300"
        className="rounded-xl shadow-md"
      />

      <article className="">
        <h2
          className={` ${berg.className}  py-4 text-center text-3xl lg:text-left`}
        >
          OTTK
        </h2>
        <p className=" text-justify">
          One night in the life of a businessman, his all-Armenian heist team, a
          crime boss, and the chief of police. Chaos unleashes, leading to a
          bloody raid as every story-line collides.
        </p>
      </article>
    </section>
  );
}

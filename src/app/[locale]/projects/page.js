import Link from "next/link";

import Card from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <main className=" flex flex-col   gap-4 lg:pb-6 lg:pt-8">
      <h2 className="py-2 pl-4 text-center font-title text-4xl">Projects</h2>
      <article className=" mb-12 flex  w-full max-w-[800px]  flex-col p-4 md:flex-row">
        <Link href="/projects/donkey" className="pointer">
          <Card
            title="Donkey, Don't Die"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem."
            image="/donkey/donkey-short.jpg"
          />
        </Link>
      </article>
    </main>
  );
}

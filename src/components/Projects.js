import projects from "../data/projects.js";
import Card from "./Card";

export default function Projects() {
  return (
    <section className="flex flex-wrap justify-center gap-8 bg-gradient-to-br  from-[#e3decb] to-[#7a6f65] bg-clip-text   p-8  text-transparent">
      {projects.map((info) => {
        return <Card info={info} key={info.slug} />;
      })}
    </section>
  );
}

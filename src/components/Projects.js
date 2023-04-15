import projects from "../data/projects.js";
import Card from "./Card";

export default function Projects() {
  return (
    <section className="flex flex-wrap justify-center   gap-8 border-b-4 border-stone-500 p-8">
      {projects.map((info) => {
        return <Card info={info} key={info.slug} />;
      })}
    </section>
  );
}

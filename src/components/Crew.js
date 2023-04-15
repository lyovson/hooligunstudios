import crew from "../data/crew.js";
import Card from "./Card.jsx";

export default function Crew() {
  return (
    <section className="flex flex-wrap justify-center   gap-8 border-b-4 border-stone-500 p-8">
      {crew.map((info) => {
        return <Card info={info} key={info.slug} />;
      })}
    </section>
  );
}

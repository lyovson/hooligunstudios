import crew from "../data/crew.js";
import Card from "./Card.jsx";

export default function Crew() {
  return (
    <section
      style={{
        backgroundImage: "url(/crew-bckg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-wrap justify-center   gap-8  p-8"
    >
      {crew.map((info) => {
        return <Card info={info} key={info.slug} />;
      })}
    </section>
  );
}

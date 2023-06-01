import About from "../../components/About.js";
import Crew from "../../components/Crew.js";
import Hero from "../../components/Hero.js";
import Latest from "../../components/Latest.js";

export default function Home() {
  return (
    <main className="mx-auto  flex max-w-[1200px] flex-col  ">
      <Hero />
      <About />
      <Latest />
      <Crew />
    </main>
  );
}

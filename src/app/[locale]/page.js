import About from "../../components/About.js";
import Crew from "../../components/Crew.js";
import Latest from "../../components/Latest.js";

export default function Home() {
  return (
    <main className="mx-auto  flex max-w-[1200px] flex-col  ">
      <About />
      <Latest />
      <Crew />
    </main>
  );
}

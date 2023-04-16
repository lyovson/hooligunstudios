import About from "../components/About.js";
import Crew from "../components/Crew.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import Latest from "../components/Latest.js";
import Projects from "../components/Projects.js";

export default function Home() {
  return (
    <main className="mx-auto  flex max-w-[1200px] flex-col border-x-4 border-stone-400 ">
      <Header />
      <About />
      <Latest />
      <Crew />
      <Projects />
      <Footer />
    </main>
  );
}

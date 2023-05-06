"use client";

import Footer from "../Footer.js";
import Menu from "../Menu.jsx";
import SquareCard from "../SquareCard.jsx";

export default function Cast() {
  return (
    <>
      <Menu />
      <main className="mb-12 flex   flex-col gap-4 p-8 lg:pt-28">
        <h2 className="py-4 text-center  font-title text-3xl">Prime Cast</h2>
        <section className="flex  flex-col items-center justify-center gap-4">
          <SquareCard
            info={{
              name: "Narek A Chilla",
              bio: "Famous rapper, actor. Has a devoted fanbase. Especially popular among young people. His latest songs have millions of views.",
              image: "/donkey/chilla.png",
              approved: true,
              role: "Father - Victor",
            }}
          />
          <SquareCard
            info={{
              name: "Iveta Mukuchyan",
              bio: "Beloved singer, actress. Occupies leading positions in Armenian show business for many years.",
              image: "/donkey/iveta.png",
              approved: false,
              role: "Mother - Lara",
            }}
          />
          <SquareCard
            info={{
              name: "Arman Ghazaryan",
              bio: "Famous actor, comedian. Displayed exceptional versatility throughout his illustrious career which makes him the ideal choice to portray the character of Felix.",
              image: "/donkey/arman.jpg",
              approved: true,
              role: "Brother - Felix",
            }}
          />
          <SquareCard
            info={{
              name: "Milena Mikaelyan",
              bio: "Resident of Hooligun Studios, talented young actress, singer.",
              image: "/donkey/milena.png",
              approved: true,
              role: "Daughter - Nika",
            }}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

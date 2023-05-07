"use client";

import Footer from "../Footer.js";
import Menu from "../Menu.jsx";
import SquareCard from "../SquareCard.jsx";

export default function Cast() {
  return (
    <>
      <Menu />
      <main className="mb-12 flex   flex-col gap-4 p-8 lg:pt-8">
        <h2 className="py-4 text-center  font-title text-3xl">Прайм Каст</h2>
        <section className="flex  flex-col items-center justify-center gap-4">
          <SquareCard
            info={{
              name: "Нарек A Chilla",
              bio: "Известный реп-артист, актер. Имеет лояльную фан-базу. С каждым днем набирает все больше популярности среди молодежи. Последние треки набирают миллионы просмотров.",
              image: "/donkey/chilla.png",
              approved: true,
              role: "Папа - Виктор",
            }}
          />
          <SquareCard
            info={{
              name: "Ивета Мукучян",
              bio: "Многими любимая певица, актриса, уже много лет занимает топовые позиции по популярности в Армении.",
              image: "/donkey/iveta.png",
              approved: false,
              role: "Мама - Лара",
            }}
          />
          <SquareCard
            info={{
              name: "Арман Казарян",
              bio: "Известный актер, комик. На протяжении всей своей блестящей карьеры он демонстрировал исключительную универсальность, что делает его идеальным кандидатом на роль Феликса.",
              image: "/donkey/arman.jpg",
              approved: true,
              role: "Брат - Феликс",
            }}
          />
          <SquareCard
            info={{
              name: "Милена Микаелян",
              bio: "Резидент студии Hooligun Studios, начинающая актриса с большим диапазоном талантов.",
              image: "/donkey/milena.png",
              image: "/donkey/milena.png",
              approved: true,
              role: "Дочь - Ника",
            }}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

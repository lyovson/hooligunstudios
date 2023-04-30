"use client";

import SquareCard from "../../SquareCard.jsx";

export default function Cast() {
  return (
    <main className="mb-12 flex  flex-col gap-4 p-8">
      <h2 className="py-4 text-left font-russian text-5xl">Прайм Каст:</h2>
      <section className="flex flex-col items-center justify-center gap-4 ">
        <SquareCard
          info={{
            name: "Нарек А Чилла",
            role: "Известный реп-артист, актер. Имеет лояльную фан-базу. С каждым днем набирает все больше популярности среди молодежи. Последние треки набирают миллионы просмотров.",
            image: "/donkey/chilla.png",
          }}
        />
        <SquareCard
          info={{
            name: "Ивета Мукучян",
            role: "Многими любимая певица, актриса, уже много лет занимает топовые позиции по популярности в Армении.",
            image: "/donkey/iveta.png",
          }}
        />
        <SquareCard
          info={{
            name: "Артур Бабич",
            role: "Популярный блогер, тик-токер из России. Имеет более чем 14 миллионов подписчиков.",
            image: "/donkey/babich.png",
          }}
        />
      </section>
    </main>
  );
}

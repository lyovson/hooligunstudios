"use client";

import SquareCard from "../../SquareCard.jsx";

export default function Cast() {
  return (
    <main className="mb-12 flex   flex-col gap-4 p-8">
      <h2 className="py-4 text-left font-russian text-5xl">Прайм Каст:</h2>
      <section className="flex  flex-col items-center justify-center gap-4">
        <SquareCard
          info={{
            name: "Нарек A Chilla",
            bio: "Известный реп-артист, актер. Имеет лояльную фан-базу. С каждым днем набирает все больше популярности среди молодежи. Последние треки набирают миллионы просмотров.",
            image: "/donkey/chilla.png",
            approved: true,
            role: "Папа - Барт",
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
            name: "Артур Бабич",
            bio: "Популярный блогер, тик-токер из России. Имеет более чем 14 миллионов подписчиков.",
            image: "/donkey/babich.png",
            approved: false,
            role: "Бойфренд - Марк",
          }}
        />
        <SquareCard
          info={{
            name: "Милена Микаелян",
            bio: "Резидент студии Hooligun Studios, начинающая актриса с большим диапазоном талантов.",
            image: "/donkey/milena.png",
            approved: true,
            role: "Дочь - Ника",
          }}
        />
      </section>
    </main>
  );
}

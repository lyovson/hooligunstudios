"use client";

import SquareCard from "../SquareCard.jsx";

export default function Cast() {
  return (
    <main className="mb-12 flex   flex-col gap-4 p-8">
      <h2 className="py-4 text-left  font-title text-2xl">Դերասանական կազմ:</h2>
      <section className="flex  flex-col items-center justify-center gap-4">
        <SquareCard
          info={{
            name: "Նարեկ A Chilla",
            bio: "Հայտնի ռեփեր, դերասան: Ունի երկրպագուների նվիրված բանակ: Հատկապես երիտասարդների շրջանում նրա հայտնիությունն աճում է օր օրի վրա: Վերջին երգերը հավաքում են միլիոնավոր դիտումներ:",
            image: "/donkey/chilla.png",
            approved: true,
            role: "Հայր - Վիկտոր",
          }}
        />
        <SquareCard
          info={{
            name: "Իվետա Մուկուչյան",
            bio: "Սիրված երգչուհի, դերասանուհի, արդեն երկար տարիներ զբաղեցնում է առաջատար դիրքեր Հայաստանի երգարվեստում:",
            image: "/donkey/iveta.png",
            approved: false,
            role: "Մայր - Լարա",
          }}
        />
        <SquareCard
          info={{
            name: "Արթուր Բաբիչ",
            bio: "Հայտնի բլոգեր, Թիք-Թոքեր Ռուսաստանից: ունի ավելի քան 14 միլիոն հետևորդ:",
            image: "/donkey/babich.png",
            approved: false,
            role: "Բոյֆրենդ - Մարկ",
          }}
        />
        <SquareCard
          info={{
            name: "Միլենա Միքայելյան",
            bio: "Hooligun Studios-ի ռեզիդենտ, սկսնակ բազմատաղանդ դերասանուհի, երգչուհի:",
            image: "/donkey/milena.png",
            approved: true,
            role: "Դուստր - Նիկա",
          }}
        />
      </section>
    </main>
  );
}

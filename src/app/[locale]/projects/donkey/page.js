import SquareCard from "./SquareCard.jsx";

export default function Cast() {
  return (
    <main className="mb-12 flex  flex-col gap-4 p-8">
      <h2 className="py-4 text-left font-russian text-5xl">Прайм Каст:</h2>
      <section className="flex flex-col items-center justify-center gap-4 ">
        <SquareCard
          info={{
            name: "Нарек А Чилла",
            role: "Известный рэпер, музыкальный продюсер и актрёр Нарек Овсепян, известный ка А Чила, сыграет отца семьи и главного протагониста фильма.",
            image: "/donkey/chilla.png",
          }}
        />
        <SquareCard
          info={{
            name: "Ивета Мукучян",
            role: "Одна из самых известных армянских певиц и актрис как в Армении так и за границей, Ивета Мукучян сыграет маму семьи и жену главного протагониста. Её музыкальный талант также будет использован в фильме.",
            image: "/donkey/iveta.png",
          }}
        />
        <SquareCard
          info={{
            name: "Артур Бабич",
            role: "У известного блогера и музыканта Артура Бабича более 5 миллионов фанатов в Инстаграме и более 14 миллионов в ТикТоке. Он сыграет бойфренда дочери главного протагониста. Его музыкальный талант также будет использован в фильме.",
            image: "/donkey/babich.png",
          }}
        />
      </section>
    </main>
  );
}

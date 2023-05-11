import { useTranslations } from "next-intl";

import Menu from "../Menu.jsx";
import SquareCard from "../SquareCard.jsx";

export default function Cast() {
  const t = useTranslations("projects.donkey.cast");

  return (
    <>
      <Menu />
      <main className="mb-12 flex   flex-col gap-4 p-8 lg:pt-28">
        <h2 className="py-4 text-center  font-title text-3xl">{t("title")}</h2>
        <section className="flex  flex-col items-center justify-center gap-4">
          <SquareCard
            info={{
              name: t("actor1.name"),
              bio: t("actor1.bio"),
              image: "/donkey/chilla.png",
              approved: true,
              role: t("actor1.role"),
            }}
          />
          <SquareCard
            info={{
              name: t("actor2.name"),
              bio: t("actor2.bio"),
              image: "/donkey/iveta.png",
              approved: false,
              role: t("actor2.role"),
            }}
          />
          <SquareCard
            info={{
              name: t("actor3.name"),
              bio: t("actor3.bio"),
              image: "/donkey/arman.jpg",
              approved: true,
              role: t("actor3.role"),
            }}
          />
          <SquareCard
            info={{
              name: t("actor4.name"),
              bio: t("actor4.bio"),
              image: "/donkey/milena.png",
              approved: true,
              role: t("actor4.role"),
            }}
          />
        </section>
      </main>
    </>
  );
}

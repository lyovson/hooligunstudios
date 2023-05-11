import { useTranslations } from "next-intl";
import Image from "next/image";

import Drawer from "./Drawer.jsx";
import Menu from "./Menu.jsx";

export default function Donkey() {
  const t = useTranslations("projects.donkey");
  return (
    <>
      <Menu />
      <main className=" flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-around lg:pb-6 lg:pt-28 ">
        <section className=" mb-12 flex  w-full max-w-[800px]  flex-col p-4">
          <article className="flex  flex-col gap-2 text-lg  ">
            <h2 className="py-2 pl-4 font-title  text-4xl">{t("name")}</h2>
            <p className="p-4">{t("tagline")}</p>
            <Drawer opened={true} title={t("shortsynopsis.title")}>
              {t("shortsynopsis.text")}
            </Drawer>
            <Drawer opened={false} title={t("synopsis.title")}>
              <p>{t("synopsis.p1")}</p>
              <p>{t("synopsis.p2")}</p>
              <p>{t("synopsis.p3")}</p>
              <p>{t("synopsis.p4")}</p>
              <p>{t("synopsis.p5")}</p>
              <p>{t("synopsis.p6")}</p>
            </Drawer>
            <Drawer opened={false} title={t("treatment.title")}>
              <p>{t("treatment.p1")}</p>
              <p>{t("treatment.p2")}</p>
              <p>{t("treatment.p3")}</p>
              <p>{t("treatment.p4")}</p>
              <p>{t("treatment.p5")}</p>
              <p>{t("treatment.p6")}</p>
              <p>{t("treatment.p7")}</p>
              <p>{t("treatment.p8")}</p>
              <p>{t("treatment.p9")}</p>
              <p>{t("treatment.p10")}</p>
              <p>{t("treatment.p11")}</p>
              <p>{t("treatment.p12")}</p>
              <p>{t("treatment.p13")}</p>
              <p>{t("treatment.p14")}</p>
              <p>{t("treatment.p15")}</p>
              <p>{t("treatment.p16")}</p>
              <p>{t("treatment.p17")}</p>
              <p>{t("treatment.p18")}</p>
              <p>{t("treatment.p19")}</p>
              <p>{t("treatment.p20")}</p>
              <p>{t("treatment.p21")}</p>
              <p>{t("treatment.p22")}</p>
              <p>{t("treatment.p23")}</p>
              <p>{t("treatment.p24")}</p>
              <p>{t("treatment.p25")}</p>
              <p>{t("treatment.p26")}</p>
              <p>{t("treatment.p27")}</p>
              <p>{t("treatment.p28")}</p>
              <p>{t("treatment.p29")}</p>
              <p>{t("treatment.p30")}</p>
              <p>{t("treatment.p31")}</p>
              <p>{t("treatment.p32")}</p>
              <p>{t("treatment.p33")}</p>
              <p>{t("treatment.p34")}</p>
              <p>{t("treatment.p35")}</p>
              <p>{t("treatment.p36")}</p>
              <p>{t("treatment.p37")}</p>
              <p>{t("treatment.p38")}</p>
              <p>{t("treatment.p39")}</p>
              <p>{t("treatment.p40")}</p>
              <p>{t("treatment.p41")}</p>
              <p>{t("treatment.p42")}</p>
              <p>{t("treatment.p43")}</p>
              <p>{t("treatment.p44")}</p>
              <p>{t("treatment.p45")}</p>
              <p>{t("treatment.p46")}</p>
            </Drawer>
          </article>
        </section>
        <section className="min-w-[300px] p-4 ">
          <Image
            src="/donkey/donkey.png"
            width="400"
            height="400"
            className=" "
            alt="donkey with gold"
          />
        </section>
      </main>
    </>
  );
}

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");
  return (
    <>
      <section
        style={{
          backgroundImage: "url(/about-bckg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative flex  flex-col items-center  justify-between  gap-10  p-8 pb-16    md:px-20"
      >
        <article className="lg:max-w-[65%]  ">
          <h2 className={`py-4 text-left text-3xl`}>{t("title")}</h2>
          <p className="  ">{t("about")}</p>
        </article>
        <Image
          src={"/border-short.svg"}
          alt={"Stylized border with a skull"}
          width="1200"
          height="50"
          className="absolute -bottom-12 z-10 mx-auto px-4   sm:-bottom-16 md:-bottom-20 lg:hidden"
        />
        <Image
          src={"/border-long.svg"}
          alt={"Stylized border with a skull"}
          width="1200"
          height="50"
          className="absolute -bottom-16 z-10 mx-auto hidden  px-4 lg:block"
        />
      </section>
    </>
  );
}

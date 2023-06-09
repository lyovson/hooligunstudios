import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Image from "next/image";

import Button from "./Button.jsx";
import Video from "./Video.jsx";

export default function Latest() {
  const t = useTranslations("latest");

  return (
    <section
      style={{
        backgroundImage: "url(/latest-bckg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative flex flex-col items-center gap-4  p-8 pb-20 lg:px-20"
    >
      <section className="  flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
        <Image
          src={"/posternew.jpg"}
          alt={"OTTK film logo"}
          width="400"
          height="400"
          className="  rounded-xl shadow-md md:-ml-2 md:-mt-2 md:w-[35%]"
        />

        <article className="flex flex-col  gap-4">
          <h2 className={`pb-0 pt-4 font-title text-3xl`}>{t("title")}</h2>
          <article className="">
            <p>{t("ottk")}</p>
          </article>
          <footer className=" flex justify-center gap-4 py-4 md:order-2 md:justify-start">
            <a href="#" target="_blank">
              <Button className="flex gap-2">
                <FontAwesomeIcon icon={faSafari} className="h-6 w-6 " />
                {t("website")}
              </Button>
            </a>
            <a
              className="flex gap-2 "
              href="https://www.imdb.com/title/tt27466882/"
              target="_blank"
            >
              <Button className="flex gap-2">
                <FontAwesomeIcon icon={faImdb} className="h-6 w-6 " />
                {t("imdb")}
              </Button>
            </a>
          </footer>
        </article>
      </section>

      <section className=" grid w-full  grid-cols-1 gap-8 md:grid-cols-2 ">
        <Video
          className={` `}
          videoId={"UaP1C6Wuf9o"}
          title={t("trailer.title")}
          info={t("trailer.text")}
        />

        <Video
          className={``}
          videoId={"db1zcLX-GQI"}
          title={t("premiere.title")}
          info={t("premiere.text")}
        />
        <Video
          className={` `}
          videoId={"rYmIC5VdQOg"}
          title={t("interview.title")}
          info={t("interview.text")}
        />
        <Video
          className={` `}
          videoId={"TfBm1bmpjXI"}
          title={t("ost.title")}
          info={t("ost.text")}
        />
      </section>
      <Image
        src={"/border-short-header.svg"}
        alt={"Stylized border with a skull"}
        width="1200"
        height="50"
        className="absolute -bottom-12 z-10 mx-auto px-4   sm:-bottom-16 md:-bottom-20 lg:hidden"
      />
      <Image
        src={"/border-long-header.svg"}
        alt={"Stylized border with a skull"}
        width="1200"
        height="50"
        className="absolute -bottom-16 z-10 mx-auto hidden  px-4 lg:block"
      />
    </section>
  );
}

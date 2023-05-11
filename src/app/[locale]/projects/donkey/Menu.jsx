import {
  faBarcode,
  faGlobe,
  faPeopleGroup,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import Button from "../../../../components/Button.jsx";

export default function Menu() {
  const t = useTranslations("projects.donkey.menu");

  return (
    <aside className=" fixed bottom-0 left-0 right-0 z-10 flex items-center justify-around border-b-0 border-t border-[#bab49e] bg-black py-2 text-[#bab49e] shadow-md lg:absolute lg:bottom-auto lg:right-0 lg:top-0 lg:justify-center lg:gap-8  lg:border-t-0 lg:p-8">
      {[
        { href: "/projects/donkey/", icon: faBarcode, label: t("treatment") },
        {
          href: "/projects/donkey/cast",
          icon: faPeopleGroup,
          label: t("primecast"),
        },

        {
          href: "/projects/donkey/media",
          icon: faPhotoFilm,
          label: t("media"),
        },
      ].map((item, index) => (
        <Link key={index} href={item.href}>
          <Button className="flex cursor-pointer flex-col items-center gap-1 border-none text-[#bab49e] lg:flex-row lg:border-solid ">
            <FontAwesomeIcon icon={item.icon} size="lg" />
            <span className="text-xs lg:text-lg ">{item.label}</span>
          </Button>
        </Link>
      ))}
      <Image
        src={"/border-little.svg"}
        alt={"Stylized border with a skull"}
        width="1200"
        height="50"
        className="absolute -bottom-6 z-10  mx-auto   hidden  px-4 sm:-bottom-7 md:-bottom-6 md:left-[calc(50%-300px)] md:w-[600px] lg:block"
      />
    </aside>
  );
}

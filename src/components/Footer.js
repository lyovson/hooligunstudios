import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <section className="flex flex-col items-start  justify-center  gap-8  p-8 lg:flex-row lg:items-start lg:justify-between">
      <aside className="flex flex-col  gap-4 text-justify text-sm ">
        <h3 className="py-4 text-xl">Language:</h3>
        <ul className=" lg:lex-col flex gap-2 text-lg ">
          <Link className="border border-stone-500 p-2" href="#" locale="en">
            Eng
          </Link>
          <Link className="border border-stone-500 p-2" href="#" locale="ru">
            Rus
          </Link>
        </ul>
      </aside>
      <aside className="flex flex-col gap-4 text-justify  ">
        <h3 className="py-4 text-xl">Contact:</h3>
        <ul className=" flex flex-col justify-center  gap-4 ">
          <li className="flex items-center gap-4">
            <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4" />
            <span>{t("address")}</span>
          </li>
          <li className="flex items-center gap-4">
            <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
            <span>+37443607977</span>
          </li>
          <li className="flex items-center gap-4">
            <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
            <span>info@hooligunstudios.com</span>
          </li>
        </ul>
      </aside>
      <aside className="flex flex-col gap-4 text-justify text-sm ">
        <h3 className="py-4 text-xl">Info:</h3>
        <Link className="underline" href="/resources">
          <p>{t("resources")}</p>
        </Link>
        <p>&copy; {t("legal")}</p>
        <a className="underline" href="https://lyovson.com">
          <p>{t("lyovson")}</p>
        </a>
      </aside>
    </section>
  );
}

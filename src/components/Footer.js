import {
  faEnvelope,
  faLink,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Link from "next/link";

import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <section className="flex flex-col items-start  justify-center  gap-8  p-8 lg:flex-row lg:items-start lg:justify-between">
      <aside className="flex flex-col gap-2">
        <h3 className="py-4 font-title text-xl">{t("language")}</h3>
        <LanguageSwitcher />
      </aside>
      <aside className="flex flex-col gap-4 text-justify  ">
        <h3 className="py-4 font-title text-xl">{t("contacts")}</h3>
        <ul className=" flex flex-col justify-center  gap-4 text-sm">
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
        <h3 className="py-4 font-title text-xl">{t("info")}</h3>
        <section className="flex flex-col gap-2">
          <p>
            {t("resources")}
            <span>
              {"  "}
              <Link href="/resources">
                <FontAwesomeIcon icon={faLink} className="h-5 w-5 " />
              </Link>
            </span>
          </p>

          <p>
            {t("partners")}
            <span>
              {"  "}
              <Link href="/projects/donkey">
                <FontAwesomeIcon icon={faLink} className="h-5 w-5" />
              </Link>
            </span>
          </p>
        </section>
        <section>
          <p>&copy; {t("legal")}</p>
          <p>
            {t("lyovson")}{" "}
            <span>
              {"  "}
              <a href="https://lyovson.com">
                <FontAwesomeIcon icon={faLink} className="h-5 w-5" />
              </a>
            </span>
          </p>
        </section>
      </aside>
    </section>
  );
}

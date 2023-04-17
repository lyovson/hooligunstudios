import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { socials } from "../data/socials.js";

export default function Header() {
  return (
    <header
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-between gap-4  p-8 px-10 lg:max-h-[200px] lg:flex-row lg:p-2 "
    >
      <Image
        src={"/logonew.png"}
        alt={"Hooligun studios logo"}
        width="300"
        height="200"
        className=""
      />

      <ul className="  flex justify-end  gap-8 text-lg lg:gap-2 lg:self-end ">
        {socials.map((social) => {
          return (
            <li key={social.name}>
              <a
                href={social.url}
                target="blank"
                className="  flex capitalize "
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="h-8 w-8  lg:h-6 lg:w-6"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

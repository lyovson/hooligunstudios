import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { socials } from "../data/socials.js";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-around gap-4  border-y-4 border-stone-400  p-8 px-10 lg:max-h-[200px] lg:flex-row ">
      <Image
        src={"/logosquare.png"}
        alt={"Hooligun studios logo"}
        width="200"
        height="200"
        className=" aspect-square"
      />

      <ul className=" flex  justify-end gap-8 border-stone-400 text-lg">
        {socials.map((social) => {
          return (
            <li key={social.name}>
              <a
                href={social.url}
                target="blank"
                className="flex gap-4 capitalize"
              >
                <FontAwesomeIcon icon={social.icon} className="h-8 w-8 " />
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

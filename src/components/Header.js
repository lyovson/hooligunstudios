import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { socials } from "../data/socials.js";

export default function Header() {
  return (
    <header className="items- flex flex-row justify-around  gap-4 border-b-4 border-stone-500 p-8 px-10 ">
      <Image
        src={"/logo.png"}
        alt={"Hooligun studios logo"}
        width="300"
        height="150"
        className="aspect-video "
      />
      <ul className="-order-1 hidden flex-col gap-4 border-r-4 border-stone-500  p-8 text-sm md:block md:flex lg:order-3 lg:border-l-4 lg:border-r-0">
        {socials.map((social) => {
          return (
            <li key={social.name}>
              <a href={social.url} target="blank">
                <FontAwesomeIcon icon={social.icon} className="h-8 w-8" />
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="hidden border-l-4 border-stone-500 p-8 md:block">
        <li>address</li>
        <li>phone</li>
        <li>email</li>
      </ul>
    </header>
  );
}

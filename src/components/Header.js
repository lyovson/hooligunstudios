import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { socials } from "../data/socials.js";

export default function Header() {
  return (
    <header
      style={{
        backgroundImage: "url(/header-bckg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" flex flex-col items-center justify-between gap-4  p-8 px-10 lg:max-h-[200px] lg:flex-row lg:p-2 "
    >
      <Image
        src={"/logonew.png"}
        alt={"Hooligun studios logo"}
        width="300"
        height="200"
        className="lg:ml-[60px] "
      />
      <h1 id="title" className=" opacity-0">
        Hooligun Studios
      </h1>

      <ul className="  flex justify-end  gap-2 text-lg lg:mr-[60px] lg:self-end">
        {socials.map((social) => {
          return (
            <li key={social.name}>
              <a
                href={social.url}
                target="blank"
                className="  flex capitalize  "
              >
                <FontAwesomeIcon icon={social.icon} className="h-6 w-6 " />
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

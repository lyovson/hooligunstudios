import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import { socials } from "../data/socials.js";

export default function Header() {
  return (
    <header
      style={{
        backgroundImage: "url(/header-bckg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="p8 relative "
    >
      <section className=" mb-10 flex flex-col items-center justify-between gap-4 px-10 md:mb-6  lg:mb-0  lg:max-h-[200px] lg:flex-row lg:p-2">
        <Link href="/">
          <Image
            src={"/logonew.png"}
            alt={"Hooligun studios logo"}
            width="300"
            height="200"
            className="lg:ml-[60px] "
          />
        </Link>
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
      </section>
      <Image
        src={"/border-little.svg"}
        alt={"Stylized border with a skull"}
        width="1200"
        height="50"
        className=" absolute -bottom-6  z-10   mx-auto  px-4 sm:-bottom-7 md:-bottom-8 md:left-[calc(50%-300px)] md:w-[600px]"
      />
    </header>
  );
}

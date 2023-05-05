import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="relative z-10  hidden w-full flex-col items-center  justify-center  p-8  lg:flex  ">
      <Image
        src={"/border-little.svg"}
        alt={"Stylized border with a skull"}
        width="1200"
        height="50"
        className=" absolute -bottom-6 z-10 mx-auto     px-4  sm:-bottom-7 md:bottom-56 md:left-[calc(50%-300px)] lg:w-[600px]"
      />
      <aside className="flex flex-col gap-4 lg:flex-row">
        <aside className="flex flex-col gap-4 text-justify  ">
          <h3 className="py-4 font-title text-xl">Contact:</h3>
          <ul className=" flex flex-col justify-center  gap-4 ">
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4" />
              <span>37/1 David Bek Lane | 0008 | Yerevan, Armenia</span>
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
          <h3 className="py-4 font-title text-xl">Info:</h3>
          <Link className="underline" href="/resources">
            <p>
              To whom it may concern: company logo and OTTK film’s official
              posters in production resolution are listed here, don’t mess
              around with it, or Grinch will get you.
            </p>
          </Link>
          <p>&copy; 2023 Hooligun Studios LLC. All rights reserved.</p>
          <a className="underline" href="https://lyovson.com">
            <p>Website by Lyovson.</p>
          </a>
        </aside>
      </aside>
    </section>
  );
}

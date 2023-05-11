"use client";

import { Link } from "next-intl";

import Button from "./Button";

export default function LanguageSwitcher() {
  return (
    <aside className="flex flex-col  gap-4 text-justify text-sm ">
      <ul className=" lg:lex-col flex gap-2 text-lg ">
        <Link href="" locale="en">
          <Button>Eng</Button>
        </Link>
        <Link href="" locale="ru">
          <Button>Rus</Button>
        </Link>
      </ul>
    </aside>
  );
}

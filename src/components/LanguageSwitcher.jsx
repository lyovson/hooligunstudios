"use client";

import { Link } from "next-intl";

export default function LanguageSwitcher() {
  return (
    <aside className="flex flex-col  gap-4 text-justify text-sm ">
      <h3 className="py-4 font-title text-xl">Language:</h3>
      <ul className=" lg:lex-col flex gap-2 text-lg ">
        <Link className="border border-stone-500 p-2" href="#" locale="en">
          Eng
        </Link>
        <Link className="border border-stone-500 p-2" href="#" locale="ru">
          Rus
        </Link>
      </ul>
    </aside>
  );
}

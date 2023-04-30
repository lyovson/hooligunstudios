"use client";

import { useState } from "react";

import Menu from "./Menu.jsx";

export default function ProjectLayout({ children }) {
  const [value, setValue] = useState("");
  const [logged, setLogged] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      if (
        value === "TopSecret!" ||
        value === "Papian" ||
        value === "Hekimian" ||
        value === "Saharian"
      ) {
        setLogged(true);
      } else {
        setValue("");
      }
    }
  };

  if (!logged) {
    return (
      <section className="m-16 flex flex-col gap-2">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={value}
          onChange={onChange}
          onKeyDown={onEnter}
          id="password"
          name="password"
          className="w-full border-2 border-stone-900 bg-transparent p-4 outline-none"
        />
      </section>
    );
  }
  return (
    <section className={` relative flex flex-col lg:flex-row`}>
      <section className="max-w-[90%]">{children}</section>
      <Menu />
    </section>
  );
}

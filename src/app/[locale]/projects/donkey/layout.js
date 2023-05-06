"use client";

import { useState } from "react";

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
        value === "Mukuchian" ||
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
    <section className={`  flex flex-col `}>
      <section className="relative w-full ">{children}</section>
    </section>
  );
}

import Menu from "./Menu.jsx";

export default function ProjectLayout({ children }) {
  return (
    <section className={` relative flex flex-col lg:flex-row`}>
      <section className="max-w-[90%]">{children}</section>
      <Menu />
    </section>
  );
}

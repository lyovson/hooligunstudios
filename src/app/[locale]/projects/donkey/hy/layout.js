export default function ProjectLayout({ children }) {
  return (
    <section className={`  flex flex-col lg:flex-row`}>
      <section className="relative w-full lg:pt-24">{children}</section>
    </section>
  );
}

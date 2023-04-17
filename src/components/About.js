import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col-reverse items-center  gap-10 bg-gradient-to-br  from-[#e3decb] to-[#7a6f65]  bg-clip-text p-8  text-justify text-transparent lg:flex-row lg:px-20">
      <article>
        <h2 className="  py-4 text-center  text-3xl  lg:text-left">
          Hooligun Studios
        </h2>
        <p className="  text-justify ">
          Welcome to Hooligun – a new indie movie studio backed by experienced
          creators and producers. We make movies that we’d watch in 20 years,
          produce music that’ll stand the test of time, and find local talent to
          grow into superstars. We love quality cinematography, adore raw skill,
          praise resourcefulness, and thrive in pure creativity. Serj Gabyan and
          Co created Hooligun Studios in 2021, capitalizing on 15+ years of
          networking, producing, distribution, and literary know-how and
          reputation. Our first project is the critically acclaimed OTTK, a
          quirky movie made by a small but skillful crew.
        </p>
      </article>
    </section>
  );
}

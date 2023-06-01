import Image from "next/image";

export default function About() {
  return (
    <>
      <section>
        <a href="https://bit.ly/3N7RmOY " target="blank">
          <Image
            src="/ottk-la.jpg"
            width="1200"
            height="600"
            alt="ottk la banner"
            className="mt-8 px-8 xl:px-0"
          />
        </a>
      </section>
    </>
  );
}

import Image from "next/image";

export default function Footer() {
  return (
    <section className="relative  hidden w-full flex-col items-center  justify-center  p-8  lg:flex  ">
      <Image
        src={"/border-little.svg"}
        alt={"Stylized border with a skull"}
        width="1200"
        height="50"
        className=" absolute -bottom-6 z-10 mx-auto     px-4  sm:-bottom-7 md:bottom-14 md:left-[calc(50%-300px)] lg:w-[600px]"
      />
      <p>Thank You for Your interest in our project. ❤️</p>
    </section>
  );
}

import Image from "next/image";

export default function Border() {
  return (
    <>
      <Image
        src={"/border-long.svg"}
        alt={"Stylized border with a skull"}
        width="1200"
        height="50"
        className="absolute -bottom-16 mx-auto hidden px-4 lg:block"
      />
      <Image
        src={"/border-short.svg"}
        alt={"Stylized border with a skull"}
        width="600"
        height="50"
        className="absolute -bottom-12 mx-auto  px-4  sm:-bottom-16  lg:hidden"
      />
    </>
  );
}

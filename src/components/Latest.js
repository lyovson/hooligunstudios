import Image from "next/image";

export default function Latest() {
  return (
    <section className="flex flex-col items-center gap-10 border-b-4 border-stone-500 p-8 lg:flex-row lg:px-20">
      <Image
        src={"/poster.jpg"}
        alt={"Hooligun studios logo"}
        width="300"
        height="300"
        className="rounded-xl shadow-md"
      />

      <article>
        <h2 className=" py-4 text-3xl">OTTK:</h2>
        <p className=" text-justify ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quibusdam optio temporibus quam earum velit atque dignissimos,
          molestiae doloribus magni esse? Mollitia eos quo cumque. Autem neque
          et itaque omnis, cumque provident fugit placeat alias. Sit perferendis
          accusamus ullam odit maiores placeat atque et sint pariatur nisi magni
          magnam, beatae suscipit nesciunt. Cumque sed voluptatum fuga
          aspernatur illum beatae nemo quos atque, deserunt quaerat! Nostrum
          maiores, provident cumque aspernatur excepturi quam eum odio ipsum
          asperiores dolor vitae hic similique reiciendis nobis perferendis
          soluta molestiae. Doloremque, sed amet. Perspiciatis assumenda
          repudiandae porro, dolore quaerat culpa voluptatibus a corrupti
          eligendi laudantium quam.
        </p>
      </article>
    </section>
  );
}

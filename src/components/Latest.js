import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import localFont from "next/font/local";
import Image from "next/image";

import Video from "./Video.jsx";

const berg = localFont({ src: "../../public/berg.ttf" });

export default function Latest() {
  return (
    <section
      style={{
        backgroundImage: "url(/latest-bckg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center gap-4 p-8   lg:px-20"
    >
      <section className="  flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
        <Image
          src={"/posternew.jpg"}
          alt={"OTTK film logo"}
          width="400"
          height="400"
          className="  rounded-xl shadow-md md:-ml-2 md:-mt-2 md:w-[35%]"
        />

        <article className="flex flex-col  gap-4">
          <h2 className={` ${berg.className} py-4  text-left  text-3xl`}>
            OTTK:
          </h2>
          <article className="">
            <p>
              OTTK is about one night in the life of a businessman who was
              bamboozled by his partner. He decides to take back something
              important for him and hires a heist team to that end. The main
              message of the plot is that the only key to success is the ability
              to listen and understand each other, in order to otherwise avoid
              devastating chaos. It is a black comedy, with a lot of jokes and
              hilarious situations, as much action as we could afford, which we
              sure will be funny also for people not familiar with our culture
              and social peculiarities. If translated from Armenian it means The
              Air, the Moonshine and the Butt (of a rifle, and you thought?).
              Just for the sake of brevity we kept “OTTK” as a working title and
              it kind of stuck. OTTK is our first project, a film made with all
              we had, heart, brain and muscle. We wanted to make something that
              will be watchable even in 20 years from now and the user reviews
              we receive are more than inspiring. We love our creation and are
              proud of it. We are determined to go on with new projects and that
              is the biggest achievement of this endeavor for us.
            </p>
          </article>
          <footer className="  className={`max-w-`} flex justify-center gap-4 py-4 md:order-2 md:justify-start">
            <a
              className="flex gap-2 rounded-lg border-2 border-[#bab49e] p-2 shadow-md "
              href="https://ottkfilm.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSafari} className="h-6 w-6 " />
              Official Website
            </a>
            <a
              className="flex gap-2 rounded-lg border-2 border-[#bab49e] p-2 shadow-md"
              href="https://www.imdb.com/title/tt27466882/?ref_=fn_al_tt_1"
              target="_blank"
            >
              <FontAwesomeIcon icon={faImdb} className="h-6 w-6 " />
              IMDB Page
            </a>
          </footer>
        </article>
      </section>

      <section className=" grid w-full  grid-cols-1 gap-8 md:grid-cols-2 ">
        <Video
          className={` `}
          videoId={"UaP1C6Wuf9o"}
          title={"Official Trailer"}
          info={
            "Lorem ipsum dolor sit amet. Consecutor Malsco alles ovey allo, gomir jesup balast por favort consecutor beliosa."
          }
        />

        <Video
          className={``}
          videoId={"db1zcLX-GQI"}
          title={"OTTK Yerevan Premiere"}
          info={
            "Lorem ipsum dolor sit amet. Consecutor Malsco alles ovey allo, gomir jesup balast por favort consecutor beliosa."
          }
        />
        <Video
          className={` `}
          videoId={"db1zcLX-GQI"}
          title={"OTTK Yerevan Premiere"}
          info={
            "Lorem ipsum dolor sit amet. Consecutor Malsco alles ovey allo, gomir jesup balast por favort consecutor beliosa."
          }
        />
        <Video
          className={` `}
          videoId={"rYmIC5VdQOg"}
          title={"Interview With Levon Beglaryan"}
          info={
            "Lorem ipsum dolor sit amet. Consecutor Malsco alles ovey allo, gomir jesup balast por favort consecutor beliosa."
          }
        />
      </section>
    </section>
  );
}

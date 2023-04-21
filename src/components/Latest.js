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
              {`Our first project, OTTK, is a wild ride that you won't want to miss. It’s about one night in the life of a businessman who got bamboozled by his partner. And you know what he does? He hires an all-Armenian heist team from the diaspora to take back something important to him. Sounds like a recipe for success, right? But wait, it gets better. These guys speak different Armenian dialects and don't understand each other. Now, that leads to some hilarious situations, let me tell you. OTTK is a black comedy, with a lot of jokes and as much action as we could afford. And well, we put our heart, brain, and muscle into this movie to make it watchable even in 20 years, and we’re confident we've done just that. The reviews we've been getting are more than inspiring. People love this movie, and we couldn't be prouder. We poured everything we had into this project, and it shows. So, if you're looking for a good time, look no further than OTTK.`}
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
            "You won’t get much plot from the trailer, but it’ll certainly intrigue you."
          }
        />

        <Video
          className={``}
          videoId={"db1zcLX-GQI"}
          title={"OTTK Yerevan Premiere"}
          info={
            "We made it to the big screens. Finally. And let me tell you, we slayed."
          }
        />
        <Video
          className={` `}
          videoId={"rYmIC5VdQOg"}
          title={"Interview With Levon Beglaryan"}
          info={"Get to know our cast in a fun interview with Levon Beglaryan."}
        />
        <Video
          className={` `}
          videoId={"TfBm1bmpjXI"}
          title={"Karotilim From OTTK OST"}
          info={"Keep calm and plunge into the OTTK world with our soundtrack."}
        />
      </section>
    </section>
  );
}

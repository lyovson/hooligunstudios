import Video from "../../../../../../components/Video.jsx";
import Footer from "../Footer.js";
import Menu from "../Menu.jsx";

export default function Media() {
  return (
    <>
      <Menu />
      <main className="mb-12 flex   flex-col gap-4 p-8 lg:pt-8">
        <h2 className="py-4 text-center  font-title text-3xl">
          Музыкальные Референсы
        </h2>
        <sections className="flex aspect-video flex-row flex-wrap justify-center gap-4">
          <Video
            className={` max-w-[400px]`}
            videoId={"lelMnvpaf0s"}
            title={`Romance in the Clouds`}
            info={`How To Train Your Dragon OST`}
          />
          <Video
            className={` max-w-[400px]`}
            videoId={"MIvWZ8iF6CI"}
            title={`Jennifer Connely - Sway`}
            info={`Dark City OST`}
          />
          <Video
            className={` max-w-[400px]`}
            videoId={"TQV-0fwwCQM"}
            title={`One T + Cool T - The Magic Key`}
            info={`A great song from '00s`}
          />
        </sections>
        <h2 className="py-4 text-center  font-title text-3xl">
          Визуальные Референсы
        </h2>
        <sections className="flex aspect-video flex-row flex-wrap justify-center gap-4 lg:-mb-60 ">
          <Video
            className={` max-w-[400px]`}
            videoId={"ecE0ZeNlejE"}
            title={`Camera Reference`}
            info={` Arri Alexa Mini Kodak 2383 Film Emulation`}
          />
          <Video
            className={` max-w-[400px]`}
            videoId={"Ltba1_-tRT4"}
            title={`Color Reference`}
            info={`Night at the Museum Trailer`}
          />
        </sections>
      </main>
      <Footer />
    </>
  );
}

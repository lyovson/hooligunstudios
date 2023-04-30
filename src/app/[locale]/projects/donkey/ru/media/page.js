import Video from "../../../../../../components/Video.jsx";

export default function Media() {
  return (
    <main className="mb-12 flex  max-w-[90%] flex-col gap-4 p-8 ">
      <h2 className="py-4 text-left font-russian text-5xl">Media:</h2>
      <sections className="flex flex-row flex-wrap gap-2">
        <Video
          className={` max-w-[350px]`}
          videoId={"lelMnvpaf0s"}
          title={`Romance in the Clouds`}
          info={`How To Train Your Dragon OST`}
        />
        <Video
          className={` max-w-[350px]`}
          videoId={"MIvWZ8iF6CI"}
          title={`Jennifer Connely - Sway`}
          info={`Dark City OST`}
        />
        <Video
          className={` max-w-[350px]`}
          videoId={"TQV-0fwwCQM"}
          title={`One T + Cool T - The Magic Key`}
          info={`A great song from '00s`}
        />
      </sections>
    </main>
  );
}

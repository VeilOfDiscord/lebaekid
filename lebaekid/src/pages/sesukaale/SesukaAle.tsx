import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BackgroundPattern from "../../assets/web_bg.jpg";
const SesukaAle = () => {
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed?listType=playlist&list=UUwgTbpqA7G294O8dQifvvqA&index=1"
  );

  const playlists = [
    {
      id: "PL05yvb5-0qTh-rmjmXn7i5PKTvCkOBuzS",
      thumbnail:
        "https://lebaek.id/images/video_page/thumbnail_rollingstories.jpg",
      name: "The Rolling Stories",
      desc: "Cerita pesepeda",
    },
    {
      id: "PL05yvb5-0qThgRVq57fwHtzTlIZoe-RF5",
      thumbnail: "https://lebaek.id/images/video_page/thumbnail_BN.jpg",
      name: "Berani Nanjak",
      desc: "Bukan hanya sekedar jarak",
    },
    {
      id: "PL05yvb5-0qTi2ZpBVP40PGQ1VjvmxgpZL",
      thumbnail:
        "https://lebaek.id/images/video_page/thumbnail_travelstories.jpg",
      name: "Travelling Story",
      desc: "Melanglang menjelajah tanpa batas",
    },
    {
      id: "PL05yvb5-0qTjq5Pq626AuBfxbQIUYtjd-",
      thumbnail: "https://lebaek.id/images/video_page/thumbnail_TrickTips.jpg",
      name: "Trick Tips!",
      desc: "Bersepeda cerdas",
    },
  ];

  return (
    <>
      <Navbar />
      <section style={{ backgroundImage: `url(${BackgroundPattern})` }}>
        <div className="grid justify-center md:px-40 px-8">
          <iframe
            className="aspect-video md:w-[960px] md:h-[540px] w-screen h-fit rounded-lg p-6 justify-center"
            src={videoSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid justify-center justify-items-center">
          <button
            onClick={() =>
              setVideoSrc(
                "https://www.youtube.com/embed?listType=playlist&list=UUwgTbpqA7G294O8dQifvvqA&index=2"
              )
            }
            className="w-30 md:w-60 text-lg text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5"
          >
            <div>
              <h2>Latest Video</h2>
            </div>
          </button>
          <div className="grid lg:flex grid-cols-2 justify-items-center justify-self-center gap-3 p-2">
            {playlists.map((playlist) => (
              <div>
                <button
                  key={playlist.id}
                  onClick={() =>
                    setVideoSrc(
                      `https://www.youtube.com/embed?listType=playlist&list=${playlist.id}`
                    )
                  }
                  className="text-lg text-white  hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg m-2"
                >
                  <img
                    className="object-cover w-70 md:max-w-auto rounded-lg hover:scale-110"
                    src={playlist.thumbnail}
                    alt={playlist.name}
                  />
                </button>
                <h1 className="text-center text-xl bg-gray-300 p-1 rounded-lg">{playlist.desc}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SesukaAle;

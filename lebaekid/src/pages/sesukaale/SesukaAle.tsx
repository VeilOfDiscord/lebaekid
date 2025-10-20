import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const SesukaAle = () => {
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed?listType=user_uploads&list=sesukaale"
  );

  const playlists = [
    {
      id: "PL05yvb5-0qTjBvJn4RJjFL3Om9i34QHO_",
      title: "A",
      description: "Playlist #1",
    },
    {
      id: "PL05yvb5-0qThgJMUNtI6mi871ExwE-nbm",
      title: "B",
      description: "Playlist #2",
    },
    {
      id: "PL05yvb5-0qTiYwcX_s1bN8e3dA26qO-Lp",
      title: "C",
      description: "Playlist #3",
    },
    {
      id: "PL05yvb5-0qTjrG3ILdV1rvZKnKPJ6F5ge",
      title: "D",
      description: "Playlist #4",
    },
  ];

  return (
    <>
      <Navbar />
      <section>
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
                "https://www.youtube.com/embed?listType=user_uploads&list=sesukaale"
              )
            }
            className="w-30 md:w-60 text-lg text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5"
          >
            <div>
              <h2>Latest Video</h2>
            </div>
          </button>
          <div className="grid grid-cols-2 md:grid-cols-2 justify-items-center justify-self-center gap-5 p-7">
            {playlists.map((playlist) => (
              <button
                key={playlist.id}
                onClick={() =>
                  setVideoSrc(
                    `https://www.youtube.com/embed?listType=playlist&list=${playlist.id}`
                  )
                }
                className="w-30 md:w-60 text-lg text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5"
              >
                <div>
                  <h2>{playlist.title}</h2>
                  <p>{playlist.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SesukaAle;

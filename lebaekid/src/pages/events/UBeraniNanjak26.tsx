import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import BannerCarousel from "../../components/carousel/BannerCarousel";
import { generateLinks } from "../../util";
// import Ame from "../../assets/sched.png";
import BarChart from "../../components/charts/BarChart";
import { fetchRange } from "../../util";

const UBeraniNanjak26 = () => {
  const pageLinks = ["/events/u-berani-nanjak-25", "/events"];

  const titles = ["Unsupported Berani Nanjak 2025", "Back to Events"];
  const thumbnails = [
    "../../assets/BN2024.jpg",
    "../../assets/ame.png",
    "../../assets/BN2025.jpg",
  ];

  const playlists = [
    {
      id: "https://www.youtube.com/playlist?list=PL05yvb5-0qTitbdtp9-5XLZphCETJCxhG",
      thumbnail: "https://lebaek.id/images/video_page/thumbnail_BN26_H-2.jpeg",
      name: "Survey",
      desc: "Survey",
    },
    {
      id: "https://www.youtube.com/watch?v=rARrK74vGfw",
      thumbnail: "https://lebaek.id/images/video_page/thumbnail_BN26_H-1.jpeg",
      name: "22nd January",
      desc: "Racepack collection",
    },
    {
      id: "https://www.youtube.com/watch?v=ERFKdvuoOIQ",
      thumbnail: "https://lebaek.id/images/video_page/thumbnail_BN26_H1.jpeg",
      name: "H1",
      desc: "H1",
    },
    {
      id: "https://www.youtube.com/watch?v=rARrK74vGfw",
      thumbnail: "https://lebaek.id/images/video_page/thumbnail_BN26_H2.jpeg",
      name: "H2",
      desc: "H2",
    },
  ];

  const BannerTemp = generateLinks("voting/banner-", 2, 1, ".jpg");
  const BannerSponsor = generateLinks("voting/banner-", 7, 3, ".jpg");

  const BannerLinks = BannerTemp.concat(
    generateLinks("voting/banner-", 5, 1, ".gif"),
  );

  const BannerSponsorLink = [
    "https://www.biznetgio.com",
    "https://www.instagram.com/cervelo_id?igsh=MXFwN2Z2MGlnOWJzdg==",
    "https://www.instagram.com/stray.cc/",
    "https://www.rodalink.com/id/",
    "https://www.instagram.com/manta.liberta?igsh=MXVza2J2OG9rNWs2cA==",
    "https://www.instagram.com/santikabandung/?hl=en",
  ];

  const BannerBN = [
    "#",
    "https://docs.google.com/forms/d/e/1FAIpQLSe4gc8kCoEg066jy5f-5UYt4ByBYzYaYV4PSpTE-TY_pc_rxA/viewform",
  ];
  const [sheetData5km, setSheetData5km] = useState<any[]>([]);
  const [sheetData3km, setSheetData3km] = useState<any[]>([]);
  // const [sheetDataTime, setSheetDataTime] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchRange("A3:E1000", "500km");
      setSheetData5km(result);
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchRange("A3:E1000", "300km");
      setSheetData3km(result);
    };
    loadData();
  }, []);

  // useEffect(() => {
  //   const loadData = async () => {
  //     const result = await fetchRange("A3:E1000", "Waktu");
  //     setSheetDataTime(result);
  //   };
  //   loadData();
  // }, []);


  return (
    <>
      <Navbar />
      <h1 className="grid justify-center text-center md:text-6xl text-5xl p-6 font-bold">
        Berani Nanjak 2026
      </h1>
      <div className="grid justify-center">
        <BannerCarousel
          images={BannerLinks}
          autoslide={true}
          autoslideInterval={3000}
          link={BannerBN}
        />
      </div>
      {/* Text/wordage */}
      <div className="md:text-3xl text-xl text-center grid justify-center my-3 py-5">
        <h3>23-25 January 2026 Bandung</h3>
        <h3>10.000 meg/500km/62 jam</h3>
        <h3>6.000/300km/35jam</h3>
      </div>
      {/* YouTube */}
      <div className="lg:grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* iframe */}
        <div className="grid justify-center md:px-40 px-8 lg:mx-100">
          <iframe
            className="aspect-video lg:w-[960px] lg:h-[540px] md:w-[660px] md:h-[440px] w-screen h-fit rounded-lg p-6 justify-center"
            src={"https://www.youtube.com/embed/paaIJp4FfgE?feature=share"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/*playlist*/}
        <div className="grid grid-cols-2 justify-self-center gap-5">
          {playlists.map((playlist) => (
            <div>
              <a href={playlist.id} target="_blank" rel="noopener noreferrer">
                <img
                  className="object-cover w-50 md:w-70 md:max-w-auto rounded-lg hover:scale-110 md: mt-5"
                  src={playlist.thumbnail}
                  alt={playlist.name}
                />
              </a>
              <h1 className="text-center text-xl bg-gray-300 p-1 rounded-lg hidden md:block">
                {playlist.desc}
              </h1>
            </div>
          ))}
        </div>
      </div>
      {/* Banner for participants */}
      <div className="grid justify-center sticky top-0 z-1 sm:relative ">
        <BannerCarousel
          images={BannerSponsor}
          autoslide={true}
          autoslideInterval={3000}
          link={BannerSponsorLink}
        />
      </div>
      <div>
        {/*Checkpoint Times*/}
        <div className="flex justify-center w-full px-4">
          <div className="relative w-full max-w-[350px] h-[350px] xs:max-w-[400px] xs:h-[400px] sm:max-w-[600px] sm:h-[400px] lg:max-w-[900px] lg:h-[500px] overflow-hidden">
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS4iAPhApIMUVtcDSIFvb-xs87dXotgcwYsJZAe2NGDPB5IqGdeD2IbeKi3iMdZTdgwrcBIuKSIxoXG/pubhtml?gid=1109905634&amp;single=true&amp;widget=false&amp;headers=false"
              className="w-[1200px] h-[500px] origin-top-left scale-[0.390] xs:scale-[0.444] sm:scale-[0.667] lg:scale-100"
            />
          </div>
        </div>
        <div className="grid justify-center">
          <a
            href="/ongoing-vote"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 py-2 sm:px-5 sm:py-2.5"
          >
            Page Voting Disini
          </a>
        </div>

        <div>{/* Gallery Pictures */}</div>
      </div>
      <h1 className="grid text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-3 my-5 justify-center font-bold">
        Hasil Voting P1 dan P2
      </h1>

      <div className="w-full my-6 sm:my-8 lg:my-10 text-center grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10">
        <div className="w-full">
          <h1 className="text-lg sm:text-xl md:text-2xl pb-2 sm:pb-3 font-bold">
            500km
          </h1>
          <BarChart sheetData={sheetData5km} />
        </div>
        <div className="w-full">
          <h1 className="text-lg sm:text-xl md:text-2xl pb-2 sm:pb-3 font-bold">
            300km
          </h1>
          <BarChart sheetData={sheetData3km} />
        </div>
      </div>

      <Card pages={pageLinks} thumbnail={thumbnails} title={titles} />
      <Footer />
    </>
  );
};

export default UBeraniNanjak26;

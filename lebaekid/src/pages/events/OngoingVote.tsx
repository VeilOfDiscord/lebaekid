import Carousel from "../../components/carousel/Carousel";
import BannerCarousel from "../../components/carousel/BannerCarousel";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { generateLinks } from "../../util";
import { fetchRange } from "../../util";
import { useEffect, useState } from "react";
import BarChart from "../../components/charts/BarChart";

const OngoingVote = () => {
  const imageLinks500 = generateLinks(
    "2026_carousel/Petarung500-",
    30,
    1,
    ".jpeg"
  );
  const imageLinks300 = generateLinks(
    "2026_carousel/Petarung300-0",
    56,
    1,
    ".jpg"
  );
  const BannerTemp = generateLinks("voting/banner-", 8, 1, ".jpg");
  const BannerLinks = BannerTemp.concat(generateLinks("voting/banner-",1,1,".gif"));

  const BannerSponsors = [
    "#",
    "https://docs.google.com/forms/d/e/1FAIpQLSe4gc8kCoEg066jy5f-5UYt4ByBYzYaYV4PSpTE-TY_pc_rxA/viewform",
    "https://www.biznetgio.com",
    "https://www.instagram.com/cervelo_id?igsh=MXFwN2Z2MGlnOWJzdg==",
    "https://www.instagram.com/stray.cc/",
    "https://www.rodalink.com/id/",
    "https://www.instagram.com/manta.liberta?igsh=MXVza2J2OG9rNWs2cA==",
    "https://www.instagram.com/santikabandung/?hl=en"  
];

  const [sheetData5km, setSheetData5km] = useState<any[]>([]);
  const [sheetData3km, setSheetData3km] = useState<any[]>([]);

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

  return (
    <>
      <Navbar />
      <div className="grid justify-items-center justify-center lg:px-40 px-8">
        <BannerCarousel
          images={BannerLinks}
          autoslide={true}
          autoslideInterval={3000}
          link={BannerSponsors}
        />
        <div className="grid justify-center bg-white rounded-xl md:px-10 px-6 pt-6">
          <div className="">
            <h1 className="grid text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-3 my-5 justify-center font-bold">
              Vote Sekarang, Dukung Petarung Andalanmu dan Menangkan Hadiah
              Doorprize-nya
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-justify">
              Pertarungan Berani Nanjak ini bukan hanya soal siapa yang kuat dan
              cepat, tetapi siapa yang bertahan paling lama melawan dirinya
              sendiri.
            </h2>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text- text-justify">
              Tunjukkan dukungan anda ke Petarung andalan dalam menyelesaikan
              Pertarungan Berani Nanjak, dan sebagai apresiasi atas partisipasi
              anda, panitia menyiapkan berbagai doorprize menarik untuk peserta
              voting.
            </h2>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-justify">
              Voting akan dibuka dari tanggal{" "}
              <span className="font-medium">10 Januari 2026 jam 10:00</span> dan
              di tutup tanggal{" "}
              <span className="font-medium">25 Januari 2026 jam 10:00</span>,
              dengan ketentuan sebagai berikut:
            </h2>
          </div>
          <ul className="list-disc list-inside pl-5 py-4 m-6">
            <li className="text-base sm:text-lg lg:text-xl flex text-justify">
              <p>
                <span className="font-bold">Prediksi Podium</span> - total
                hadiah untuk 20 pemilih Siapa petarung yang menurut anda mampu
                menduduki podium 1 dan podium 2 di kategiri 300km dan 500km.
                <br />
                <p className="text-red-500 font-bold">
                  Periode Voting tgl 10 Januari 2026 jam 10:00 sd 22 Januari
                  2026 jam 23:59
                </p>
              </p>
            </li>
            <li className="text-base sm:text-lg lg:text-xl flex text-justify">
              <p>
                <span className="font-bold">
                  Prediksi Waktu Finish Tercepat
                </span>
                – total hadiah untuk 10 pemilih Berapa waktu yang dibutuhkan
                oleh petarung no 1 untuk menyelesaikan seluruh rute pertarungan.
                <br />
                <p className="text-red-500 font-bold">
                  Periode Voting tgl 10 Januari 2026 jam 10:00 sd 22 Januari
                  2026 jam 23:59
                </p>
              </p>
            </li>
            <li className="text-base sm:text-lg lg:text-xl flex text-justify">
              <p>
                <span className="font-bold">Peserta Terfavorit</span> – total
                hadiah untuk 20 pemilih dan 2 hadiah untuk petarung terpilih
                (masing-masing kategori 1 pemenang)
                <br />
                <p className="text-red-500 font-bold">
                  Periode Voting tgl 10 Januari 2026 jam 10:00 sd 25 Januari
                  2026 jam 23:59
                </p>
              </p>
            </li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl">
            Penentuan pemenang berdasarkan undian untuk peserta voting yang
            pilihannya benar dan Petarung favorit yang terpilih. Keputusan
            Panitia bersifat mutlak dan tidak dapat diganggu gugat. Syarat dan
            ketentuan berlaku.
          </h2>
        </div>
        <div className="justify-center text-center my-6 sm:my-8 lg:my-10">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe4gc8kCoEg066jy5f-5UYt4ByBYzYaYV4PSpTE-TY_pc_rxA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 py-2 sm:px-5 sm:py-2.5"
          >
            Vote sekarang!
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 py-2 sm:px-5 sm:py-2.5"
          >
            Tonton disini!
          </a>
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
          <Carousel
            images={imageLinks500}
            autoslide={false}
            autoslideInterval={5000}
            data={sheetData5km}
          />
          <Carousel
            images={imageLinks300}
            autoslide={false}
            autoslideInterval={5000}
            data={sheetData3km}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default OngoingVote;

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BN24Map from "../../assets/BN2024-map.png";
import { generateLinks } from "../../util";
import Gallery from "../../components/gallery/Gallery";
import Card from "../../components/card/Card";

const BeraniNanjak24 = () => {
  const galleryImages = generateLinks("2024/BN2024-", 6);
  const pageLinks = [
    "/events/berani-nanjak-23",
    "/events",
    "/events/berani-nanjak-25",
  ];
  const titles = [
    "Berani Nanjak 2023",
    "Back to Events",
    "Berani Nanjak 2025",
  ];
  const thumbnails = [
    "../assets/BN2023.jpg",
    "../assets/ame.png",
    "../assets/BN2025.jpg",
  ];
  return (
    <>
      <Navbar />
      <h1 className="grid justify-center text-center md:text-6xl text-5xl p-6 font-bold">
        Berani Nanjak 2024
      </h1>
      <div className="grid justify-center pt-5 px-4">
        <Gallery
          images={galleryImages}
          divCSS={"grid grid-cols-2 md:grid-cols-3"}
          imgCSS={"h-full w-full object-cover rounded-lg"}
        />
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 py-8 gap-3 md:gap-0">
          <div className="order-2 md:order-1 text-lg">
            <p> Menempuh jarak 180km dengan elevasi 3800meg</p>
            <p>
              Perjalanan di mulai dari Aston Denpasar menuju arah Tabanan -
              Puluk Puluk - Jatiiluwih - Bedugul - Pura Ulun Danu Beratan
              (Lunch) - Antapan - Tiyingan Plaga - Kintamani - Denpasar
            </p>
            <ul>
              <li>CP 1 Jatiluwih</li>
              <li>CP 2 Pura Ulun Danu Beratan</li>
              <li>CP 3 Indomaret Puncak Manggu</li>
              <li>CP 4 Indomaret Geopark Kintamani</li>
              <li>CP 5 Indomaret Payangan</li>
            </ul>
          </div>
          <div className="rder-1 md:order-2">
            <img
              className="h-auto md:w-full w-full max-w-2xl sticky rounded-xl"
              src={BN24Map}
              alt="Ame"
            />
          </div>
        </div>
      </div>
      <Card pages={pageLinks} thumbnail={thumbnails} title={titles} />
      <Footer />
    </>
  );
};

export default BeraniNanjak24;

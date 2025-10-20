import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BN25Map from "../../assets/BN2023-map.jpg";
import { generateLinks } from "../../util";
import Gallery from "../../components/gallery/Gallery";
import Card from "../../components/card/Card";

const BeraniNanjak25 = () => {
  const galleryImages = generateLinks("2025/Supported/BN2025-", 6);
  // const galleryImages2 = generateLinks("2025/Supported/BN2025-", 3, 4);
  const pageLinks = [
    "/events/berani-nanjak-23",
    "/events",
    "/events/berani-nanjak-24",
  ];
  const titles = [
    "Berani Nanjak 2023",
    "Back to Events",
    "Berani Nanjak 2024",
  ];
    const thumbnails = [
    "../../assets/BN2023.jpg",
    "../../assets/ame.png",
    "../../assets/BN2024.jpg",
  ];
  return (
    <>
      <Navbar />
      <h1 className="grid justify-center text-center md:text-6xl text-5xl p-6 font-bold">
        Berani Nanjak 2025
      </h1>
      <div className="grid justify-center pt-5 px-4">
        <Gallery
          images={galleryImages}
          divCSS={"grid grid-cols-2 md:grid-cols-3"}
          imgCSS={"h-full w-full object-cover rounded-lg"}
        />
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 py-8 gap-3 md:gap-0">
          <div className="order-2 md:order-1 text-lg">
            <p>Menempuh Jarak 180km dengan elevasi 3800.meg</p>
            <p>
              Perjalanan dimulai dari Aston Denpasar menuju arah Tabanan -
              Pupuan - Munduk - The NorthView (lunch) - Danau Buyan - Bedugul -
              Auman - Antapan - Aston Denpasar
            </p>
            <ul>
              <li>CP 1 : indomaret pujungan</li>
              <li>CP 2 : restaurant the northview</li>
              <li>CP 3 : indomaret baturiti</li>
              <li>CP 4 : indomaret petang </li>
            </ul>
          </div>
          <div className="rder-1 md:order-2">
            <img
              className="h-auto md:w-full w-full max-w-2xl sticky rounded-xl"
              src={BN25Map}
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

export default BeraniNanjak25;

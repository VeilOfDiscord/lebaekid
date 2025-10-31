import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { generateLinks } from "../../util";
import Gallery from "../../components/gallery/Gallery";
import Card from "../../components/card/Card";

const BeraniNanjak23 = () => {
  const galleryImages = generateLinks("2023/BN2023-", 6);
  const pageLinks = [
    "/events/berani-nanjak-24",
    "/events",
    "/events/berani-nanjak-25",
  ];
  const titles = ["Berani Nanjak 2024", "Back to Events", "Berani Nanjak 2025"];

  const thumbnails = [
    "../../assets/BN2024.jpg",
    "../../assets/ame.png",
    "../../assets/BN2025.jpg",
  ];
  return (
    <>
      <Navbar />
      <h1 className="grid justify-center text-center md:text-6xl text-5xl p-6 font-bold">
        Berani Nanjak 2023
      </h1>
      <div className="grid justify-center pt-5 px-10 md:px-30 md:mx-50">
        <div className="grid justify-items-center py-8 gap-5 md:gap-0">

          <div>
            <img
              className="h-auto md:w-full w-full max-w-2xl sticky rounded-xl"
              src={"https://lebaek.id/images/events/2023/BN2023-map.jpg"}
              alt="Ame"
            />

          </div>
        </div>
        <h1 className="grid justify-center text-center md:text-6xl text-5xl p-6 font-bold">
          Photos
        </h1>
        <Gallery
          images={galleryImages}
          divCSS={"grid grid-cols-2 md:grid-cols-3 "}
          imgCSS={"h-full w-full object-cover rounded-lg"}
        />
      </div>
      <Card pages={pageLinks} thumbnail={thumbnails} title={titles} />
      <Footer />
    </>
  );
};

export default BeraniNanjak23;

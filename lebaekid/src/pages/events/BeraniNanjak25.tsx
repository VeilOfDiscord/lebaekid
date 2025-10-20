import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BN23Map from "../../assets/BN2023-map.png";
import { generateLinks } from "../../util";
import Gallery from "../../components/gallery/Gallery";

const BeraniNanjak25 = () => {
  const galleryImages = generateLinks("2025/Supported/BN2025-", 6);
  // const galleryImages2 = generateLinks("2025/Supported/BN2025-", 3, 4);

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
              src={BN23Map}
              alt="Ame"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 justify-items-center">
          {/* <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="image description"
              />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6"></figcaption>
          </figure>
 */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BeraniNanjak25;

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { generateLinks } from "../../util";
import Gallery from "../../components/gallery/Gallery";

const UBeraniNanjak25 = () => {
  const galleryImages = generateLinks("2025/Unsupported/UBN2025-", 6);
  return (
    <>
      <Navbar />
      <h1 className="grid justify-center text-center md:text-6xl text-5xl p-6 font-bold">
        Berani Nanjak 2025
      </h1>
      <div className="grid justify-center pt-5 px-10 md:px-30 md:mx-50">
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 py-8 gap-3 md:gap-0">
          <div className="order-2 md:order-1 text-lg text-center">
            Information
          </div>
          <div className="order-1 md:order-2">
            <video
              autoPlay
              muted
              loop
              className="h-auto md:w-full w-full max-w-2xl sticky rounded-xl"
            >
              <source
                src="https://lebaek.id/images/logo/BN2025-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <h1 className="grid justify-center text-center md:text-6xl text-5xl p-6 font-bold">
          Photos
        </h1>
        <Gallery
          images={galleryImages}
          divCSS={"grid grid-cols-2 md:grid-cols-3"}
          imgCSS={"h-full w-full object-cover rounded-lg"}
        />
      </div>
      <Footer />
    </>
  );
};

export default UBeraniNanjak25;

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Indomaret from "../../assets/sponsor/sponsor-indomaret.jpg";
import BlueBird from "../../assets/sponsor/sponsor-bluebird.jpg";

const galleryImages = [
  "https://lebaek.id/images/sponsor/sponsor-ej.jpg",
  "https://lebaek.id/images/sponsor/sponsor-urbancase.jpg",
  "https://lebaek.id/images/sponsor/sponsor-pi.jpg",
  "https://lebaek.id/images/sponsor/sponsor-draft.jpg",
  "https://lebaek.id/images/sponsor/sponsor-suma.jpg",
  "https://lebaek.id/images/sponsor/sponsor-yebi.jpg",
  "https://lebaek.id/images/sponsor/sponsor-sababay.png",
  "https://lebaek.id/images/sponsor/sponsor-skipjack.jpg",
];

const Sponsor = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="grid justify-center lg:px-40 px-8">
          <h1 className="grid justify-center text-6xl py-6 font-bold">
            Sponsors
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-9">
            <img src={Indomaret} alt="" />
            <img src={BlueBird} alt="" />
          </div>
        </div>
      </section>
      <Gallery images={galleryImages} divCSS={"grid grid-cols-3 justify-items-center"} imgCSS={" md:h-[400px] md:w-auto"} />
      <Footer />
    </>
  );
};

export default Sponsor;

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MasonryGallery from "../../components/gallery/MasonryGallery";

import BannerImage from "../../assets/Banner.jpg";
import BackgroundImage from "../../assets/Banner Home.jpg";

const Home = () => {
  const galleryImages = [
    "https://lebaek.id/images/home_gallery/BN2025-1.jpg",
    "https://lebaek.id/images/home_gallery/BN2025-2.jpg",
    "https://lebaek.id/images/home_gallery/BN2025-3.jpg",
    "https://lebaek.id/images/home_gallery/BN2025-4.jpg",
    "https://lebaek.id/images/home_gallery/BN2025-5.jpg",
    "https://lebaek.id/images/home_gallery/BN2025-7.jpg",
    "https://lebaek.id/images/home_gallery/BN2025-8.jpg",
    "https://lebaek.id/images/home_gallery/BN2025-9.jpg",
    "https://lebaek.id/images/home_gallery/BN2025-10.jpg",
  ];
  return (
    <>
      <Navbar />

      <section className="relative flex h-[20vh] md:h-[50vh] w-full items-end justify-center bg-gray-900">
        <div
          style={{ backgroundImage: `url(${BackgroundImage})` }}
          className="absolute inset-0 z-0 h-auto bg-cover bg-[] opacity-80"
        ></div>
        <div className="relative z-10 p-5 text-white text-5xl font-bold">
          LeBaek.id
        </div>
      </section>

      <section className="m-auto w-full max-w-screen-xl p-4">
        <div className="grid justify-items-center">
          <h1 className="text-center text-4xl md:text-6xl md:py-6 pb-6 font-bold">
            Upcoming Event
          </h1>
          <img
            src={BannerImage}
            className="justify-center md:w-full object-fit rounded-lg"
            alt="Upcoming Event Banner"
          />
        </div>
        <div>
          <div className="text-center py-5">
            <h2 className="font-bold text-3xl md:text-5xl py-5">
              BERANI NANJAK - Unsupported Ultra Cycling Race
            </h2>
            <div className="md:text-3xl text-xl">
              <h3>23-25 January 2026 Bandung</h3>
              <h3>10.000 meg/500km/62 jam</h3>
              <h3>6.000/300km/35jam</h3>
            </div>
          </div>
          <div className="grid justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 md:p-6 p-3 gap-2">
              <div className="mx-auto">
                <h2 className="font-bold md:text-3xl text-xl">
                  Peserta akan mendapat:
                </h2>
                <ul className="list-disc mx-6 md:pt-3 md:text-2xl text-lg">
                  <li>Live Tracking device</li>
                  <li>Bike Tag/Nomor Peserta</li>
                  <li>Cycling Cap</li>
                  <li>Foto dokumentasi</li>
                  <li>Patch dan T-shirt finisher*</li>
                  <li>Medali**</li>
                  <li>Finisher Dinner (untuk semua peserta)</li>
                  <li>Refreshments snack/minum</li>
                </ul>
                <p className="pt-3">
                  *Patch dan Tshirt finisher diberikan kepada peserta
                </p>
                <p>yang finish sebelum COT.</p>
                <p>**Medali hanya untuk pemenang 1 & 2.</p>
              </div>
              <div className="md:mx-auto max-w-max">
                <h2 className="font-bold md:text-3xl text-xl pt-3 md:pt-0">
                  Berhadiah Tunai
                </h2>
                <p className="font-bold md:text-2xl md:pt-3 text-lg">500km</p>
                <ul className="list-disc mx-6 md:text-2xl text-lg">
                  <li>1st Finished Rp 5.000.000</li>
                  <li>2nd Finished Rp 3.000.000</li>
                </ul>
                <p className="font-bold md:text-2xl md:pt-3 text-lg">300km</p>
                <ul className="list-disc mx-6 md:text-2xl text-lg">
                  <li>1st Finished Rp 3.000.000</li>
                  <li>2nd Finished Rp 1.500.000</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center py-3">
            <h2 className="font-bold md:text-4xl text-2xl">
              Periode Registrasi
            </h2>
            <div className="md:text-2xl text-lg">
              <p>Early Bird 1 Oct - 31 Oct 2025</p>
              <p>Normal 1 Nov - 31 Dec 2025</p>
              <p className="pb-5">
                PM harga khusus Komunitas (selama slot masih ada)
              </p>
            </div>
            <a
              href="https://bit.ly/BeraniNanjak-Unsupported"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5"
            >
              Register Here!
            </a>
          </div>
        </div>
      </section>
      <section>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <h1 className="text-center text-4xl md:text-6xl md:py-6 pb-6 font-bold">
          Photos from Last Event
        </h1>
        <MasonryGallery images={galleryImages} divCSS="columns-2 lg:columns-3" imgCSS={"rounded-lg"} />
      </section>

      <Footer />
    </>
  );
};

export default Home;

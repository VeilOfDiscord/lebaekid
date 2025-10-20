import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BannerImage from "../../assets/Banner.jpg";

const UBeraniNanjak26 = () => {
  // const galleryImages = generateLinks("2026/BN2026-", 6);

  return (
    <>
      <Navbar />
      <h1 className="grid justify-center text-center md:text-6xl text-5xl p-6 font-bold">
        Berani Nanjak 2026
      </h1>
      <div className="grid justify-center pt-5 px-4">
        {/* <Gallery images={galleryImages} divCSS={"grid grid-cols-2 md:grid-cols-3"} imgCSS={"h-full w-full object-cover rounded-lg"} /> */}
                  <img
            src={BannerImage}
            className="justify-center md:w-full object-fit rounded-lg"
            alt="Upcoming Event Banner"
          />
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
      </div>
      <Footer />
    </>
  );
};

export default UBeraniNanjak26;

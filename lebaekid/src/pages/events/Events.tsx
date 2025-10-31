import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BackgroundPattern from "../../assets/web_bg.jpg";

const Events = () => {
  return (
    <>
      <Navbar />
      <section className="p-4"  style={{ backgroundImage: `url(${BackgroundPattern})` }}>
        <div className="grid justify-center lg:px-40 px-8">
          <h1 className="grid justify-center text-6xl py-6 font-bold">
            Events
          </h1>
          <div className="grid justify-center bg-white rounded-sm p-4">
            <div className="grid">
              <h1 className="text-5xl pb-1">Berani Nanjak</h1>
              <h1 className="text-3xl md:text-4xl pb-3">
                Touring Endurance Full Support
              </h1>
              <p className="text-lg flex justify-start text-justify py-1">
                Merupakan event pertama yang diselenggarakan oleh Lebaek.id pada
                tahun 2023.
              </p>
              <p className="text-lg flex justify-center text-justify py-1">
                Mengusung konsep bersepeda touring yang penuh tantangan dan
                membutuhkan ketahanan fisik, namun selama perjalanan para
                peserta akan didampingi oleh team support yang professional
                seperti:
              </p>
              <p className="text-lg flex justify-start text-justify py-1 px-3 ">
                Marshal dorong, mobil pick up, bus evac, ambulance,
                photographer, snack dan minum di setiap CP, makan siang
                berlimpah (semua akan disesuaikan dengan rute yang ada)
              </p>
              <p className="text-2xl md:text-3xl pb-3 fle py-3 text-center">
                Event ini bukan balapan tetapi Touring Endurance Full Support.
              </p>
              <div className="grid justify-center justify-items-center py-2">
                <div className="grid justify-center grid-cols-2 gap-4 md:grid-cols-3 pb-10 w-75 md:w-auto">
                  <div className="grid justify-items-center">
                    <p className="text-xl font-bold pb-2">2023</p>
                    <Link
                      to="/events/berani-nanjak-23"
                      className="overflow-hidden"
                    >
                      <img
                        src={"https://lebaek.id/images/logo/BN2023.jpg"}
                        className="hover:shadow-lg hover:scale-105"
                        alt="Berani Nanjak 2023"
                      />
                    </Link>
                  </div>
                  <div className="grid justify-items-center">
                    <p className="text-xl font-bold pb-2">2024</p>
                    <Link
                      to="/events/berani-nanjak-24"
                      className="overflow-hidden"
                    >
                      <img
                        src={"https://lebaek.id/images/logo/BN2024.jpg"}
                        className="hover:shadow-lg hover:scale-105"
                        alt="Berani Nanjak 2024"
                      />
                    </Link>
                  </div>
                  <div className="grid justify-items-center">
                    <p className="text-xl font-bold pb-2">2025</p>
                    <Link
                      to="/events/berani-nanjak-25"
                      className="overflow-hidden"
                    >
                      <img
                        src={"https://lebaek.id/images/logo/BN2025.jpg"}
                        className="hover:shadow-lg hover:scale-105"
                        alt="Berani Nanjak 2025"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid justify-center bg-white rounded-sm p-4">
            <h1 className="text-5xl pb-1">Berani Nanjak</h1>
            <h1 className="text-3xl md:text-4xl pb-3">
              Unsupported Ultra Cycling Race
            </h1>
            <p className="text-lg flex justify-start text-justify py-1">
              Pertama kali diselenggarakan pada April 2025 di Bali, “Berani
              Nanjak” hadir sebagai event ultra cycling berbeda dari yang lain.
              Dengan rute ±500 km dan total elevasi mencapai ±10.000 meter,
              peserta diberi waktu maksimal 62 jam untuk menaklukkan salah satu
              tantangan bersepeda paling ekstrem di Indonesia.
            </p>
            <p className="text-lg flex justify-start text-justify py-1">
              Tidak seperti event ultra cycling pada umumnya, Berani Nanjak
              memberikan hadiah tunai untuk para pemenang, dan medali hanya
              diberikan bagi mereka yang benar-benar berhasil naik podium. Tidak
              ada medali finisher—hanya untuk yang pantas menyandang gelar
              juara.
            </p>
            <p className="text-lg flex justify-start text-justify py-1">
              Event ini juga dirancang untuk dua tipe peserta:
            </p>
            <ul className="list-disc ml-7 text-lg py-1">
              <li>Kompetitif & mengejar podium</li>
              <li>Petualang & penikmat perjalanan</li>
            </ul>

            <p className="text-lg flex justify-start text-justify py-1">
              Dengan COT yang cukup panjang, peserta non-kompetisi tetap dapat
              menikmati perjalanan, mengeksplorasi keindahan rute, sambil
              menghadapi tantangan yang nyata.
            </p>
            <p className="text-lg flex justify-start text-justify py-1">
              Berani Nanjak bukan sekadar soal jarak. Ini adalah ujian ketahanan
              fisik, kekuatan mental, manajemen waktu, strategi istirahat,
              nutrisi, dan kemampuan bertahan menghadapi naik-turun emosi di
              sepanjang perjalanan.
            </p>
            <p className="text-2xl md:text-3xl py-4 text-center">
              <a
                href="https://lebaek.id/assets/BeraniNanjakTnC.pdf"
                target="_blank"
              >
                Terms and Conditions apply.
              </a>
            </p>
            <div className="grid justify-center justify-items-center">
              <div className="grid justify-center grid-cols-2 gap-4 md:grid-cols-3 pb-10 w-75 md:w-auto">
                <div className="grid justify-items-center">
                  <p className="text-xl font-bold pb-2">2025</p>
                  <Link
                    to="/events/u-berani-nanjak-25"
                    className="overflow-hidden"
                  >
                    <img
                      src={"https://lebaek.id/images/logo/UBN2025.jpg"}
                      className="hover:shadow-lg hover:scale-105"
                      alt="Berani Nanjak 2025"
                    />
                  </Link>
                </div>
                <div className="grid justify-items-center">
                  <p className="text-xl font-bold pb-2">2026</p>
                  <Link
                    to="/events/u-berani-nanjak-26"
                    className="overflow-hidden"
                  >
                    <img
                      src={"https://lebaek.id/images/logo/UBN2026.jpg"}
                      className="hover:shadow-lg hover:scale-105"
                      alt="Berani Nanjak 2026"
                    />
                  </Link>
                </div>{" "}
                <div className="grid justify-items-center">
                  <p className="text-xl font-bold pb-2">2026</p>
                  <Link
                    to="/events/u-berani-nanjak-26"
                    className="overflow-hidden"
                  >
                    <img
                      src={"https://lebaek.id/images/logo/UBN2026-B.jpg"}
                      className="hover:shadow-lg hover:scale-105"
                      alt="Berani Nanjak 2026"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;

import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import BN2023Image from "../../assets/BN2023.jpg";
import BN2024Image from "../../assets/BN2024.jpg";
import BN2025Image from "../../assets/BN2025.jpg";
import UBN2025Image from "../../assets/UBN2025.jpg";

import UBN2026Image from "../../assets/UBN2026.jpg";

const Events = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="grid justify-center lg:px-40 px-8">
          <h1 className="grid justify-center text-6xl py-6 font-bold">
            Events
          </h1>
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
              membutuhkan ketahanan fisik, namun selama perjalanan para peserta
              akan didampingi oleh team support yang professional seperti:
            </p>
            <p className="text-lg flex justify-start text-justify py-1 px-3 ">
              Marshal dorong, mobil pick up, bus evac, ambulance, photographer,
              snack dan minum di setiap CP, makan siang berlimpah (semua akan
              disesuaikan dengan rute yang ada)
            </p>
            <p className="text-lg flex justify-start text-justify py-1">
              Event ini bukan balapan tetapi Touring Endurance Full Support.
            </p>
            <div className="grid justify-center justify-items-center">
              <div className="grid justify-center grid-cols-2 gap-4 md:grid-cols-3 pb-10 w-75 md:w-auto">
                <div className="grid justify-items-center">
                  <p className="text-xl font-bold pb-2">2023</p>
                  <Link to="/events/berani-nanjak-23">
                    <img
                      src={BN2023Image}
                      className="hover:shadow-lg"
                      alt="Berani Nanjak 2023"
                    />
                  </Link>
                </div>
                <div className="grid justify-items-center">
                  <p className="text-xl font-bold pb-2">2024</p>
                  <Link to="/events/berani-nanjak-24">
                    <img
                      src={BN2024Image}
                      className="hover:shadow-lg"
                      alt="Berani Nanjak 2024"
                    />
                  </Link>
                </div>
                <div className="grid justify-items-center">
                  <p className="text-xl font-bold pb-2">2025</p>
                  <Link to="/events/berani-nanjak-25" className="">
                    <img
                      src={BN2025Image}
                      className="hover:shadow-lg"
                      alt="Berani Nanjak 2025"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid justify-center">
            <h1 className="text-5xl pb-1">Berani Nanjak</h1>
            <h1 className="text-3xl md:text-4xl pb-3">
              Unsupported Ultra Cycling Race
            </h1>
            <p className="text-lg flex justify-start text-justify py-1">
              Pertama kali diselenggarakan pada bulan April 2025 di Bali,
              menempuh jarak 500km dengan elevasi sekitar 10.000meg dan berbatas
              waktu 62 jam.
            </p>
            <p className="text-lg flex justify-start text-justify py-1">
              Berbeda dengan event Ultra Cycling yang sering diadakan, Event ini
              memberikan hadiah Tunai kepada para pemenang dan Medali hanya
              untuk pemenang
            </p>
            <p className="text-lg flex justify-start text-justify py-1">
              Selain memberikan hadiah tunai, event ini juga mempunyai COT yang
              cukup panjang sehingga peserta yang tidak berkompetisi bisa lebih
              menikmati perjalanan dengan tantangannya.
            </p>
            <p className="text-xl py-4">
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
                  <Link to="/events/u-berani-nanjak-25">
                    <img
                      src={UBN2025Image}
                      className="hover:shadow-lg"
                      alt="Berani Nanjak 2025"
                    />
                  </Link>
                </div>
                <div className="grid justify-items-center">
                  <p className="text-xl font-bold pb-2">2026</p>
                  <Link to="/events/u-berani-nanjak-26">
                    <img
                      src={UBN2026Image}
                      className="hover:shadow-lg"
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

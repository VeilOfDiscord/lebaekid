import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import logo from "../../assets/logo.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="grid justify-center md:px-15 px-8">
        <h1 className="grid justify-center text-6xl md:py-6 py-4 font-bold">
          About
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flexbox align-center justify-items-center">
            <img
              src={logo}
              className="w-[500px] h-fit md:p-15 object-contain align-center"
              alt="LeBaek Logo"
            />
          </div>
          <div className="text-xl text-justify md:m-4">
            <ul className="py-3 ">
              <li className="py-3 ">
                Lebaek.id adalah penyelenggara resmi event sepeda ultra cycling
                endurance dengan nama "Berani Nanjak"
              </li>

              <li className="py-3 ">
                Lebaek.id didirikan oleh Ale (Andre Leman) yang juga merupakan
                pesepeda. Dan berdasarkan pengalaman Ale mengikuti beberapa
                event sepeda dan ultra cycling di dalam maupun luar negeri maka
                berdirilah Lebaik.id
              </li>
              <li className="py-3 ">
                Dengan semangat komunitas dan kekeluargaan, Lebaek.id hadir
                untuk memperkenalkan serta memberi kesempatan kepada para
                pecinta sepeda agar dapat menikmati pengalaman Touring Endurance
                dan Ultra Cyling untuk menjelajah rute-rute menarik dan
                menantang di Indonesia maupun luar negri.
              </li>
              <li className="py-3 ">
                Ale menghadirkan Lebaek.id sebagai wadah untuk menyatukan
                semangat petualangan, ketangguhan, dan kekeluargaan dalam satu
                jalur: sepeda.
              </li>
              {/* <hr className="my-5 border-gray-200" />
              <li>
                <i>
                  LeBaek.ID ingin memberi kesempatan kepada sesama pecinta
                  sepeda menikmati pengalaman touring seru yang aman dan nyaman
                  dalam menjelajah Indonesia dengan rute-rute menarik dan
                  menantang.
                </i>
              </li>

              <li>
                <i>
                  Ale (Andre Leman), pensiunan karyawan swasta dengan hobi
                  bersepeda jarak jauh dan juga mengikuti beberapa event
                  nasional maupun international. Ia juga berpengalaman dalam
                  penyelenggaraan event internal club maupun event umum
                  nasional.
                </i>
              </li>
              <li>
                <i>
                  Ale (Andre Leman) juga dikenal sebagai seorang Youtuber.
                  account Youtube ale : "sesuka ale"
                </i>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

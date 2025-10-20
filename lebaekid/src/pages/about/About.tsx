import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import logo from "../../assets/logo.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="grid justify-center md:px-15 px-8">
        <h1 className="grid justify-center text-6xl md:py-6 py-4 font-bold">About</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flexbox align-center justify-items-center">
            <img
              src={logo}
              className="w-[500px] h-fit md:p-15 object-contain align-center"
              alt="LeBaek Logo"
            />
          </div>
          <div className="text-xl text-justify md:m-4">
            <ul className="py-3">
              <li>
                LeBaek.ID wants to give cycling enthusiasts the opportunity to
                enjoy an exciting touring experience that is safe and
                comfortable while exploring Indonesia with interesting and
                challenging routes.
              </li>

              <li>
                Ale (Andre Leman) is a retired office worker with a hobby for
                cycling long distances and competing in several national and
                even international cycling events. He has also managed internal
                club events as well as public events.
              </li>
              <li>
                To see more about Ale (Andre Leman), he also has a YouTube
                channel called "Sesuka Ale" with videos covering many events and
                talking to other competitors.
              </li>
              <hr className="my-5 border-gray-200" />
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
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

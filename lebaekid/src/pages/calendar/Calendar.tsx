import CalendarList from "../../components/calendar/CalendarList";
import RegisterForm from "../../components/calendar/RegisterForm";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import BackgroundPattern from "../../assets/web_bg.jpg";


const Calendar = () => {
  return (
    <>

      <Navbar />
      <section
        className="md:p-1 p-5"
        style={{ backgroundImage: `url(${BackgroundPattern})` }}
      >
        <div className="text-center">
          <h1 className="flex justify-center md:text-6xl text-5xl p-6 font-bold">
            Calendar
          </h1>
          <h1 className="text-lg font-semibold">
            Temukan event sepeda yg akan datang dan rencanakan musim bersepeda
            anda.
          </h1>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 justify-items-center text-center md:m-10 lg:mx-40 md:gap-20 gap-6">
          <div className="overflow-scroll md:overflow-auto bg-gray-200 rounded-xl md:aspect-auto w-full h-[500px] md:max-h-[1000px] md:h-auto px-6 md:col-span-2 ">
            <h2 className="pt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
              Events
            </h2>
            <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
              {/* <h1 className="bg-amber-200">Search</h1> */}
              <CalendarList />
            </div>
          </div>
          <div className="bg-gray-300 rounded-xl p-3 md:h-[400px] lg:h-[380px]">
            <RegisterForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Calendar;

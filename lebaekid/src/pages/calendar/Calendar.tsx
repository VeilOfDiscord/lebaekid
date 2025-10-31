import CalendarList from "../../components/calendar/CalendarList";
import RegisterForm from "../../components/calendar/RegisterForm";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import BackgroundPattern from "../../assets/web_bg.jpg";

const Calendar = () => {
  return (
    <>
      <Navbar />
      <section className="p-4" style={{ backgroundImage: `url(${BackgroundPattern})` }}>
        <h1 className="flex justify-center text-center md:text-6xl text-5xl p-6 font-bold">
          Calendar
        </h1>

        <div className="flex flex-col md:grid md:grid-cols-3 justify-items-center text-center m-10 lg:mx-40  gap-6">
          <div className="bg-gray-200 rounded-xl aspect-square md:aspect-auto w-full px-6 md:col-span-2">
            <h2 className="pt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
            Events
          </h2>
            <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
              <CalendarList />
            </div>
          </div>
          <div className="bg-gray-300 rounded-xl p-3">
            <RegisterForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Calendar;

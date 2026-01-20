
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import About from "./pages/about/About";
import SesukaAle from "./pages/sesukaale/SesukaAle";
import BeraniNanjak23 from "./pages/events/BeraniNanjak23";
import BeraniNanjak24 from "./pages/events/BeraniNanjak24";
import BeraniNanjak25 from "./pages/events/BeraniNanjak25";
import UBeraniNanjak25 from "./pages/events/UBeraniNanjak25";
import UBeraniNanjak26 from "./pages/events/UBeraniNanjak26";
import PhotoGallery from "./pages/photoGallery/PhotoGallery";
import Sponsor from "./pages/sponsor/Sponsor";
import Shop from "./pages/shop/Shop";
import Test from "./pages/test/Test";
import Calendar from "./pages/calendar/Calendar";
import OngoingVote from "./pages/events/OngoingVote";
import Wiki from "./pages/wiki/Wiki";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/SesukaAle" element={<SesukaAle />} />
        <Route path="/events/berani-nanjak-23" element={<BeraniNanjak23 />} />
        <Route path="/events/berani-nanjak-24" element={<BeraniNanjak24 />} />
        <Route path="/events/berani-nanjak-25" element={<BeraniNanjak25 />} />
        <Route path="/events/u-berani-nanjak-25" element={<UBeraniNanjak25 />} />
        <Route path="/events/u-berani-nanjak-26" element={<UBeraniNanjak26 />} />
        <Route path="/events/u-berani-nanjak-26/ongoing-vote" element={<OngoingVote />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/sponsor" element={<Sponsor/>}/>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/wiki" element={<Wiki/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

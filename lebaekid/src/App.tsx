
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import About from "./pages/about/About";
import SesukaAle from "./pages/sesukaale/SesukaAle";
import BeraniNanjak from "./pages/events/BeraniNanjak";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/SesukaAle" element={<SesukaAle />} />
        <Route path="/events/berani-nanjak" element={<BeraniNanjak />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

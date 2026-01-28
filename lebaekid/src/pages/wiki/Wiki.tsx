import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { fetchRange } from "../../util";
import React from "react";

const Wiki = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [wikiSheet, setwikiSheet] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    city: "",
    category: "",
  });
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchRange("A1:Z1000", "PesertaEvents", 1);
      setwikiSheet(result);
    };
    loadData();
  }, []);
  console.log(wikiSheet);

  const uniqueCities = [...new Set(wikiSheet.map((p) => p.Kota))].filter(
    Boolean,
  );
  const uniqueCategories = [
    ...new Set(wikiSheet.map((p) => p.Kategori)),
  ].filter(Boolean);

  const filteredParticipants = wikiSheet.filter((p) => {
    const matchesCity =
      filters.city === "" ||
      p.Kota.toLowerCase().includes(filters.city.toLowerCase());
    const matchesCategory =
      filters.category === "" ||
      p.Kategori.toLowerCase().includes(filters.category.toLowerCase());

    return matchesCity && matchesCategory;
  });

  const handleFilterClick = (filterType: string, value: string) => {
    setActiveFilter(`${filterType}-${value}`);

    if (filterType === "city") {
      setFilters({ ...filters, city: value });
    } else if (filterType === "category") {
      setFilters({ ...filters, category: value });
    }
  };

  const handleReset = () => {
    setFilters({ city: "", category: "" });
    setActiveFilter("all");
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-5">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="md:hidden fixed top-20 left-4 z-50 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-md"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* Sidebar */}
        <div
          id="navbar-default"
          className={`${isMenuOpen ? "block" : "hidden"} md:block fixed md:float-left top-0 left-0 z-40 flex h-screen w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5 md:sticky md:top-0`}
        >
          <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700 pt-40">
            <button
              onClick={handleReset}
              className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg text-start ${
                activeFilter === "all"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              All
            </button>

            {/* Cities filter */}
            <div className="mt-4">
              <h3 className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase">
                Cities
              </h3>
              {uniqueCities.map((city) => (
                <button
                  key={city}
                  onClick={() => handleFilterClick("city", city)}
                  className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg text-start ${
                    activeFilter === `city-${city}`
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Categories filter */}
            <div className="mt-4">
              <h3 className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase">
                Categories
              </h3>
              {uniqueCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterClick("category", category)}
                  className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg text-start ${
                    activeFilter === `category-${category}`
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Content */}
        <div className="col-span-4 ml-[2rem] md:ml-0 w-full">
          <h1 className="font-bold text-4xl my-5 py-5">
            Petarung Berani Nanjak
          </h1>
          {filteredParticipants.map((s) => (
            <div className="my-5">
              <hr className="w-[95%] py-5" />
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                  <img
                    src={s.Profile}
                    alt="Foto Peserta"
                    className="md:w-[300px] h-auto justify-end pb-5"
                  />
                </div>
                <div className="col-span-3">
                  <h1 className="font-bold text-4xl pb-3">{s.Nama}</h1>
                  <h1>
                    <span className="font-semibold">Domisili:</span>{" "}
                    {s.Domisili}
                  </h1>
                  <h1>
                    <span className="font-semibold">Komunitas:</span>{" "}
                    {s.Komunitas}
                  </h1>
                  <br />
                  <h1>
                    <ul>
                      <li>
                        <span className="font-semibold">Instagram: </span>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://www.instagram.com/${s.IG}/`}
                        >
                          @{s.IG}
                        </a>
                      </li>
                      <li>
                        <span className="font-semibold">Strava: </span>
                        <a target="_blank" rel="noopener noreferrer">
                          {s.Strava}
                        </a>
                      </li>
                    </ul>
                  </h1>
                  <h1>
                    <span className="font-semibold py-4">
                      Brand/Sponsor/Endorser:
                    </span>
                    {s.Sponsor}
                  </h1>
                </div>
              </div>

              <br />
              <div className="">
                <h1 className="font-bold text-2xl pb-2">
                  [{s.Cap}] -- {s.Kota} {s.Kategori}
                </h1>
                <h1>
                  <span className="font-semibold py-4">
                    Rekam Jejak Berani Nanjak:
                  </span>{" "}
                  <br />
                  {s.HistoryBN}
                </h1>
                <br />

                <h1>
                  <span className="font-semibold py-4">
                    Rekam Jejak Pertarungan:
                  </span>
                  <br />
                  {s.H2022 != "" && (
                    <h1 className="font-semibold">
                      2022: <span className="font-normal">{s.H2022}</span>
                    </h1>
                  )}
                  {s.H2023 != "" && (
                    <h1 className="font-semibold">
                      2023: <span className="font-normal">{s.H2023}</span>
                    </h1>
                  )}
                  {s.H2024 != "" && (
                    <h1 className="font-semibold">
                      2024: <span className="font-normal">{s.H2024}</span>
                    </h1>
                  )}
                  {s.H2025 != "" && (
                    <h1 className="font-semibold">
                      2025: <span className="font-normal">{s.H2025}</span>
                    </h1>
                  )}
                  {s.H2026 != "" && (
                    <h1 className="font-semibold py-4">
                      2026: <span className="font-normal">{s.H2026}</span>
                    </h1>
                  )}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Wiki;

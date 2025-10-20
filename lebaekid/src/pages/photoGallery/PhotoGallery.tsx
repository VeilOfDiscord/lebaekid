import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import React, { useState } from "react";
import MasonryGallery from "../../components/gallery/MasonryGallery";
import { generateLinks } from "../../util";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

const PhotoGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("2024");

  const Images23 = generateLinks("2023/BN2023-", 30);
  const Images24 = generateLinks("2024/BN2024-", 30);
  const Images25 = generateLinks("2025/Supported/BN2025-", 10);
  const ImagesU25 = generateLinks("2025/Unsupported/BN2025-", 10);

  const tabs: Tab[] = [
    {
      id: "2023",
      label: "2023",
      content: (
        <MasonryGallery
          images={Images23}
          divCSS={"columns-2 lg:columns-4"}
          imgCSS={"rounded-lg"}
        />
      ),
    },
    {
      id: "2024",
      label: "2024",
      content: (
        <MasonryGallery
          images={Images24}
          divCSS={"columns-2 lg:columns-4"}
          imgCSS={"rounded-lg"}
        />
      ),
    },
    {
      id: "2025",
      label: "2025",
      content: (
        <MasonryGallery
          images={Images25}
          divCSS={"columns-2 lg:columns-4"}
          imgCSS={"rounded-lg"}
        />
      ),
    },
    {
      id: "U2025",
      label: "U2025",
      content: (
        <MasonryGallery images={ImagesU25} divCSS={"columns-2 lg:columns-4"} imgCSS={"rounded-lg"} />
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <h1 className="grid justify-center text-6xl md:py-6 py-4 font-bold">
        Photo Gallery
      </h1>
      <div className="grid justify-center md:px-15 px-8">
        <ul
          className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow-sm sm:flex my-5"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="w-full focus-within:z-10">
            <button
              className={`text-xl inline-block w-full p-4 border-r border-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none focus:text-white hover:text-white hover:bg-gray-800 rounded-s-lg ${
                activeTab === "2023" ? "bg-gray-800 text-white" : "bg-gray-700"
              }`}
              onClick={() => setActiveTab("2023")}
            >
              2023
            </button>
          </li>
          <li className="w-full focus-within:z-10">
            <button
              className={`text-xl inline-block w-full p-4 border-r border-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none focus:text-white hover:text-white hover:bg-gray-800 ${
                activeTab === "2024" ? "bg-gray-800 text-white" : "bg-gray-700"
              }`}
              onClick={() => setActiveTab("2024")}
            >
              2024
            </button>
          </li>
          <li className="w-full focus-within:z-10">
            <button
              className={`text-xl inline-block w-full p-4 border-r border-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none focus:text-white hover:text-white hover:bg-gray-800 ${
                activeTab === "2025" ? "bg-gray-800 text-white" : "bg-gray-700"
              }`}
              onClick={() => setActiveTab("2025")}
            >
              2025
            </button>
          </li>{" "}
          <li className="w-full focus-within:z-10">
            <button
              className={`text-xl inline-block w-full p-4 border-r border-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none focus:text-white hover:text-white hover:bg-gray-800 rounded-e-lg ${
                activeTab === "U2025" ? "bg-gray-800 text-white" : "bg-gray-700"
              }`}
              onClick={() => setActiveTab("U2025")}
            >
              2025
            </button>
          </li>
        </ul>
      </div>

      <div className="grid justify-center p-8">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
      <Footer />
    </>
  );
};

export default PhotoGallery;

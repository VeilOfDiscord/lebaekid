import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import ChevronLeft from "../../assets/chevron-left.svg";
import ChevronRight from "../../assets/chevron-right.svg";

interface CarouselProps {
  images: string[];
  autoslide: boolean;
  autoslideInterval: number;
  data: any[];
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoslide,
  autoslideInterval,
  data,
}) => {
  const [curr, setCurr] = useState(0);
  const [clickedImg, setClickedImg] = useState<string | null>(null);
  const [itemsPerScreen, setItemsPerScreen] = useState(3);

  useEffect(() => {
    const updateItemsPerScreen = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerScreen(2); // Mobile: 2 items
      } else if (width < 768) {
        setItemsPerScreen(3); // Small tablets: 3 items
      } else if (width < 1024) {
        setItemsPerScreen(4); // Tablets: 4 items
      } else {
        setItemsPerScreen(5); // Desktop: 5 items
      }
    };

    updateItemsPerScreen();
    window.addEventListener("resize", updateItemsPerScreen);
    return () => window.removeEventListener("resize", updateItemsPerScreen);
  }, []);

  const handleClick = (img: string) => {
    setClickedImg(img);
  };

  const prev = () =>
    setCurr((curr) =>
      curr === 0 ? Math.ceil(images.length / itemsPerScreen) - 1 : curr - 1
    );
  const next = () =>
    setCurr((curr) =>
      curr === Math.ceil(images.length / itemsPerScreen) - 1 ? 0 : curr + 1
    );

  useEffect(() => {
    if (!autoslide) return;
    const slideInterval = setInterval(next, autoslideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative m-2 sm:m-3 md:m-4 lg:m-5 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[645px] lg:max-w-[1200px] xl:max-w-[1600px] pt-4 sm:pt-6">
      <div
        className="flex transition-transform ease-out duration-500 gap-1 sm:gap-2"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((s, index) => (
          <div key={index} className="flex-shrink-0 flex flex-col">
            <img
              src={s}
              onClick={() => handleClick(s)}
              className="cursor-pointer w-[165px] h-auto sm:w-[200px] md:w-[215px] lg:w-[312px] sm:h-[267px] md:h-auto object-cover"
            />
            <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-1 sm:mt-2">
              <p className="text-justified mt-1 sm:mt-2 w-[160px] sm:w-[200px] md:w-[215px] lg:w-[240px] xl:w-[300px] truncate">
                {data[index]?.Nama || "N/A"}{" "}{data[index]?.Peserta || "N/A"}
              </p>
              <div className="flex justify-center gap-3 sm:gap-5 lg:gap-7">
                <p className="text-sm sm:text-base md:text-lg">
                  <span className="font-bold">P1:</span>
                  {data[index]?.P1 || "0"}
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  <span className="font-bold">P2:</span>
                  {data[index]?.P2 || "0"}
                </p>
              </div>
              <p className="text-justified w-[160px] sm:w-[200px] md:w-[215px] lg:w-[240px] xl:w-[300px] text-sm sm:text-base md:text-lg line-clamp-2">
                Remarks: {data[index]?.Remark || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {clickedImg && (
        <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
      )}
      <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4 pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto p-1 sm:p-1.5 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <img src={ChevronLeft} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto p-1 sm:p-1.5 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <img src={ChevronRight} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
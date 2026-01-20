import { useEffect, useState } from "react";
import ChevronLeft from "../../assets/chevron-left.svg";
import ChevronRight from "../../assets/chevron-right.svg";

interface CarouselProps {
  images: string[];
  autoslide: boolean;
  autoslideInterval: number;
  link: string[];
}

const BannerCarousel: React.FC<CarouselProps> = ({
  images,
  autoslide,
  autoslideInterval,
  link,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoslide) return;
    const slideInterval = setInterval(next, autoslideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative mt-4 sm:mt-6 lg:mt-10 w-full max-w-[100vw] sm:max-w-[90vw] md:max-w-[600px] lg:max-w-[1200px] xl:max-w-[1540px] h-auto pt-4 sm:pt-6">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((s, index) => (
          <div key={index} className="flex-shrink-0 flex justify-center w-full">
            <a href={link[index]} target="_blank" rel="noopener noreferrer">
              <img
                src={s}
                className="cursor-pointer w-full h-auto max-h-[120px] sm:max-h-[110px] md:max-h-[180px] lg:max-h-[1100px] object-contain rounded-lg sm:rounded-xl"
              />
            </a>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4 pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto p-1 sm:p-1.5 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <img
            src={ChevronLeft}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto p-1 sm:p-1.5 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <img
            src={ChevronRight}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          />
        </button>
      </div>
      <div className="absolute lg:bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i: number) => (
            <div
              className={`transition-all w-2 h-2 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-20"
              } `}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BannerCarousel;

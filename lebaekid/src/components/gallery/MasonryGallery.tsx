import React, { useState } from "react";
import Modal from "../modal/Modal";

interface GalleryProps {
  images: string[];
  divCSS: string;
  imgCSS: string;
}

const MasonryGallery: React.FC<GalleryProps> = ({ images, divCSS, imgCSS }) => {
  const [clickedImg, setClickedImg] = useState<string | null>(null);

  const handleClick = (img: string) => {
    setClickedImg(img);
  };

  return (
    <section>
      <div className={`gap-4 md:gap-2 p-3 ${divCSS}`}>
        {images.map((src, index) => (
          <div key={index} className="w-full mb-4 break-inside-avoid">
            <img
              className={`h-auto max-w-full ${imgCSS}`}
              src={src}
              alt={`Gallery image ${index + 1}`}
              onClick={() => handleClick(src)}
            />
          </div>
        ))}
        {clickedImg && (
          <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
        )}
      </div>
    </section>
  );
};

export default MasonryGallery;

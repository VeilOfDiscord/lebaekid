import React from "react";

interface GalleryProps {
  images: string[];
  divCSS: string;
  imgCSS: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, divCSS, imgCSS}) => {
  return (
    <section>
      <div className={`gap-4 md:gap-4 p-3 ${divCSS}`}>
        {images.map((src, index) => (
          <div key={index} className="h-full w-full grid justify-center">
            <img
              className={`h-auto max-w-full object-contain ${imgCSS}`}
              src={src}
              alt={`Gallery image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

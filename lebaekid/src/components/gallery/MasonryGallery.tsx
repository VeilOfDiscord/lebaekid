import React from "react";

interface GalleryProps {
  images: string[];
  divCSS: string;
  imgCSS: string;
}

const MasonryGallery: React.FC<GalleryProps> = ({ images, divCSS, imgCSS}) => {
  return (
    <section>
      <div className={`gap-4 md:gap-6 p-3 ${divCSS}`}>
        {images.map((src, index) => (
          <div key={index} className="w-full mb-4 break-inside-avoid">
            <img
              className={`h-auto max-w-full ${imgCSS}`}
              src={src}
              alt={`Gallery image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MasonryGallery;

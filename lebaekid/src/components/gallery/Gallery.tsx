import React from "react";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-3">
        {images.map((src, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
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
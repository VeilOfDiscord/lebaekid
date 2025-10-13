import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ameImage from "../../assets/ame.png";

const BeraniNanjak = () => {
  const galleryImages = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  ];

  return (
    <>
      <Navbar />
      <h1 className="grid justify-center text-6xl py-6 font-bold">
        Berani Nanjak 2023
      </h1>
      <div className="grid justify-center pt-5 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-5">
          {galleryImages.map((src, index) => (
            <div key={index}>
              <img
                className="h-auto w-full max-w-full rounded-lg"
                src={src}
                alt={`Gallery image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="grid justify-center grid-cols-2 py-8">
          <div className="grid justify-center">Information</div>
          <div className="grid justify-center">
            <img
              className="h-auto w-40 max-w-2xl sticky"
              src={ameImage}
              alt="Ame"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BeraniNanjak;
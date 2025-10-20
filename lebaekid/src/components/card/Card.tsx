
interface CardProps {
  pages: string[];
  thumbnail: string[];
  title: string[];
}

const Card: React.FC<CardProps> = ({ pages, title }) => {
  return (
    <section>
      <div className="flex justify-items-center justify-center gap-5 p-7 flex-row">
        {pages.map((src, index) => (
          <a
            key={index}
            href={src}
            className="flex flex-col items-center bg-gray-800 border border-gray-200 rounded-lg shadow-sm lg:flex-row lg:max-w-xl hover:bg-gray-700 w-30 lg:w-auto"
          >
            {/* <img
              className="object-cover rounded-t-lg h-25 w-full lg:h-50 lg:rounded-none lg:rounded-s-lg"
              src={thumbnail[index]}
              alt=""
            /> */}
            <div>
              <h1 className="mb-2 text-lg xl:text-2xl font-bold tracking-tight text-white p-4 text-center align-middle">
                {title[index]}
              </h1>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Card;
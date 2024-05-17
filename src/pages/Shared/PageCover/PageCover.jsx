const PageCover = ({ img, isHead }) => {
  return (
    <section style={{ backgroundImage: `url(${img})` }}>
      <div
        className={`container md:px-0 px-2 mx-auto ${
          isHead ? "pb-12 md:pb-24 md:pt-44 pt-28" : "py-12 md:py-24"
        }`}
      >
        <div className="py-4 md:py-16 md:px-20 px-5 bg-black bg-opacity-40 text-white font-cinzel space-y-1 md:space-y-2 text-center">
          <h2 className={`text-2xl uppercase font-bold md:text-4xl`}>
            OUR MENU
          </h2>
          <p className="text-lg font-semibold md:text-xl">
            Would you like to try a dish?
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageCover;

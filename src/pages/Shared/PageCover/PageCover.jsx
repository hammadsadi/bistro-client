import { Parallax } from "react-parallax";
const PageCover = ({ img, isHead, heading, disc }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 30 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <section>
        <div
          className={`container md:px-0 px-2 mx-auto ${
            isHead ? "pb-12 md:pb-24 md:pt-44 pt-28" : "py-12 md:py-24"
          }`}
        >
          <div className="py-4 md:py-16 md:px-20 px-5 bg-black bg-opacity-40 text-white font-cinzel space-y-1 md:space-y-2 text-center">
            <h2
              className={` uppercase  ${
                isHead
                  ? "md:text-4xl text-2xl font-bold"
                  : "text-2xl font-cinzel font-semibold  md:text-3xl"
              } `}
            >
              {heading}
            </h2>
            <p
              className={` font-semibold  ${
                isHead
                  ? "text-lg md:text-xl"
                  : "text-base capitalize font-inter"
              }`}
            >
              {disc}
            </p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default PageCover;

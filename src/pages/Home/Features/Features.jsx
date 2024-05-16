import featuresImg from "../../../assets/home/featured.jpg";
import "./Features.css";
const Features = () => {
  return (
    <section className="bg-fixed features-item">
      <div className="container md:px-0 px-2 mx-auto py-12 md:py-24 -z-50 text-white">
        <div className="text-center max-w-sm mx-auto mb-6 md:mb-11">
          <h5 className=" text-lg md:text-xl italic text-color-primary font-normal pb-2 md:pb-3 capitalize">
            ---Check it out---
          </h5>
          <h2 className="text-white font-normal text-2xl md:text-4xl border-y-4 md:py-4 py-3 uppercase">
            FROM OUR MENU
          </h2>
        </div>
        <div className="flex md:flex-row flex-col md:gap-16 gap-8 items-center">
          <div className="">
            <img src={featuresImg} alt="" className="h-full" />
          </div>
          <div>
            <h5 className="text-xl md:text-2xl font-inter font-normal">
              March 20, 2023
            </h5>
            <h5 className="text-xl md:text-2xl font-inter font-normal">
              WHERE CAN I GET SOME?
            </h5>
            <p className="md:text-xl text-lg font-inter font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="md:px-7 py-2 px-3 md:py-4 bg-transparent uppercase text-base text-white hover:text-color-primary transition duration-300 mt-5 rounded-lg border-b-2 border-white md:text-lg hover:bg-white hover:border-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

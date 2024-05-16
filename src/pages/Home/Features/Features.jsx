import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuresImg from "../../../assets/home/featured.jpg";
const Features = () => {
  return (
    <section>
      <div className="container md:px-0 px-2 mx-auto pt-12 md:pt-24">
        <div>
          <SectionTitle subtitle={"Check it out"} heading={"FROM OUR MENU"} />
        </div>
        <div>
          <div className="md:flex md:gap-16">
            <img src={featuresImg} alt="" />
          </div>
          <div>
            <h5>March 20, 2023</h5>
            <h5>WHERE CAN I GET SOME?</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="md:px-7 py-2 px-3 md:py-4 bg-[#E8E8E8] uppercase text-base text-[#BB8506] rounded-lg border-b-2 border-[#BB8506] md:text-lg hover:bg-[#1F2937] hover:border-[#1F2937]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import miniBn from "../../../assets/home/chef-service.jpg";
const MiniBanner = () => {
  return (
    <section>
      <div className="container md:px-0 px-2 mx-auto pt-12 md:pt-24">
        <div
          style={{ backgroundImage: `url(${miniBn})` }}
          className="py-4 md:py-16 md:px-20 px-5"
        >
          <div
            className={`py-5 md:py-24 md:px-28 px-6 bg-white text-center space-y-2`}
          >
            <h2 className="text-2xl font-cinzel font-normal  md:text-4xl">
              Bistro Boss
            </h2>
            <p className="font-inter font-normal text-base text-[#151515]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniBanner;

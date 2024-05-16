import MiniBanner from "../../Shared/MiniBanner/MiniBanner";
import Banner from "../Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* Category Slider */}
      <Category />
      {/* Mini Banner */}
      <MiniBanner
        bannerDesc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
        bannerTitle={"Bistro Boss"}
      />
      {/* Popular Menu */}
      <PopularMenu />
    </div>
  );
};

export default Home;
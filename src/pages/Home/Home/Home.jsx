import MiniBanner from "../../Shared/MiniBanner/MiniBanner";
import Banner from "../Banner";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* Category Slider */}
      <Category />
      {/* Mini Banner */}
      <MiniBanner />
    </div>
  );
};

export default Home;

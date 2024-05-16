import MiniBanner from "../../Shared/MiniBanner/MiniBanner";
import Banner from "../Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ContactBanner from "../ContactBanner/ContactBanner";
import Features from "../Features/Features";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

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
      {/* Contact Banner */}
      <ContactBanner />

      {/* Chef Recommends */}
      <ChefRecommends />

      {/* Features Section */}
      <Features />
      {/* Testimonial */}
      <Testimonial />
    </div>
  );
};

export default Home;

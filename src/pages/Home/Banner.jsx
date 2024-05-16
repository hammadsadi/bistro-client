import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bn1 from "../../assets/banner/01.jpg";
import bn2 from "../../assets/banner/02.jpg";
import bn3 from "../../assets/banner/03.png";
import bn4 from "../../assets/banner/04.jpg";
import bn5 from "../../assets/banner/05.png";
import bn6 from "../../assets/banner/06.png";
const Banner = () => {
  return (
    <div className="">
      {" "}
      <Carousel>
        <div className="w-full">
          <img src={bn1} className="" />
        </div>
        <div className="w-full">
          <img src={bn2} className="" />
        </div>
        <div className="w-full">
          <img src={bn3} className="" />
        </div>
        <div>
          {" "}
          <img src={bn4} className="" />
        </div>
        <div className="w-full ">
          <img src={bn5} className="" />
        </div>
        <div className="w-full">
          <img src={bn6} className="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

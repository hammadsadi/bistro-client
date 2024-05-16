import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Images
import slide1 from "../../../assets/slider/slide1.jpg";
import slide2 from "../../../assets/slider/slide2.jpg";
import slide3 from "../../../assets/slider/slide3.jpg";
import slide4 from "../../../assets/slider/slide4.jpg";
import slide5 from "../../../assets/slider/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Category = () => {
  return (
    <section className="">
      <div className="container md:px-0 px-2 mx-auto pt-12 md:pt-24">
        <div>
          <SectionTitle
            subtitle={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
          />
        </div>
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={slide1} alt="" className="w-full" />
              <h2 className="-mt-12 text-center text-base text-white font-normal md:text-3xl">
                Salads
              </h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide2} alt="" className="w-full" />
              <h2 className="-mt-12 text-center text-base text-white font-normal md:text-3xl">
                Soups
              </h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide3} alt="" className="w-full" />
              <h2 className="-mt-12 text-center text-base text-white font-normal md:text-3xl">
                pizzas
              </h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide4} alt="" className="w-full" />
              <h2 className="-mt-12 text-center text-base text-white font-normal md:text-3xl">
                desserts
              </h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide5} alt="" className="w-full" />
              <h2 className="-mt-12 text-center text-base text-white font-normal md:text-3xl">
                Salads
              </h2>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Category;

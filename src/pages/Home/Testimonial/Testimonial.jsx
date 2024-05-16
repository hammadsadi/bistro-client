import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  // Get Review
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <section>
      <div className="container md:px-0 px-2 mx-auto pt-12 md:pt-24">
        <div>
          <SectionTitle
            subtitle={"What Our Clients Say"}
            heading={"TESTIMONIALS"}
          />
        </div>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex justify-center items-center md:mb-10 mb-5">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaQuoteLeft className="lg:text-4xl md:text-3xl text-xl md:mb-6 mb-3" />
                <p className="text-center font-inter text-base text-[#444] md:text-lg mb-2">
                  {review.details}
                </p>
                <h3 className="text-xl text-color-primary font-medium md:text-3xl">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

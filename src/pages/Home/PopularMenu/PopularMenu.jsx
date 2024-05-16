import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularMenuItem from "../../Shared/PopularMenuItem/PopularMenuItem";

const PopularMenu = () => {
  const [popularMenu, setPopularMenu] = useState([]);

  // Load Menu
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((menu) => menu.category === "popular");
        setPopularMenu(popularItem);
      });
  }, []);
  return (
    <div>
      <section>
        <div className="container md:px-0 px-2 mx-auto pt-12 md:pt-24">
          <div>
            <SectionTitle subtitle={"Check it out"} heading={"FROM OUR MENU"} />
          </div>
          {/* Popular Menu Item*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {popularMenu?.map((item) => (
              <PopularMenuItem key={item._id} item={item} />
            ))}
          </div>
          <div className="text-center mt-5 md:mt-8">
            <button className="py-3 px-4 md:px-7 md:py-5 bg-slate-400 text-lg md:text-xl text-[#1F2937] rounded-b-lg border-b-2 border-[#1F2937] bg-transparent">
              View Full Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;

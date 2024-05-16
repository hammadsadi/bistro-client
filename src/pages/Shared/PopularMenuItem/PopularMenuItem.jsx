const PopularMenuItem = ({ item }) => {
  return (
    <div className="flex items-center md:gap7 gap-5 flex-wrap justify-center md:justify-start md:flex-nowrap">
      <img
        src={item?.image}
        alt=""
        className="w-[120px] h-[120px] object-cover"
        style={{ borderRadius: "0px 200px 200px 200px" }}
      />
      <div>
        <div className="flex justify-between">
          <h2 className="text-[#151515] text-lg md:text-xl font-cinzel">
            {item?.name}------------------
          </h2>
          <p className="text-lg md:text-xl font-inter text-color-primary">
            ${item?.price}
          </p>
        </div>
        <p className="text-[#737373] font-inter text-base font-normal mt-1">
          {item?.recipe}
        </p>
      </div>
    </div>
  );
};

export default PopularMenuItem;

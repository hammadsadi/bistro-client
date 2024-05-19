const RecommendsItem = ({ isPrice, item }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div>
        <img
          src={
            item?.image
              ? item.image
              : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
          alt="Shoes"
          className="relative"
        />
        {isPrice && (
          <p className="absolute right-5 top-4 py-1 px-3 bg-gray-900 text-white">
            ${item?.price}
          </p>
        )}
      </div>
      <div className="card-body bg-blue-50 text-center text-[#151515] ">
        <h2 className="font-inter text-lg font-semibold md:text-2xl">
          {item?.name ? item.name : "Not Found"}
        </h2>
        <p className="text-base">{item?.recipe ? item.recipe : "Not Found"}</p>
        <div className="card-actions justify-center">
          <button className="md:px-7 py-2 px-3 md:py-4 bg-[#E8E8E8] uppercase text-base text-[#BB8506] rounded-lg border-b-2 border-[#BB8506] md:text-lg hover:bg-[#1F2937] hover:border-[#1F2937]">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendsItem;

const RecommendsItem = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
      />
      <div className="card-body bg-blue-50 text-center text-[#151515] ">
        <h2 className="font-inter text-lg font-semibold md:text-2xl">
          Caeser Salad
        </h2>
        <p className="text-base">
          Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </p>
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

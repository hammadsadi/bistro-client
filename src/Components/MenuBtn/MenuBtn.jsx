import { Link } from "react-router-dom";

const MenuBtn = ({ btnTitle, btnLink }) => {
  return (
    <div className="text-center mt-5 md:mt-8">
      <Link to={btnLink}>
        <button className="py-3 px-4 md:px-7 md:py-5 bg-slate-400 text-lg md:text-xl text-[#1F2937] rounded-b-lg border-b-2 border-[#1F2937] bg-transparent">
          {btnTitle}
        </button>
      </Link>
    </div>
  );
};

export default MenuBtn;

import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const Nav = () => {
  const navInfo = (
    <>
      <li>
        <NavLink to="/" className="font-bold text-lg uppercase">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact-us" className="font-bold text-lg uppercase">
          contact us
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="font-bold text-lg uppercase">
          dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-menus" className="font-bold text-lg uppercase">
          our menus
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-shop" className="font-bold text-lg uppercase">
          our shop
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-black text-white fixed z-10 bg-opacity-25 max-w-screen-2xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navInfo}
            </ul>
          </div>
          <Link>
            <h2 className="font-cinzel md:text-xl lg:text-3xl font-black">
              BISTRO BOSS
            </h2>
            <span className="font-cinzel md:text-lg lg:text-2xl font-bold">
              Restaurant
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navInfo}</ul>
        </div>
        <div className="navbar-end space-x-5">
          <div>
            <FaCartShopping className="text-xl" />
          </div>
          <div className="flex items-center gap-3">
            <button className="font-bold text-lg uppercase">Logout</button>
            <FaRegUserCircle className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

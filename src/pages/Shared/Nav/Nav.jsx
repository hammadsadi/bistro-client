import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import useGetAuth from "../../../hooks/useGetAuth";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

const Nav = () => {
  const [cart] = useCart();
  console.log(cart);
  const { user, userLogout } = useGetAuth();
  const handleLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire("Logout Successful");
      })
      .catch();
  };
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
        <NavLink to="/our-shop/salad" className="font-bold text-lg uppercase">
          our shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/secret" className="font-bold text-lg uppercase">
          Secret
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
            <h2 className="font-cinzel text-sm md:text-xl lg:text-3xl font-black">
              BISTRO BOSS
            </h2>
            <span className="font-cinzel md:text-lg lg:text-2xl font-bold hidden md:flex">
              Restaurant
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navInfo}</ul>
        </div>
        <div className="navbar-end space-x-5">
          <div>
            <Link to="/dashboard/shop-cart" className="btn">
              <FaCartShopping className="text-base md:text-xl" />
              <div className="badge badge-secondary">+{cart.length}</div>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <button
                  className="font-bold text-sm lg:text-lg uppercase"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                {/* <h2>{user?.displayName}</h2> */}
              </>
            ) : (
              <Link to="/login">
                <button className="font-bold text-sm lg:text-lg uppercase">
                  Login
                </button>
              </Link>
            )}
            {user?.photoURL ? (
              <img src={user?.photoURL} alt="" className="w-6 rounded-full" />
            ) : (
              <FaRegUserCircle className="text-base md:text-2xl" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

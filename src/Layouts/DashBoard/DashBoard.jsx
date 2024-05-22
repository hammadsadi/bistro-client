import { NavLink, Outlet } from "react-router-dom";
const DashBoard = () => {
  return (
    <div className="flex">
      <div className="bg-color-primary text-white flex py-3 px-4 h-screen">
        <div>
          <ul className="menu">
            <li>
              <NavLink to="/dashboard" end>
                {" "}
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="reservation"> Reservation</NavLink>
            </li>
            <li>
              <NavLink to="shop-cart"> My Cart</NavLink>
            </li>
            <li>
              <NavLink to="payment-history"> Payment History</NavLink>
            </li>
            <li>
              <NavLink to="/payment-history"> Add Review</NavLink>
            </li>
            <li>
              <NavLink to="/payment-history"> My Booking</NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="/payment-history"> Menu</NavLink>
            </li>
            <li>
              <NavLink to="/payment-history"> Shop</NavLink>
            </li>
            <li>
              <NavLink to="/payment-history"> Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-grow bg-slate-200 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;

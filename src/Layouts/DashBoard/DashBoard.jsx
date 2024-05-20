import { NavLink, Outlet } from "react-router-dom";
const DashBoard = () => {
  return (
    <div>
      <div className="bg-color-primary text-white">
        <div>
          <ul>
            <li>
              <NavLink> User Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;

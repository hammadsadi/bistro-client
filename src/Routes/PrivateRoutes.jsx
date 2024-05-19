import { Navigate, useLocation } from "react-router-dom";
import useGetAuth from "../hooks/useGetAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useGetAuth();
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location.pathname }} replace />;
};

export default PrivateRoutes;

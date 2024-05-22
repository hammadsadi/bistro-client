import { useNavigate } from "react-router-dom";
import { axiosCommon } from "../../hooks/useAxiosCommon";
import useGetAuth from "../../hooks/useGetAuth";

const SocialLogin = () => {
  const { loginWithGoogle } = useGetAuth();
  const navigate = useNavigate();
  // Handle Google Login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const user = {
          name: res?.user?.displayName,
          email: res?.user?.email,
        };
        axiosCommon.post("/user", user).then((res) => {});
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <button
        className="btn btn-wide bg-gray-700 text-gray-100 hover:text-gray-800"
        onClick={handleGoogleLogin}
      >
        Google Login
      </button>
    </div>
  );
};

export default SocialLogin;

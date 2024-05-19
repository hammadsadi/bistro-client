import { useEffect, useRef, useState } from "react";
import loginBn from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useGetAuth from "../../hooks/useGetAuth";
const Login = () => {
  const { loginUser } = useGetAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from || "/";
  console.log(from);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [desible, setDesible] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // Verify
  const handleCapcha = (e) => {
    if (validateCaptcha(e.target.value)) {
      setDesible(false);
    } else {
      setDesible(true);
    }
  };

  // Handle Login
  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch();
  };
  return (
    <div className="flex md:flex-row flex-col justify-center items-center h-screen">
      <div className="md:w-1/2 w-full">
        <img src={loginBn} alt="" />
      </div>
      <div className="md:w-1/2 w-full">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 ">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          </div>
          <form
            noValidate=""
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-12"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    {" "}
                    Email is required
                  </p>
                )}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    {" "}
                    Password is required
                  </p>
                )}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm">
                    <LoadCanvasTemplate />
                  </label>
                </div>
                <input
                  type="text"
                  name="captcha"
                  placeholder="type the above captcha"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  onBlur={handleCapcha}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <input
                  type="submit"
                  className={`w-full px-8 py-3 font-semibold rounded-md  dark:text-gray-50 ${
                    desible ? "bg-slate-300" : "bg-violet-600"
                  }`}
                  disabled={desible}
                  value={"SignIn"}
                />
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-600">
                Dont have an account yet?
                <Link
                  rel="noopener noreferrer"
                  to="/sign-up"
                  className="hover:underline dark:text-violet-600  "
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

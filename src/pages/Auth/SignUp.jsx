import { Link, useNavigate } from "react-router-dom";
import loginBn from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import useGetAuth from "../../hooks/useGetAuth";
import { axiosCommon } from "../../hooks/useAxiosCommon";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const SignUp = () => {
  const { createUser, updateUserInfo } = useGetAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const userData = {
          name: data.name,
          email: data.email,
        };
        // Create User
        axiosCommon.post("/user", userData).then((res) => {});
        updateUserInfo(data.name, data.photoUrl)
          .then(() => {
            navigate("/");
          })
          .catch((err) => {});
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-center items-center h-screen">
        <div className="md:w-1/2 w-full">
          <img src={loginBn} alt="" />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 ">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
            </div>
            <form
              noValidate=""
              className="space-y-12"
              onSubmit={handleSubmit(handleSubmitForm)}
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                  {errors.name?.type === "required" && (
                    <p role="alert" className="text-red-600">
                      {" "}
                      Name is required
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="photoUrl" className="block mb-2 text-sm">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    id="photoUrl"
                    {...register("photoUrl", { required: true })}
                    placeholder="photoUrl"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                  {errors.photoUrl?.type === "required" && (
                    <p role="alert" className="text-red-600">
                      {" "}
                      photoUrl is required
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
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
                    name="password"
                    {...register("password", {
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                      required: true,
                    })}
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                  {errors.password?.type === "pattern" && (
                    <p role="alert" className="text-red-600">
                      {" "}
                      Use Lower Case, Uppercase, Special Character, Number and
                      Length at Least 8
                    </p>
                  )}
                  {errors.password?.type === "required" && (
                    <p role="alert" className="text-red-600">
                      {" "}
                      All Fields Are Required
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                  >
                    Create Account
                  </button>
                </div>
                <p className="px-6 text-sm text-center dark:text-gray-600">
                  Don't have an account yet?
                  <Link
                    rel="noopener noreferrer"
                    to="/login"
                    className="hover:underline dark:text-violet-600  "
                  >
                    Login
                  </Link>
                  .
                </p>
              </div>
            </form>
            <div className="mx-auto">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

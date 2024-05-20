import useGetAuth from "../../../hooks/useGetAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
const RecommendsItem = ({ isPrice, item }) => {
  const [, refetch] = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useGetAuth();
  const handleCart = (product) => {
    if (user && user.email) {
      const cartItem = {
        productId: product._id,
        userEmail: user?.email,
        name: product.name,
        image: product.image,
        price: product.price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${product.name} Added to Cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are Not Logged In",
        text: "Please Login Your Account",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I want to Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location.pathname } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <div>
        <img
          src={
            item?.image
              ? item.image
              : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
          alt="Shoes"
          className="relative"
        />
        {isPrice && (
          <p className="absolute right-5 top-4 py-1 px-3 bg-gray-900 text-white">
            ${item?.price}
          </p>
        )}
      </div>
      <div className="card-body bg-blue-50 text-center text-[#151515] ">
        <h2 className="font-inter text-lg font-semibold md:text-2xl">
          {item?.name ? item.name : "Not Found"}
        </h2>
        <p className="text-base">{item?.recipe ? item.recipe : "Not Found"}</p>
        <div className="card-actions justify-center">
          <button
            className="md:px-7 py-2 px-3 md:py-4 bg-[#E8E8E8] uppercase text-base text-[#BB8506] rounded-lg border-b-2 border-[#BB8506] md:text-lg hover:bg-[#1F2937] hover:border-[#1F2937]"
            onClick={() => handleCart(item)}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendsItem;

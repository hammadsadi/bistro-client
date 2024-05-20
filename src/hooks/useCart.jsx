import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import useGetAuth from "./useGetAuth";

const useCart = () => {
  const { user } = useGetAuth();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/carts?email=${user?.email}`);
      return data;
    },
  });
  return [cart, refetch];
};

export default useCart;

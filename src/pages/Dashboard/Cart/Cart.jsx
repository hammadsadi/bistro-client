import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((prev, item) => prev + item.price, 0);
  console.log(cart);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Total Order : {cart.length}</h2>
        <h2 className="text-2xl">Total Price : ${totalPrice}</h2>
        <button className="btn bg-color-primary text-white hover:bg-color-primary">
          Pay
        </button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((itm, index) => (
                <tr key={itm._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={itm}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>Zemlak, Daniel and Leannon</td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;

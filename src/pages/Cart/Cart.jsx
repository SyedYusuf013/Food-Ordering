import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="px-4 mt-32 sm:px-6 lg:px-12">
      <div className="cart-items">
        {/* Cart Header */}
        <div className="hidden md:grid md:grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[12px] sm:text-sm">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-[2px] bg-[#e2e2e2] border-none" />

        {/* Cart Items */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_0.5fr] md:grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-sm md:text-[12px] text-black my-[10px] mx-0">
                  <img className="w-12 sm:w-16" src={item.image} alt="" />
                  <p className="truncate">{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              </div>
            );
          }
        })}
      </div>

      {/* Cart Total and Promo Section */}
      <div className="flex flex-wrap-reverse justify-between gap-6 mt-20 lg:flex-nowrap">
        {/* Cart Total */}
        <div className="flex flex-col flex-1 gap-5">
          <h2 className="text-xl font-bold">Cart Total</h2>
          <div>
            <div className="flex justify-between text-[#555] text-sm">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-[10px] mx-0" />
            <div className="flex justify-between text-[#555] text-sm">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 3}</p>
            </div>
            <hr className="my-[10px] mx-0" />
            <div className="flex justify-between text-[#555] text-sm">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 3}
              </b>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="text-white bg-red-500 border-none w-full md:w-[250px] py-3 rounded cursor-pointer"
          >
            PROCESS TO CHECKOUT
          </button>
        </div>

        {/* Promo Code Section */}
        <div className="flex-1">
          <div>
            <p className="text-[#555] text-sm">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-[10px] flex flex-col md:flex-row items-stretch md:items-center bg-[#eaeaea] rounded overflow-hidden">
              <input
                className="flex-1 py-2 pl-3 text-sm bg-transparent border-none outline-none"
                type="text"
                placeholder="Promo code"
              />
              <button className="w-full md:w-[150px] py-3 px-4 bg-black border-none text-white rounded md:rounded-none">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="flex items-start justify-between gap-[50px] mt-[100px]">
      <div className="w-full max-w-[max(30%,_500px)]">
        <p className="text-3xl font-semibold mb-[50px]">Delivery Information</p>
        <div className="flex gap-[10px]">
          <input
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-red-500"
            type="text"
            placeholder="First name"
          />
          <input
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-red-500"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-red-500"
          type="email"
          placeholder="Email address"
        />
        <input
          className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-red-500"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-[10px]">
          <input
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-red-500"
            type="text"
            placeholder="City"
          />
          <input
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-red-500"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-[10px]">
          <input
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-red-500"
            type="text"
            placeholder="Zip code"
          />
          <input
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-red-500"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-red-500"
          type="number"
          placeholder="Phone"
        />
      </div>
      <div className="w-full max-w-[max(40%,_500px)]">
        <div className="flex flex-col flex-1 gap-5">
          <h2 className="text-xl font-bold">Cart Total</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-[10px] mx-0" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 3}</p>
            </div>
            <hr className="my-[10px] mx-0" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 3}
              </b>
            </div>
          </div>
          <button className="text-white bg-red-500 border-none w-[max(18vw,_250px)] py-[12px] px-1 rounded cursor-pointer mt-[30px]">
            PROCESS TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

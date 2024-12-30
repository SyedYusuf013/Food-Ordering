import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="w-[100%] m-auto rounded-2xl animate-fadeIn shadow-md ">
      <div className="relative">
        <img className="w-[100%] rounded-t-2xl" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="w-[35px] absolute bottom-4 right-4 rounded-full cursor-pointer"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="absolute flex items-center bottom-4 right-4 gap-[10px] p-[6px] rounded-full bg-white">
            <img
              className="w-[30px]"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-[30px]"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xl font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-sm">{description}</p>
        <p className="text-xl font-medium text-red-500 mt-[10px]">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

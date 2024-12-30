import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className="text-[#262626] font-semibold">Explore our menu</h1>
      <p className="max-w-[60%] text-[#808080] lg:max-w-[100%] lg:text-sm">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <div className="flex items-center justify-between gap-[30px] text-center my-5 mx-0 overflow-hidden">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
            >
              <img
                className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition duration-200  ${
                  category === item.menu_name
                    ? "border-4 border-solid p-[2px] bg-red-600"
                    : ""
                }`}
                src={item.menu_image}
                alt=""
              />
              <p className="mt-[10px] text-[#747474] text-base sm:text-[1.4vw] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mt-[10px] h-[2px] mb-2 bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;

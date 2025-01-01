import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      {/* Heading */}
      <h1 className="text-[#262626] font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Explore our menu
      </h1>

      {/* Description */}
      <p className="text-[#808080] text-sm sm:text-base md:text-lg lg:text-xl max-w-[80%] sm:max-w-[70%] lg:max-w-[100%]">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>

      {/* Menu Options */}
      <div className="flex items-center justify-between gap-6 my-5 overflow-x-auto sm:gap-8 md:gap-10 lg:gap-12 no-scrollbar">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="flex flex-col items-center"
          >
            <img
              className={`w-[7.5vw] sm:w-[60px] md:w-[70px] lg:w-[80px] min-w-[50px] sm:min-w-[60px] lg:min-w-[80px] cursor-pointer rounded-full transition duration-200 ${
                category === item.menu_name
                  ? "border-4 border-solid p-[2px] bg-red-600"
                  : ""
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p className="mt-2 text-[#747474] text-sm sm:text-base md:text-lg cursor-pointer">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="mt-2 h-[2px] mb-2 bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;

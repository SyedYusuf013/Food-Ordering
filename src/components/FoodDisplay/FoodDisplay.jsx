import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-6 lg:mt-10">
      {/* Heading */}
      <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl font-outfit">
        Top dishes near you
      </h2>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 gap-5 mt-6 sm:gap-6 md:gap-8 lg:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    // Navbar
    <div className="flex items-center justify-between pt-5 pr-0">
      {/* Logo */}
      <Link to="/">
        <img
          className="w-[150px] md:w-[120px] sm:w-20"
          src={assets.logo}
          alt=""
        />
      </Link>
      {/* Navbar Menu */}
      <ul className="flex gap-5 list-none text-[#49557e] lg:gap-5 lg:text-lg md:gap-4 md:text-base sm:hidden lg:inline-flex ">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`pb-[2px] border-b-2 border-solid cursor-pointer ${
            menu === "home" ? "border-[#49557e]" : "border-transparent"
          }`}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`pb-[2px] border-b-2 border-solid cursor-pointer ${
            menu === "menu" ? "border-[#49557e]" : "border-transparent"
          }`}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={`pb-[2px] border-b-2 border-solid cursor-pointer ${
            menu === "mobile-app" ? "border-[#49557e]" : "border-transparent"
          }`}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={`pb-[2px] border-b-2 border-solid cursor-pointer ${
            menu === "contact-us" ? "border-[#49557e]" : "border-transparent"
          }`}
        >
          Contact Us
        </a>
      </ul>
      {/* Navbar-Right */}
      <div className="flex items-center gap-10 xl:gap-[30px] lg:gap-5">
        <img className="lg:w-[22px] md:w-5" src={assets.search_icon} alt="" />
        {/* navbar-search-icon */}
        <div className="relative">
          <Link to="/cart">
            <img
              className="lg:w-[22px] md:w-5"
              src={assets.basket_icon}
              alt=""
            />
          </Link>
          {/* dot */}
          <div
            className={`${
              getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-[10px] min-h-[10px] bg-red-600 rounded-[5px] -top-2 -right-2 "
            } `}
          ></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="text-base bg-transparent text-[#49557e] border border-solid border-red-600 rounded-full cursor-pointer pl-8 pr-8 pt-3 pb-3 transition-all duration-300 hover:bg-[#fff4f2] lg:px-6 lg:py-2 md:py-[7px] md:px-5 md:text-base"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;

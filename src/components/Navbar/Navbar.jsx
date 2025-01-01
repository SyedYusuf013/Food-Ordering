import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-white shadow-md lg:px-8 lg:py-5">
      {/* Logo */}
      <Link to="/">
        <img
          className="w-[100px] sm:w-[120px] lg:w-[150px]"
          src={assets.logo}
          alt="Logo"
        />
      </Link>
      
      {/* Navbar Menu */}
      <ul className="hidden lg:flex md:flex gap-5 list-none text-[#49557e] lg:text-lg md:text-base">
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

      {/* Mobile Menu Toggle */}
      {/* <button
        className="block lg:hidden text-[#49557e]"
        onClick={() => setMenu(menu === "open" ? "closed" : "open")}
      >
        <img src={assets.menu_icon} alt="Menu" className="w-6" />
      </button> */}

      {/* Navbar-Right */}
      <div className="flex items-center gap-4 sm:gap-5 lg:gap-8">
        <img className="w-5 lg:w-6" src={assets.search_icon} alt="Search" />
        <div className="relative">
          <Link to="/cart">
            <img className="w-5 lg:w-6" src={assets.basket_icon} alt="Cart" />
          </Link>
          {/* Dot */}
          <div
            className={`${
              getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-[10px] min-h-[10px] bg-red-600 rounded-[5px] -top-2 -right-2"
            }`}
          ></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="text-sm sm:text-base bg-transparent text-[#49557e] border border-solid border-red-600 rounded-full cursor-pointer px-5 py-2 lg:px-6 lg:py-3 hover:bg-[#fff4f2] transition-all duration-300"
        >
          Sign in
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menu === "open" && (
        <div className="absolute left-0 w-full bg-white shadow-md top-16 lg:hidden">
          <ul className="flex flex-col items-start gap-4 p-4">
            <Link
              to="/"
              onClick={() => setMenu("home")}
              className={`pb-[2px] border-b-2 border-solid ${
                menu === "home" ? "border-[#49557e]" : "border-transparent"
              }`}
            >
              Home
            </Link>
            <a
              href="#explore-menu"
              onClick={() => setMenu("menu")}
              className={`pb-[2px] border-b-2 border-solid ${
                menu === "menu" ? "border-[#49557e]" : "border-transparent"
              }`}
            >
              Menu
            </a>
            <a
              href="#app-download"
              onClick={() => setMenu("mobile-app")}
              className={`pb-[2px] border-b-2 border-solid ${
                menu === "mobile-app" ? "border-[#49557e]" : "border-transparent"
              }`}
            >
              Mobile App
            </a>
            <a
              href="#footer"
              onClick={() => setMenu("contact-us")}
              className={`pb-[2px] border-b-2 border-solid ${
                menu === "contact-us"
                  ? "border-[#49557e]"
                  : "border-transparent"
              }`}
            >
              Contact Us
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

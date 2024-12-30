import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 pt-20 p-[20px_8vw] mt-[100px] " id="footer">
      <div className="w-[100%] grid grid-cols-[2fr_1fr_1fr] gap-20 sm:flex sm:flex-col sm:gap-9"> 
        <div className="flex flex-col items-start gap-5">
          <img className="cursor-pointer" src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            praesentium, harum accusantium maxime, velit a voluptatibus, iure
            suscipit distinctio ut modi? Sequi sunt mollitia totam. Illum,
            possimus odit! Dolorem veniam in reprehenderit ut repellendus
            praesentium.
          </p>
          <div className="flex flex-row">
            <img
              className="w-10 mr-4 cursor-pointer"
              src={assets.facebook_icon}
              alt=""
            />
            <img
              className="w-10 mr-4 cursor-pointer"
              src={assets.twitter_icon}
              alt=""
            />
            <img
              className="w-10 mr-4 cursor-pointer"
              src={assets.linkedin_icon}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-2xl font-bold text-white">COMPANY</h2>
          <ul>
            <li className="list-none mb-[10px] cursor-pointer hover:text-white lg:hover:text-lg">
              Home
            </li>
            <li className="list-none mb-[10px] cursor-pointer hover:text-white lg:hover:text-lg">
              About us
            </li>
            <li className="list-none mb-[10px] cursor-pointer hover:text-white lg:hover:text-lg">
              Delivery
            </li>
            <li className="list-none mb-[10px] cursor-pointer hover:text-white lg:hover:text-lg">
              Privacy policy
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-2xl font-bold text-white">GET IN TOUCH</h2>
          <ul>
            <li className="list-none mb-[10px] cursor-pointer hover:text-white lg:hover:text-lg">
              +91 7684513659
            </li>
            <li className="list-none mb-[10px] cursor-pointer hover:text-white lg:hover:text-lg">
              contact@tomato.com
            </li>
            <li className="list-none mb-[10px] cursor-pointer hover:text-white lg:hover:text-lg">
              Naya tola near halwapuri stall jagdamba firfuripur-6
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center lg:justify-between justify-center pt-4 mt-8 text-sm border-t border-gray-500 lg:flex-row text-[#7e7e7e] w-[100%]">
        <p>Copyright 2024 &copy; Tomato.com. All rights reserved.</p>
        <p className="text-sm text-center">
          Website developed and maintained by{" "}
          <a
            href="https://www.nextzensoftware.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            NextZen Software Solutions LTD. PVT.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

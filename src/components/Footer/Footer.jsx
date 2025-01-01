import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      className="text-[#d9d9d9] bg-[#323232] flex flex-col justify-between items-center gap-5 pt-20 px-[8vw] pb-10 mt-[100px]"
      id="footer"
    >
      {/* Footer Main Content */}
      <div className="flex flex-col justify-between w-full just gap-9 sm:flex-col md:flex-row md:gap-10 lg:gap-20">
        {/* About Section */}
        <div className="flex flex-col items-start flex-1 gap-5">
          <img className="cursor-pointer" src={assets.logo} alt="Logo" />
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            praesentium, harum accusantium maxime, velit a voluptatibus, iure
            suscipit distinctio ut modi? Sequi sunt mollitia totam. Illum,
            possimus odit! Dolorem veniam in reprehenderit ut repellendus
            praesentium.
          </p>
          <div className="flex flex-row">
            <img
              className="w-8 h-8 mr-4 cursor-pointer sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              src={assets.facebook_icon}
              alt="Facebook"
            />
            <img
              className="w-8 h-8 mr-4 cursor-pointer sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              src={assets.twitter_icon}
              alt="Twitter"
            />
            <img
              className="w-8 h-8 mr-4 cursor-pointer sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              src={assets.linkedin_icon}
              alt="LinkedIn"
            />
          </div>
        </div>

        {/* Company Section */}
        <div className="flex flex-col items-start flex-1 gap-5">
          <h2 className="text-2xl font-bold text-white sm:text-lg md:text-xl">
            COMPANY
          </h2>
          <ul className="text-sm lg:text-base">
            <li className="mb-2 list-none cursor-pointer hover:text-white">
              Home
            </li>
            <li className="mb-2 list-none cursor-pointer hover:text-white">
              About us
            </li>
            <li className="mb-2 list-none cursor-pointer hover:text-white">
              Delivery
            </li>
            <li className="mb-2 list-none cursor-pointer hover:text-white">
              Privacy policy
            </li>
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div className="flex flex-col items-start flex-1 gap-5">
          <h2 className="text-2xl font-bold text-white sm:text-lg md:text-xl">
            GET IN TOUCH
          </h2>
          <ul className="text-sm lg:text-base">
            <li className="mb-2 list-none cursor-pointer hover:text-white">
              +91 7684513659
            </li>
            <li className="mb-2 list-none cursor-pointer hover:text-white">
              contact@tomato.com
            </li>
            <li className="mb-2 list-none cursor-pointer hover:text-white">
              Naya tola near halwapuri stall jagdamba firfuripur-6
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
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

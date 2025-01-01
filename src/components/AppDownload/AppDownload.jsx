import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div
      className="m-auto mt-[100px] text-center font-medium"
      id="app-download"
    >
      {/* Heading */}
      <p className="text-[max(3vw,20px)] sm:text-2xl md:text-3xl lg:text-4xl">
        For Better Experience Download <br /> Tomato App
      </p>

      {/* App Store and Play Store buttons */}
      <div className="flex justify-center mt-10 gap-[max(2vw,10px)] sm:gap-[15px] md:gap-[20px] lg:gap-[25px]">
        <img
          className="max-w-[180px] w-[max(30vw,120px)] sm:w-[130px] md:w-[150px] lg:w-[180px] transition cursor-pointer hover:scale-105"
          src={assets.play_store}
          alt="Play Store"
        />
        <img
          className="max-w-[180px] w-[max(30vw,120px)] sm:w-[130px] md:w-[150px] lg:w-[180px] transition cursor-pointer hover:scale-105"
          src={assets.app_store}
          alt="App Store"
        />
      </div>
    </div>
  );
};

export default AppDownload;

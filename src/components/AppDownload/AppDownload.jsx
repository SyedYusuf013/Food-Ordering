import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="m-auto mt-[100px] text-[max(3vw,20px)] text-center font-medium" id="app-download">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="flex justify-center mt-10 gap-[max(2vw,10px)]">
        <img className="max-w-[180px] w-[max(30vw,120px)] transition cursor-pointer hover:scale-105" src={assets.play_store} alt="" />
        <img className="max-w-[180px] w-[max(30vw,120px)] transition cursor-pointer hover:scale-105" src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;

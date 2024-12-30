import React from "react";

const Header = () => {
  return (
    <div className='h-[34vw] mt-[30px] mr-auto bg-contain bg-[url("/header_img.png")] bg-no-repeat relative'>
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn lg:max-w-[45%] md:max-w-[65%]">
        <h2 className="font-medium text-white sm:text-[4.5vw] text-[22px] font-outfit">
          Order your favourite food here
        </h2>
        <p className="text-white text-[1vw] font-roboto sm:hidden">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="font-medium text-[#747474] border-none py-[1vw] px-[2.3vw] bg-white sm:text-[1vw] text-[13px] rounded-[50px] md:py-[2vw] md:px-[4vw]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;

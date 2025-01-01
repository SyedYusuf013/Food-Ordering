import React from "react";

const Header = () => {
  return (
    <div className='h-[34vw] mt-32 pt-14 bg-contain bg-[url("/header_img.png")] bg-no-repeat relative sm:h-[60vw] md:h-[40vw]'>
      {/* Text Content */}
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] left-[6vw] animate-fadeIn lg:max-w-[45%] md:max-w-[65%] sm:max-w-[75%] ">
        {/* Title */}
        <h2 className="font-medium text-white text-[22px] sm:text-[6vw] md:text-[4.5vw] lg:text-[3vw] font-outfit leading-tight">
          Order your favourite food here
        </h2>

        {/* Description */}
        <p className="hidden sm:hidden md:hidden lg:block text-white text-[1vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.5vw] font-roboto">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>

        {/* Button */}
        <button className="font-medium text-[#747474] border-none py-[1vw] px-[2.3vw] bg-white text-[13px] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] rounded-[50px] sm:py-[2vw] sm:px-[5vw] md:py-[1.5vw] md:px-[4vw]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;

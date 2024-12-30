import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="z-[1] absolute w-[100%] h-[100%] bg-[#00000090] grid">
      <form className="max-w-[23vw] min-w-[330px] place-self-center text-[#808080] bg-white flex flex-col gap-6 rounded-lg text-sm animate-fadeIn py-[25px] px-[30px]">
        <div className="flex items-center justify-between font-bold text-black">
          <h2>{currState}</h2>
          <img
            className="w-4 cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 ">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="border border-solid border-[#c9c9c9] p-[10px] rounded outline-none  focus:ring-black focus:ring-1 text-black"
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            className="border border-solid border-[#c9c9c9] p-[10px] rounded outline-none focus:ring-black focus:ring-1 text-black"
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            className="border border-solid border-[#c9c9c9] p-[10px] rounded outline-none focus:ring-black focus:ring-1 text-black"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="text-white bg-red-400 border-none p-[10px] rounded text-base cursor-pointer">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-start gap-2 -mt-4">
          <input className="mt-[5px]" type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              className="font-medium text-red-400 cursor-pointer"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="font-medium text-red-400 cursor-pointer"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

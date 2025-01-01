import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="z-[1] fixed inset-0 bg-[#00000090] flex justify-center items-center">
      <form className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] min-w-[330px] bg-white flex flex-col gap-6 rounded-lg text-sm animate-fadeIn py-6 px-8 sm:px-10 text-[#808080]">
        {/* Header */}
        <div className="flex items-center justify-between font-bold text-black">
          <h2 className="text-lg">{currState}</h2>
          <img
            className="w-4 cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-5">
          {currState === "Login" ? null : (
            <input
              className="border border-solid border-[#c9c9c9] p-3 rounded outline-none focus:ring-black focus:ring-1 text-black"
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            className="border border-solid border-[#c9c9c9] p-3 rounded outline-none focus:ring-black focus:ring-1 text-black"
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            className="border border-solid border-[#c9c9c9] p-3 rounded outline-none focus:ring-black focus:ring-1 text-black"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        {/* Submit Button */}
        <button className="p-3 text-base text-white bg-red-400 border-none rounded cursor-pointer">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-2 text-sm">
          <input className="mt-1" type="checkbox" required />
          <p>
            By continuing, I agree to the{" "}
            <span className="font-medium text-black">terms of use</span> &{" "}
            <span className="font-medium text-black">privacy policy</span>.
          </p>
        </div>

        {/* Footer Links */}
        {currState === "Login" ? (
          <p className="text-sm">
            Create a new account?{" "}
            <span
              className="font-medium text-red-400 cursor-pointer"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm">
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

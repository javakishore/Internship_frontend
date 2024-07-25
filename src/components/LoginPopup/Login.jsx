import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaLinkedinIn } from "react-icons/fa";

const Login = ({ handleSignIn }) => {
    const [showPassword, setShowPassword] = useState(false);
  
  
    return (
    <div>


<div className={"p-6"}>
        <h1 className="text-3xl text-black dark:text-white font-bold text-center mb-4 ">
          Login
        </h1>
        <form className="flex flex-col gap-3">
          <div>
            <label for="username" className="input-label">
              Username
            </label>
            <input id="username" type="text" className="input" />
          </div>
          <div>
            <label for="password" className="input-label">
              Password
            </label>
            <div className="relative">
              <input
                className="input pr-8"
                id="password"
                type={showPassword ? "text" : "password"}
              />

              {showPassword ? (
                <FaEye
                  className="text-white absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeSlash
                  className="text-white absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
        </form>
        <button className="primary-btn">Submit</button>
        <p className="text-center text-white text-sm my-3">or login with</p>
        <div className="flex gap-6 justify-center">
          <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300">
            <FcGoogle className="text-3xl" />
          </div>
          <div className="bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300">
            <FaLinkedinIn className="text-2xl text-white" />
          </div>
        </div>
        <p
          className="text-center text-black dark:text-white hover:text-base text-sm my-3 hover:text-primary cursor-pointer "
          onClick={handleSignIn}
        >
          No Account? create Signup here
        </p>
      </div>
    </div>
  )
}

export default Login
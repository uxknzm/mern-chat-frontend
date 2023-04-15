import React from "react";

import GitButton from "../../../GitButton";
import GoogleButton from "../../../GoogleButton";

const LoginForm = ({
  login,
  email,
  setEmail,
  password,
  setPassword,
  setIslogin,
  contextHolder
}) => {

  return (
    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
      {contextHolder}
      <div className="text-center mb-6">
        <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
        <p>Enter your information to login</p>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <GoogleButton />
          <GitButton />
        </div>
        <div className="my-4 border-b text-center">
          <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-gray-100">
            Or sign up with e-mail
          </div>
        </div>
        <form onSubmit={login}>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-xs font-semibold px-1">Email</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your email"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-12">
              <label className="text-xs font-semibold px-1">Password</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="password"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="************"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                LOGIN NOW
              </button>
            </div>
          </div>
          <p
            onClick={() => setIslogin(false)}
            className="mt-6 text-gray-600 text-center cursor-pointer"
          >
            Register now
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

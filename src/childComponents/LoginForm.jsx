"use client";
import React from "react";

const LoginForm = () => {
  return (
    <>
      <form>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="brian@example.com"
            className="bg-transparent border border-gray-300 rounded-lg px-3 py-2"
          />
          <input
            type="password"
            placeholder="enter password"
            className="bg-transparent border border-gray-300 rounded-lg px-3 py-2"
          />
          <button
            type="submit"
            className=" bg-green-800 text-white border-none rounded-lg py-2"
          >
            Continue with email
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;

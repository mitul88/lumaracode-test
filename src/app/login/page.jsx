import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row ">
      <div className="sm:w-full md:w-1/2 flex items-center justify-center">
        <div>
          <div>
            <div className="mb-10">
              <h2 className="text-2xl font-bold">Join the green movement</h2>
              <h4 className="text-md text-gray-400 mt-2">Sign up for free</h4>
            </div>
            <div className="w-full">
              <button className="w-full text-center border border-gray-300 rounded-lg py-2">
                Continue with Google
              </button>
            </div>
          </div>

          <div className="my-5 text-center text-gray-400">Or</div>

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
        </div>
      </div>

      <div className="md:w-1/2 hidden md:block">
        <Image
          src="/assets/frame 9.png"
          alt=""
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Login;

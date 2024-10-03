import Image from "next/image";
import React from "react";
import LoginForm from "@/childComponents/LoginForm";
import GoogleLoginButton from "@/childComponents/GoogleLoginButton";
import { authOptions } from "@/utils/authOption";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  // if (session) {
  //   redirect("/dashboard");
  // }

  return (
    <div className="w-full h-screen flex flex-col md:flex-row ">
      <div className="sm:w-full md:w-1/2 flex items-center justify-center">
        <div>
          <div>
            <div className="mb-10">
              <h2 className="text-2xl font-bold">Join the green movement</h2>
              <h4 className="text-md text-gray-400 mt-2">Sign up for free</h4>
            </div>
            <GoogleLoginButton />
          </div>

          <div className="my-5 text-center text-gray-400">Or</div>

          <LoginForm />
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

export default page;

"use client";
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

const GoogleLoginButton = () => {
  return (
    <div className="w-full">
      <button
        className="w-full text-center border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2"
        onClick={() => signIn("google")}
      >
        <Image src="/assets/google_symbol.png" alt="" width={25} height={25} />
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleLoginButton;

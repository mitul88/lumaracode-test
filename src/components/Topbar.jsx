"use client";
import Button from "@/childComponents/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Topbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full flex justify-between m-0 px-10 py-8">
      <Link href="/">
        <Image src="/assets/Subtract.png" alt="logo" width={50} height={50} />
      </Link>
      <nav className="flex items-center justify-between w-72 text-gray-600 font-semibold">
        <Link
          href="/"
          className={`hover:text-blue-600 duration-150 ${
            pathname == "/" ? "text-blue-600" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`hover:text-blue-600 duration-150 ${
            pathname == "/projects" ? "text-blue-600" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="/services"
          className={`hover:text-blue-600 duration-150 ${
            pathname == "/services" ? "text-blue-600" : ""
          }`}
        >
          Services
        </Link>
      </nav>
      <Button type="primary">Contact Us</Button>
    </div>
  );
};

export default Topbar;

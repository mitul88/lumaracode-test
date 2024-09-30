import Link from "next/link";
import React from "react";
import { FaHome, FaList, FaRegCalendarAlt, FaWallet } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { MdOutlineFastfood } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const DashboardPage = () => {
  return (
    <div className="w-full flex flex-row min-h-screen">
      <div className="w-[300px] p-10 bg-white">
        <div>
          <h2 className="text-3xl font-bold">
            Foody<span className="text-green-600">.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-12 py-10">
          <Link
            href="/"
            className="flex gap-2 items-center hover:bg-green-300 hover:text-green-600 hover:px-2 py-2 ease-in duration-200 rounded-lg"
          >
            <FaHome />
            Dashboard
          </Link>
          <Link
            href="/"
            className="flex gap-2 items-center hover:bg-green-300 hover:text-green-600 hover:px-2 py-2 ease-in duration-200 rounded-lg"
          >
            <FaList />
            Order List
          </Link>
          <Link
            href="/"
            className="flex gap-2 items-center hover:bg-green-300 hover:text-green-600 hover:px-2 py-2 ease-in duration-200 rounded-lg"
          >
            <SiSimpleanalytics />
            Analytics
          </Link>
          <Link
            href="/"
            className="flex gap-2 items-center hover:bg-green-300 hover:text-green-600 hover:px-2 py-2 ease-in duration-200 rounded-lg"
          >
            <MdOutlineFastfood />
            Foods
          </Link>
          <Link
            href="/"
            className="flex gap-2 items-center hover:bg-green-300 hover:text-green-600 hover:px-2 py-2 ease-in duration-200 rounded-lg"
          >
            <FaRegCalendarAlt />
            Calendar
          </Link>
          <Link
            href="/"
            className="flex gap-2 items-center hover:bg-green-300 hover:text-green-600 hover:px-2 py-2 ease-in duration-200 rounded-lg"
          >
            <IoChatboxEllipsesOutline />
            Chat
          </Link>
          <Link
            href="/"
            className="flex gap-2 items-center hover:bg-green-300 hover:text-green-600 hover:px-2 py-2 ease-in duration-200 rounded-lg"
          >
            <FaWallet />
            Wallet
          </Link>
        </div>
      </div>
      <div className="w-full  bg-[#F5F5F7]"></div>
    </div>
  );
};

export default DashboardPage;

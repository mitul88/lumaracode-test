import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="w-72 bg-white rounded-lg shadow p-12 flex flex-col items-center justify-center">
      <div className="flex">
        <div>
          <Image src="/assets/Group 148.png" alt="" height={80} width={80} />
        </div>
        <div>
          <h1 className="text-3xl font-bold">75</h1>
          <p className="text-lg text-gray-600">Total orders</p>
          <div>
            <span className="text-gray-300">4% 30 days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import Button from "@/childComponents/Button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <main className="w-full pt-8 pb-16 px-36">
      <div className="w-full flex sm:flex-col md:flex-row sm:h-auto md:h-[800px] ">
        <div className="sm:w-full md:w-1/2  sm:flex-2 flex flex-col justify-center">
          <h1 className="md:text-7xl sm:text-4xl">
            Empower Your Business With Stunning Design!
          </h1>
          <div className="my-10">
            <p className="text-gray-600 md:text-2xl sm:text-lg">
              Lumaracode is a digital design and development studio. We design
              and develop astonishing websites and mobule apps .
            </p>
          </div>
          <div className="flex">
            <div className="mr-3">
              <Button type="primary">Get in touch</Button>
            </div>
            <div className="mr-3">
              <Button type="secondary">See our work</Button>
            </div>
          </div>
        </div>
        <div className="sm:w-full md:w-1/2  sm:flex-1  h-full">
          <Image
            src="/assets/Image.png"
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-5 md:grid-row-1 sm:gap-10 sm:grid-cols-3 sm:grid-row-2 mx-auto">
        <Image src="/assets/Group 23.png" alt="" height={50} width={100} />
        <Image src="/assets/Group 24.png" alt="" height={50} width={100} />
        <Image src="/assets/Group 25.png" alt="" height={50} width={100} />
        <Image src="/assets/Group 26.png" alt="" height={50} width={100} />
        <Image src="/assets/Group 27.png" alt="" height={50} width={100} />
      </div>
    </main>
  );
};

export default HeroSection;

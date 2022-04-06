import Image from "next/image";
import React from "react";
import { Plane } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col ">
      <div className="relative w-[500px] h-[300px]">
        <Image
          src="/images/Airbnb-logo.jpg"
          alt="airbnb"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Plane ariaLabel="loading-indicator" />
    </div>
  );
};

export default Loader;

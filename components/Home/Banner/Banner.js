import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative w-screen h-[350px] sm:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px]">
      <Image
        src="/images/img.jpg"
        alt="banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-semibold">
          Not sure where to go? Perfect
        </p>
        <button className="px-10 py-4 my-4 bg-black text-white rounded-full hover:bg-gray-900 transition transform active:scale-95 duration-200">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;

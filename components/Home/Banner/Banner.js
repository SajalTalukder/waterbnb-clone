import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative  h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/images/h2.jpg"
        alt="banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-[40%] w-full text-center">
        <p className="text-sm sm:text-lg font-semibold text-white">
          Not sure where to go? Perfect
        </p>
        <button className="px-10 py-4 my-4 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition transform active:scale-95 duration-200">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;

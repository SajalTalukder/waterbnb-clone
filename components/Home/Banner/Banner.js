import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative  h-[250px] sm:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]">
      <Image
        src="/images/img.jpg"
        alt="banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-[40%] w-full text-center">
        <p className="text-sm sm:text-lg font-semibold text-black">
          Not sure where to go? Perfect
        </p>
        <button className="px-10 py-4 my-4 text-white bg-black font-semibold rounded-full hover:bg-gray-300 transition transform active:scale-95 duration-200">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;

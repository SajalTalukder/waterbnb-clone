import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} infinite>
      <div>
        <Image
          src="/images/mci1.jpg"
          width={500}
          height={300}
          objectFit="cover"
        />
        <h1 className="country">Bangladesh</h1>
      </div>
      <div>
        <Image
          src="/images/mci2.jpg"
          width={500}
          height={300}
          objectFit="cover"
        />
        <h1 className="country">Dhaka</h1>
      </div>
      <div>
        <Image
          src="/images/mci3.jpg"
          width={500}
          height={300}
          objectFit="cover"
        />
        <h1 className="country">Tangail</h1>
      </div>
      <div>
        <Image
          src="/images/mci4.jpg"
          width={500}
          height={300}
          objectFit="cover"
        />
        <h1 className="country">Nepal</h1>
      </div>
      <div>
        <Image
          src="/images/mci1.jpg"
          width={500}
          height={300}
          objectFit="cover"
        />
        <h1 className="country">Australia</h1>
      </div>
      <div>
        <Image
          src="/images/mci2.jpg"
          width={500}
          height={300}
          objectFit="cover"
        />
        <h1 className="country">Japan</h1>
      </div>
      <div>
        <Image
          src="/images/mci3.jpg"
          width={500}
          height={300}
          objectFit="cover"
        />
        <h1 className="country">India</h1>
      </div>
      <div>
        <Image
          src="/images/mci4.jpg"
          width={500}
          height={300}
          objectFit="cover"
        />
        <h1 className="country">Bangladesh</h1>
      </div>
    </Carousel>
  );
};

export default Slider;

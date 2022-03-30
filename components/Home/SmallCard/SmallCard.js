import React from "react";
import { smallCardData } from "../../Data/Data";
import Card from "./Card";
const SmallCard = () => {
  return (
    <div className="pt-6 mb-5">
      <h1 className="text-2xl md:text-4xl font-semibold pb-7">
        Explore Nearby
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {smallCardData.map((item) => {
          {
            return (
              <Card
                location={item.location}
                distance={item.distance}
                img={item.img}
                key={item.img}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default SmallCard;

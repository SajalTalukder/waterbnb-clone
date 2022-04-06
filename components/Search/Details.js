import React from "react";
import { searchResult } from "../Data/Data";
import SearchCard from "./SearchCard";
import { useRouter } from "next/router";
import { formateDate } from "../../components/Helper/Helper";

const Details = () => {
  const router = useRouter();
  const { location, startDate, endDate, guest } = router.query;
  const formatedStartDate = formateDate(startDate);
  const formatedEndDate = formateDate(endDate);
  const range = `${formatedStartDate} To ${formatedEndDate}`;
  return (
    <>
      <div className="mr-5">
        <p className="text-xs font-semibold mb-2">
          300+ stays - {range} - for {guest} guests
        </p>
        <h1 className="text-2xl font-bold">
          Stays in <span className="text-red-600 capitalize"> {location}</span>
        </h1>
        <div className="hidden md:inline-flex space-x-2 items-center justify-between mt-4">
          <button className="btn">Cancellation Flexibility</button>
          <button className="btn">Type of Place</button>
          <button className="btn">Rooms and beds</button>
          <button className="btn">Price</button>
          <button className="btn">More Filters</button>
        </div>
        <div className="mt-10 ml-5">
          {searchResult.map((item) => {
            return (
              <SearchCard
                img={item.img}
                price={item.price}
                location={item.location}
                title={item.title}
                description={item.description}
                total={item.total}
                star={item.star}
                key={item.lat}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Details;

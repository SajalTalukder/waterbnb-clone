import React from "react";
import Header from "../Home/Header/Header";
import Details from "./Details";

import Footer from "../../components/Home/Footer/Footer";
import { useRouter } from "next/router";
import { formateDate } from "../../components/Helper/Helper";
const Search = () => {
  const router = useRouter();
  const { location, startDate, endDate, guest } = router.query;
  console.log(startDate);
  const formatedStartDate = formateDate(startDate);
  const formatedEndDate = formateDate(endDate);
  const range = `${formatedStartDate} To ${formatedEndDate}`;
  const placeHolderText = `${location} | ${range} | ${guest} guests`;
  return (
    <div>
      <Header placeholder={placeHolderText} />
      <div className="lg:inline-flex w-[80%]">
        <div className="ml-5 mt-16 flex-grow">
          <Details />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;

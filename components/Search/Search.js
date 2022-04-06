import React from "react";
import Header from "../Home/Header/Header";
import Details from "./Details";

import Footer from "../../components/Home/Footer/Footer";
import { useRouter } from "next/router";
import { formateDate } from "../../components/Helper/Helper";
import { useSession } from "next-auth/react";
import Loader from "../Loader/Loader";
import SignIn from "../SignIn/SignIn";
const Search = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loader />;
  }
  if (!session?.user) {
    return <SignIn />;
  }

  const router = useRouter();
  const { location, startDate, endDate, guest } = router.query;
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

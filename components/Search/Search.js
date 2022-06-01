import React from "react";
import Header from "../Home/Header/Header";
import Details from "./Details";
import Footer from "../../components/Home/Footer/Footer";
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

  return (
    <div>
      <Header />
      <div className="lg:inline-flex mx-auto w-[96%] md:w-[80%]">
        <div className="ml-0 md:ml-5 mt-16 flex-grow">
          <Details />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;

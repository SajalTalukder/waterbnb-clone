import React from "react";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import MediumCard from "./MediumCard/MediumCard";
import SmallCard from "./SmallCard/SmallCard";
import LargeCard from "./LargeCard/LargeCard";
import Footer from "./Footer/Footer";
import { getSession, useSession } from "next-auth/react";
import SignIn from "../SignIn/SignIn";
import Loader from "../Loader/Loader";

const HomeComp = () => {
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
      <Banner />
      <main className="max-w-6xl mx-auto px-8 sm:px-16">
        <SmallCard />
        <MediumCard />
        <LargeCard />
      </main>
      <Footer />
    </div>
  );
};

export default HomeComp;

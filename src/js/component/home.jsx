import React from "react";
import FixedNav from "./navbar.jsx";
import CardContainer from "./dataCards.jsx";
import Footerview from "./footer.jsx";
import Jumboview from "./jumbo.jsx";

const Home = () => {
  return (
    <>
      <FixedNav />
      <Jumboview />
      <CardContainer />
      <Footerview />
    </>
  );
};

export default Home;

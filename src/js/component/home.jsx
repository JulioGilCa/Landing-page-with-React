import React from "react";
import FixedNav from "./navbar.jsx";
import App from "./dataCards.jsx";
import Footerview from "./footer.jsx";
import Jumboview from "./jumbo.jsx";

const Home = () => {
  return (
    <>
      <FixedNav />
      <Jumboview />
      <App />
      <Footerview />
    </>
  );
};

export default Home;
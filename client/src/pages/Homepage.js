import React from "react";
import Layout from "../Components/Layout/Layout";
import Selector from "../Components/Homepage/Selector";
import Cards from "../Components/Homepage/Cards";
import Heading from "../Components/Homepage/Heading";
import Reviews from "../Components/Homepage/Reviews";

const Homepage = () => {
  return (
    <Layout title="RESERVE A BUS SEAT">
      <div>
        <Selector />
        <Cards />
        <Heading />
        <Reviews />
      </div>
    </Layout>
  );
};

export default Homepage;

import React from "react";
import Layout from "../Components/Layout/Layout";
import Selector from "../Components/Homepage/Selector";

const Homepage = () => {
  return (
    <Layout title="RESERVE A BUS SEAT">
      <div>
        <Selector />
      </div>
    </Layout>
  );
};

export default Homepage;

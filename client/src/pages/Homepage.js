import React from "react";
import Layout from "../Components/Layout/Layout";
import { useAuth } from "../context/auth";

const Homepage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout title="RESERVE A BUS SEAT">
      <div className="bg-red-400 mt-5">Homepage</div>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default Homepage;

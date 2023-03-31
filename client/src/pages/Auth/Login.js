import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"REGISTER - RESERVE APP"}>
      <div className="font-sans antialiased bg-grey-lightest shadow-sm">
        {/* Content */}
        <div className="w-full bg-grey-lightest" style={{ paddingTop: "4rem" }}>
          <div className="w-1/2 container mx-auto py-8">
            <div className="w-5/6 lg:w-1/2 shadow-xl mx-auto bg-gray-lightest rounded">
              <div className="py-4 px-8 text-black text-xl text-center border-b border-grey-lighter">
                LOG IN TO YOUR ACCOUNT
              </div>
              <form onSubmit={handleSubmit} className="py-4 px-8">
                <div className="flex mb-4">
                  <div className="w-full mr-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Your secure password"
                    required
                  />
                </div>
                <div className="flex items-center justify-center mt-8">
                  <button
                    className="hover:bg-orange-400 bg-orange-600 text-white font-bold py-2 px-4 rounded-md"
                    type="submit"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
            <p className="text-center my-4">
              New User?{" "}
              <Link to="/register" className="text-blue-600">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

import { faBars, faBus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/auth";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useAuth();

  // logout handler
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successful");
  };
  return (
    <>
      <div className="shadow-md w-full top-0 left-0">
        <div className="md:flex items-center justify-between bg-[#F8F9FA] py-3 md:px-10 px-7">
          <div className="font-bold text-orange-500 text-2xl cursor-pointer flex items-center">
            <span className="text-xl">
              <FontAwesomeIcon icon={faBus} className="ml-5" />
            </span>
            <Link to="/" className=" text-xl mx-1 font-bold">
              RESERVE
            </Link>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </div>
          <ul
            className={`md:flex md:items-center md:bg-transparent sm:bg-inherit md:pb-0 pb-12 absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-16" : "top-[-490px]"
            }`}
          >
            <li className="pl-8 font-bold">
              <Link>Ticket</Link>
            </li>
            <li className="pl-8 font-bold">
              <Link>Contact Us</Link>
            </li>
            {/* Navbar buttons */}
            {!auth.user ? (
              <>
                <Link
                  to="/login"
                  className="mr-8 bg-orange-500 hover:bg-amber-500 text-white font-semibold py-1 px-4 ml-6 rounded"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="mr-8 border border-black text-black font-semibold py-[0.2rem] px-4 rounded"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <div className="flex py-2">
                  <div className="mr-2 ml-4 flex mt-[3px]">
                    <FaUserCircle className="text-xl" />
                  </div>
                  <div className="font-bold">My Profile</div>
                </div>
                <Link
                  onClick={handleLogOut}
                  className="mr-8 bg-orange-600 hover:bg-amber-500 text-white font-semibold py-1 px-4 ml-6 rounded"
                >
                  Logout
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

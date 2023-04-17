import { faBus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="bg-gray-300 mt-6">
      <div className="flex justify-around pt-8 pb-3 ">
        <div>
          <div className="flex text-orange-500">
            <span class="material-icons self-center">
              <FontAwesomeIcon icon={faBus} />
            </span>
            <button className="font-bold text-xl">RESERVE</button>
          </div>
          <div className="flex flex-col w-[24vw] text-start">
            <div>When you have a choice. Choose Reserve</div>
            <div>
              Reserve offers bus tickets booking through its website, IOS, and
              android mobile app for all major cities.
            </div>
            <div>reserve.bus@reserve.com</div>
          </div>
        </div>
        <div className="text-left">
          <div className="text-xl font-bold">About </div>
          <ul>
            {["About Us", "Contact Us"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-left">
            <div className="text-xl font-bold ">Useful Link</div>
            <div>
              <ul>
                {["Careers", "FAQ", "T & C", "Privacy Policy", "Blog"].map(
                  (item) => (
                    <li key={item}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Follow Us</div>
          <div className="flex">
            <AiOutlineInstagram />
            <AiOutlineFacebook />
          </div>
        </div>
      </div>
      <hr className="border-1 border-gray-400 mx-8 " />
      <div className="flex justify-center">All rights reserved - 2023</div>
    </div>
  );
};

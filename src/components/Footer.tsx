import React from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="py-5 bg-black text-white/60 border-t border-white/20">
        <div className="container">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="text-center">
              &copy; 2024 Web Realm, Inc. All rights reserved
            </div>
            <ul
              className="flex justify-center items-center
             gap-2.5"
            >
              <li>
                <FaSquareInstagram />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaGithub />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

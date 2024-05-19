
import React from "react";
import Logo from "../assets/RuPay.png";
import Link from "@mui/material/Link";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 bg-blue-100">
      <img src={Logo} alt="RuPay logo" className="h-16 md:h-24" />

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 mt-2 md:mt-0">
        <Link href="/" underline="hover">
          Home
        </Link>
        <Link href="/aboutUs" underline="hover">
          About Us
        </Link>
        <Link href="/contactUs" underline="hover">
          Contact Us
        </Link>
      </div>
      
      <div className="flex space-x-4 mt-2 md:mt-0">
        <Link href="/logIn" className="px-6 py-1 border rounded-xl bg-white">
          LogIn
        </Link>
        <Link href="/signUp" className="px-4 py-1 border rounded-xl bg-white">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;


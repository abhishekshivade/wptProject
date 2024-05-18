import React from "react";
import Logo from "../assets/RuPay.png";
import Link from "@mui/material/Link";

const Navbar = () => {
  return (
    <div class="flex justify-between items-center px-10 bg-blue-500">
      <a href="/">
      <img src={Logo} alt="RuPay logo" class="h-24" />
      </a>
      <div class="space-x-10">
        <a href="/" className="text-white text-xl font-semibold hover:underline">
          Home
        </a>
        <a href="/aboutUs" className="text-white text-xl font-semibold hover:underline">
          About Us
        </a>
        <a href="/contactUs" className="text-white text-xl font-semibold hover:underline">
          Contact Us
        </a>
      </div>
      <div class="space-x-4">
        <a href="/logIn" class="px-6 py-1 rounded-xl bg-white font-semibold hover:bg-blue-700 hover:text-white">LogIn</a>
        <a href="signUp" class="px-4 py-1 rounded-xl bg-white font-semibold hover:bg-blue-700 hover:text-white">Sign Up</a>

        {/* <select id="class" required>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select> */}
      </div>
    </div>
  );
};
// 110004 140004
export default Navbar;

import React from "react";
import Logo from "../assets/RuPay.png";
import Link from "@mui/material/Link";

const Navbar = () => {
  return (
    <div class="flex justify-between items-center px- bg-blue-100">
      <img src={Logo} alt="RuPay logo" class="h-24" />

      <div class="space-x-10">
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
      <div class="space-x-4">
        <Link href="/logIn" class="px-6 py-1 border rounded-xl bg-">LogIn</Link>
        <Link href="signUp" class="px-4 py-1 border rounded-xl bg-">Sign Up</Link>

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

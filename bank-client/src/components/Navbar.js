import React, { useEffect, useState } from "react";
import Logo from "../assets/RuPay.png";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Authentication from "./subComponents/Authentication";
import { ABOUT_ROUTE, ADMIN_LOGIN_ROUTE, ADMIN_SIGNUP_ROUTE, BASE_ROUTE, CONTACT_ROUTE, CUSTOMER_LOGIN_ROUTE, CUSTOMER_SIGNUP_ROUTE1 } from "../constants/AppRoutes";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [userType, setUserType] = useState("Customer");
  const [isLoggedIn,setIsLoggedIn]=useState(false)

  // const handleUserType=e=>{}

  const location = useLocation();
  const navigate = useNavigate();

  // console.log(location.pathname)

  const handleLogout=e=> setIsLoggedIn(false)

  useEffect(() => {
    switch (userType) {
      case "Customer":
        if(location.pathname===`${ADMIN_LOGIN_ROUTE}`){navigate(`${CUSTOMER_LOGIN_ROUTE}`)}
        if(location.pathname===`${ADMIN_SIGNUP_ROUTE}`){navigate(`${CUSTOMER_SIGNUP_ROUTE1}`)}
        break;
        
      case "Employee":
        if(location.pathname===`${CUSTOMER_LOGIN_ROUTE}`){navigate(`${ADMIN_LOGIN_ROUTE}`)}
        if(location.pathname===`${CUSTOMER_SIGNUP_ROUTE1}`){navigate(`${ADMIN_SIGNUP_ROUTE}`)}
        break;
      default:
        return;
    }
  }, [userType]);

  return (
    <div class="flex justify-between items-center px-10 bg-blue-500">
      <a href={BASE_ROUTE}><img src={Logo} alt="RuPay logo" class="h-24" /></a>

      <div class="space-x-10">
        <a href={BASE_ROUTE}  className="text-white text-xl font-semibold hover:underline">
          Home
        </a>
        <a href={ABOUT_ROUTE} className="text-white text-xl font-semibold hover:underline">
          About Us
        </a>
        <a href={CONTACT_ROUTE} className="text-white text-xl font-semibold hover:underline">
          Contact Us
        </a>
      </div>
      { isLoggedIn ? <button onClick={handleLogout}>Logout</button> :
      <div className="flex gap-10 items-center">
        <Authentication role={userType} />
      <div className="space-x-4">
        <FormControl fullWidth className="">
          <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userType}
            name="accountType"
            label="Account Type"
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <MenuItem value="Customer">Customer</MenuItem>
            <MenuItem value="Employee">Employee</MenuItem>
          </Select>
        </FormControl>
        {/* <div class="space-x-4">
          <a href="/logIn" class="px-6 py-1 border rounded-xl bg-">LogIn</a>
          <a href="signUp" class="px-4 py-1 border rounded-xl bg-">Sign Up</a>
        </div> */}
      </div>
      </div>
    }
    </div>
  );
};
export default Navbar;
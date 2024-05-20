import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import { CUSTOMER_DASHBOARD } from "../../constants/AppRoutes";
import { registerCustomer } from "../../services/customerServices";

export default function RegistrationNext() {
  const [userData, setUserData] = useState({
    aadhaarNumber: "",
    panNumber: "",
    password: "",
    accountType: "",
  });

  const [confirmPasword, setConfirmPassword] = useState("");

  const [error, setError] = useState({
    aadhaarNumberErr: "",
    panNumberErr: "",
    passwordErr: "",
    accountTypeErr: "",
  });

  const navigate = useNavigate();

  const handleConfirmPassword = (e) => {
    e.preventDefault();

    const confirmPaswordError = userData.password === confirmPasword;

    if (confirmPaswordError) {
      setError({ ...error, confirmPaswordError: null });
    } else {
      setError({ ...error, confirmPaswordError: "Password do not match" });
      return;
    }
  };

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerCustomer(userData);
      // console.log(response)

      if (response.status === 200) {
        navigate(CUSTOMER_DASHBOARD);
      }
    } catch (error) {
      setError("Please enter correct data");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 md:p-8 glass">
        <div className="w-full text-center my-3">
          <h2 className="text-black font-bold text-2xl md:text-3xl mt-3">Register</h2>
        </div>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="number"
              className="w-10/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your Aadhaar Number"
              value={userData.aadhaarNumber}
              onChange={handleChange}
              name="aadhaarNumber"
              required
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-id-card text-xl"></i>
            </div>
          </div>
          <div className="flex items-center border-b-black border-b-2 mx-1 md:mx-5 my-4 py-1">
            <input
              type="text"
              className="w-10/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your PAN Number"
              value={userData.panNumber}
              name="panNumber"
              onChange={handleChange}
              required
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-address-card text-xl"></i>
            </div>
          </div>
          <div className="flex items-center border-b-black border-b-2 mx-1 md:mx-5 my-4 py-1">
            <input
              type={showPassword ? "text" : "password"}
              className="w-10/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your Strong Password"
              value={userData.password}
              name="password"
              onChange={handleChange}
              required
            />
            <div className="w-2/12 flex items-center justify-center cursor-pointer" onClick={togglePasswordVisibility}>
              <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} text-xl`}></i>
            </div>
          </div>
          <div className="flex items-center border-b-black border-b-2 mx-1 md:mx-5 my-4 py-1">
            <input
              type="password"
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Re-Enter your Password"
              name="confirmPassword"
              value={confirmPasword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={handleConfirmPassword}
              required
            />
            <div className="w-2/12 flex items-center justify-center cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
              <i className={`fa-solid ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"} text-xl`}></i>
            </div>
          </div>
          <div className="flex flex-col border-b-black border-b-2 mx-1 md:mx-5 my-4 py-1">
            <FormControl fullWidth>
              <InputLabel id="account-type-label">Account Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userData.accountType}
                name="accountType"
                label="Account Type"
                onChange={handleChange}
                required
              >
                <MenuItem value="Savings">Savings</MenuItem>
                <MenuItem value="Current">Current</MenuItem>
                <MenuItem value="Loan">Loan</MenuItem>
                <MenuItem value="FD">Fixed Deposit</MenuItem>
              </Select>
            </FormControl>
          </div>
          {error.accountTypeErr && <p style={{ color: "red" }}>{error.accountTypeErr}</p>}
          <div className="mx-5 my-7 py-2">
            <button className="bg-black w-20 h-[35px] text-white rounded-full mb-3 hover:bg-white hover:text-black hover:border hover:border-black">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


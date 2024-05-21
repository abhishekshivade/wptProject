import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { registerCustomer } from "../../services/customerServices";
import { CUSTOMER_DASHBOARD, CUSTOMER_LOGIN_ROUTE } from "../../constants/AppRoutes";

const CustomerRegistration = () => {
  const [isNext, setIsNext] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailId: "",
    address: "",
    aadhaarNumber: "",
    panNumber: "",
    password: "",
    accountType: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState({
    firstNameErr: "",
    lastNameErr: "",
    mobileNumberErr: "",
    emailIdErr: "",
    addressErr: "",
    formErr: "",
    aadhaarNumberErr: "",
    panNumberErr: "",
    passwordErr: "",
    accountTypeErr: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setUserData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));

  const handleConfirmPassword = (e) => {
    e.preventDefault();
    const confirmPasswordError = userData.password === confirmPassword;
    if (confirmPasswordError) {
      setError({ ...error, confirmPasswordError: null });
    } else {
      setError({ ...error, confirmPasswordError: "Passwords do not match" });
      return;
    }
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (
      !error.firstNameErr &&
      !error.lastNameErr &&
      !error.mobileNumberErr &&
      !error.emailIdErr &&
      !error.addressErr
    ) {
      setIsNext(true);
      console.log(userData);
    } else {
      setError({ ...error, formErr: "Please enter correct data" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userData);
    try {
      const response = await registerCustomer(userData);
      if (response.status === 200) {
        navigate(CUSTOMER_LOGIN_ROUTE);
      }
    } catch (error) {
      setError({ ...error, formErr: "Please enter correct data" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black md:text-3xl">Register</h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isNext ? (
            <div>
              <div>
                <div className="flex items-center border-b-2 border-black">
                  <input
                    type="text"
                    className="flex-grow bg-transparent outline-none placeholder-black"
                    placeholder="Enter your First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={userData.firstName}
                    required
                  />
                  <i className="fa-solid fa-user text-xl"></i>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.firstNameErr ? error.firstNameErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex items-center border-b-2 border-black">
                  <input
                    type="text"
                    className="flex-grow bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={userData.lastName}
                    required
                  />
                  <i className="fa-solid fa-user text-xl"></i>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.lastNameErr ? error.lastNameErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex items-center border-b-2 border-black">
                  <input
                    type="tel"
                    className="flex-grow bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Mobile Number"
                    onChange={handleChange}
                    name="mobileNumber"
                    value={userData.mobileNumber}
                    required
                  />
                  <i className="fa-solid fa-mobile text-xl"></i>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.mobileNumberErr ? error.mobileNumberErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex items-center border-b-2 border-black">
                  <input
                    type="email"
                    className="flex-grow bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Email Address"
                    onChange={handleChange}
                    name="emailId"
                    value={userData.emailId}
                    required
                  />
                  <i className="fa-solid fa-envelope text-xl"></i>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.emailIdErr ? error.emailIdErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex items-center border-b-2 border-black">
                  <input
                    type="text"
                    className="flex-grow bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Address"
                    onChange={handleChange}
                    name="address"
                    value={userData.address}
                    required
                  />
                  <i className="fa-solid fa-house text-xl"></i>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.addressErr ? error.addressErr : <br />}
                </p>
              </div>
              {error.formErr && <p className="text-red-500">{error.formErr}</p>}
              <div className="text-center">
                <button
                  onClick={handleNext}
                  className="bg-black w-20 h-10 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <div className="flex items-center border-b-2 border-black">
                  <input
                    type="number"
                    className="flex-grow bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Aadhaar Number"
                    value={userData.aadhaarNumber}
                    onChange={handleChange}
                    name="aadhaarNumber"
                    required
                  />
                  <i className="fa-solid fa-id-card text-xl"></i>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.aadhaarNumberErr ? error.aadhaarNumberErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex items-center border-b-2 border-black">
                  <input
                    type="text"
                    className="flex-grow bg-transparent outline-none placeholder-black"
                    placeholder="Enter your PAN Number"
                    value={userData.panNumber}
                    name="panNumber"
                    onChange={handleChange}
                    required
                  />
                  <i className="fa-solid fa-address-card text-xl"></i>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.panNumberErr ? error.panNumberErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex items-center border-b-2 border-black">
                  <input
                    type="password"
                    className="flex-grow bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Strong Password"
                    value={userData.password}
                    name="password"
                    onChange={handleChange}
                    required
                  />
                  <i className="fa-solid fa-lock text-xl"></i>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.passwordErr ? error.passwordErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex items-center border-b-2 border-black">
                  <input
                    type="password"
                    className="flex-grow bg-transparent outline-none placeholder-black"
                    placeholder="Re-Enter your Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={handleConfirmPassword}
                    required
                  />
                  <i className="fa-solid fa-lock text-xl"></i>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.confirmPasswordErr ? error.confirmPasswordErr : <br />}
                </p>
              </div>
              <div>
                <FormControl fullWidth>
                  <InputLabel
                    id="accountType"
                    className="bg-white text-gray-500"
                  >
                    Account Type
                  </InputLabel>
                  <Select
                    labelId="accountType"
                    id="accountType"
                    value={userData.accountType}
                    label="Account Type"
                    onChange={handleChange}
                    name="accountType"
                    required
                  >
                    <MenuItem value={"current"}>Current</MenuItem>
                    <MenuItem value={"savings"}>Savings</MenuItem>
                  </Select>
                </FormControl>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.accountTypeErr ? error.accountTypeErr : <br />}
                </p>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-black w-20 h-10 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CustomerRegistration;

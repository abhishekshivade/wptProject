import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { registerCustomer } from "../../services/customerServices";
import { CUSTOMER_DASHBOARD } from "../../constants/AppRoutes";

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

  const [confirmPasword, setConfirmPassword] = useState("");

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
    setUserData(prevData=>({ ...prevData, [e.target.name]: e.target.value }));

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
      console.log(userData)
    } else {
      setError({ error, formErr: "Please enter correct data" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userData)
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
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-80 glass">
        <div className="w-full text-center my-3">
          <h2 className="text-2x1 text-black font-medium">Register</h2>
        </div>
        <form className="my-2" onSubmit={handleSubmit}>
          {!isNext ? (
            <div>
              <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                <input
                  type="text"
                  className="w-11/12 bg-transparent outline-none placeholder-black"
                  placeholder="Enter your First Name"
                  onChange={handleChange}
                  name="firstName"
                  value={userData.firstName}
                  required
                  
                />
                <div className="w-2/12 flex items-center justify-center">
                  <i className="fa-solid fa-user text-x1"></i>
                </div>
              </div>
              <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                <input
                  type="text"
                  className="w-11/12 bg-transparent outline-none placeholder-black"
                  placeholder="Enter your Last Name"
                  onChange={handleChange}
                  name="lastName"
                  value={userData.lastName}
                  required
                />
                <div className="w-2/12 flex items-center justify-center">
                  <i className="fa-solid fa-user text-x1"></i>
                </div>
              </div>
              <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                <input
                  type="tel"
                  className="w-11/12 bg-transparent outline-none placeholder-black"
                  placeholder="Enter your Mobile Number"
                  onChange={handleChange}
                  name="mobileNumber"
                  value={userData.mobileNumber}
                  required
                />
                <div className="w-2/12 flex items-center justify-center">
                  <i className="fa-solid fa-mobile text-x1"></i>
                </div>
              </div>
              <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                <input
                  type="email"
                  className="w-11/12 bg-transparent outline-none placeholder-black"
                  placeholder="Enter your Email Address"
                  onChange={handleChange}
                  name="emailId"
                  value={userData.emailId}
                  required
                />
                <div className="w-2/12 flex items-center justify-center">
                  <i className="fa-solid fa-envelope text-x1"></i>
                </div>
              </div>
              <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                <input
                  type="text"
                  className="w-11/12 bg-transparent outline-none placeholder-black"
                  placeholder="Enter your Address"
                  onChange={handleChange}
                  name="address"
                  value={userData.address}
                  required
                />
                <div className="w-2/12 flex items-center justify-center">
                  <i className="fa-solid fa-house text-x1"></i>
                </div>
              </div>
              {error.formErr && <p style={{ color: "red" }}>{error.f}</p>}
              <div className="mx-5 my-7 py-2">
                <button
                  onClick={handleNext}
                  className="bg-black w-full h-[35px] rounded-sm text-white"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                <input
                  type="number"
                  className="w-11/12 bg-transparent outline-none placeholder-black"
                  placeholder="Enter your Aadhaar Number"
                  value={userData.aadhaarNumber}
                  onChange={handleChange}
                  name="aadhaarNumber"
                  required
                />
                <div className="w-2/12 flex items-center justify-center">
                  <i className="fa-solid fa-id-card text-x1"></i>
                </div>
              </div>
              <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                <input
                  type="text"
                  className="w-11/12 bg-transparent outline-none placeholder-black"
                  placeholder="Enter your PAN Number"
                  value={userData.panNumber}
                  name="panNumber"
                  onChange={handleChange}
                  required
                />
                <div className="w-2/12 flex items-center justify-center">
                  <i className="fa-solid fa-address-card text-x1"></i>
                </div>
              </div>
              <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                <input
                  type="password"
                  className="w-11/12 bg-transparent outline-none placeholder-black"
                  placeholder="Enter your Strong Password"
                  value={userData.password}
                  name="password"
                  onChange={handleChange}
                  required
                />
                <div className="w-2/12 flex items-center justify-center">
                  <i className="fa-solid fa-lock text-x1"></i>
                </div>
              </div>
              <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                <input
                  type="password"
                  className="w-11/12 bg-transparent outline-none placeholder-black"
                  placeholder="Re-Enter your Password"
                  name="confirmPassword"
                  value={confirmPasword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  // onBlur={handleConfirmPassword}
                  onFocus={handleConfirmPassword}
                  required
                />
                <div className="w-2/12 flex items-center justify-center">
                  <i className="fa-solid fa-lock text-x1"></i>
                </div>
              </div>
              <div className="flex flex-col border-b-black border-b-2 mx-5 my-7 py-1">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Account Type
                  </InputLabel>
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
              {error.accountTypeErr && (
                <p style={{ color: "red" }}>{error.accountTypeErr}</p>
              )}
              <div className="mx-5 my-7 py-2">
                <button className="bg-black w-full h-[35px] rounded-sm text-white">
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

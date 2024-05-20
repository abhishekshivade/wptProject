import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CUSTOMER_SIGNUP_ROUTE2 } from "../../constants/AppRoutes";

export default function Registration() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailId: "",
    address: "",
  });

  const [error, setError] = useState({
    firstNameErr: "",
    lastNameErr: "",
    mobileNumberErr: "",
    emailIdErr: "",
    addressErr: "",
    formErr:''
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!error.firstNameErr && !error.lastNameErr && !error.mobileNumberErr && !error.emailIdErr && !error.addressErr){
      navigate(CUSTOMER_SIGNUP_ROUTE2);
    } else {
      setError({error,formErr:"Please enter correct data"});
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-80 glass">
        <div className="w-full text-center my-3">
          <h2 className="text-black font-bold text-2xl md:text-3xl mt-3">Register</h2>
        </div>
        <form className="my-2" onSubmit={handleSubmit}>
          <div>
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="text"
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your First Name"
              onChange={handleChange}
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
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-house text-x1"></i>
            </div>
          </div>
          {error.formErr && <p style={{ color: "red" }}>{error.f}</p>}
          <div className="mx-5 my-7 py-2">
            <button
              type="submit"
              className="bg-black w-20 h-[35px] text-white rounded-full mb-3 hover:bg-white hover:text-black hover:border hover:border-black"
            >
              Next
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

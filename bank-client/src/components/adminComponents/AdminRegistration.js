import React, { useState } from "react";
import { registerAdmin } from "../../services/adminServices";
import { useNavigate } from "react-router-dom";
import { ADMIN_LOGIN_ROUTE } from "../../constants/AppRoutes";

export default function AdminRegistration() {
  const [adminData, setAdminData] = useState({
    firstName: "",
    lastName: "",
    branchName: "",
    role: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    firstNameErr: "",
    lastNameErr: "",
    branchNameErr: "",
    roleErr: "",
    passwordErr: "",
    confirmPasswordErr: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => 
    setAdminData({ ...adminData, [e.target.name]: e.target.value });

  const handleConfirmPassword = (e) => {
    e.preventDefault();
    const confirmPasswordErr = adminData.password === confirmPassword ? null : "Password do not match";
    setError({ ...error, confirmPasswordErr });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerAdmin(adminData);

      if (response.status === 200) {
        navigate(ADMIN_LOGIN_ROUTE);
      }
    } catch (error) {
      setError("Please enter correct data");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black md:text-3xl">Register</h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center border-b-2 border-black">
            <input
              type="text"
              className="flex-grow bg-transparent outline-none placeholder-black"
              placeholder="Enter your First Name"
              onChange={handleChange}
              name="firstName"
              value={adminData.firstName}
              required
            />
            <i className="fa-solid fa-user text-xl"></i>
          </div>
          <div className="flex items-center border-b-2 border-black">
            <input
              type="text"
              className="flex-grow bg-transparent outline-none placeholder-black"
              placeholder="Enter your Last Name"
              onChange={handleChange}
              name="lastName"
              value={adminData.lastName}
              required
            />
            <i className="fa-solid fa-user text-xl"></i>
          </div>
          <div className="flex items-center border-b-2 border-black">
            <input
              type="text"
              className="flex-grow bg-transparent outline-none placeholder-black"
              placeholder="Enter Branch Name"
              onChange={handleChange}
              name="branchName"
              value={adminData.branchName}
              required
            />
            <i className="fa-solid fa-mobile text-xl"></i>
          </div>
          <div className="flex items-center border-b-2 border-black">
            <input
              type="text"
              className="flex-grow bg-transparent outline-none placeholder-black"
              placeholder="Enter your Role"
              onChange={handleChange}
              name="role"
              value={adminData.role}
              required
            />
            <i className="fa-solid fa-envelope text-xl"></i>
          </div>
          <div className="flex items-center border-b-2 border-black">
            <input
              type="password"
              className="flex-grow bg-transparent outline-none placeholder-black"
              placeholder="Enter password"
              onChange={handleChange}
              name="password"
              value={adminData.password}
              required
            />
            <i className="fa-solid fa-lock text-xl"></i>
          </div>
          <div className="flex items-center border-b-2 border-black">
            <input
              type="password"
              className="flex-grow bg-transparent outline-none placeholder-black"
              placeholder="Re-Enter password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              onBlur={handleConfirmPassword}
              required
            />
            <i className="fa-solid fa-lock text-xl"></i>
          </div>

          {error.confirmPasswordErr && <p className="text-red-500">{error.confirmPasswordErr}</p>}
          <div className="text-center">
            <button className="bg-black w-20 h-10 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

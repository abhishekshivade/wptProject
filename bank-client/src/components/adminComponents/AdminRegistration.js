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

  const [comfirmPassword,setConfirmPassword]=useState('')

  const [error, setError] = useState({
    firstNameErr: "",
    lastNameErr: "",
    branchNameErr: "",
    roleErr: "",
    passwordErr: "",
    confirmPasswordErr:''
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setAdminData({ ...adminData, [e.target.name]: e.target.value });

  const handleConfirmPassword=e=>{
    e.preventDefault()
    const confirmPasswordErr=adminData.password===comfirmPassword

    if(confirmPasswordErr){
      setError({...error,confirmPasswordErr:null})
    }else{
      setError({...error,confirmPasswordErr:'Password do not match'})
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerAdmin(adminData);
      // console.log(response)

      if (response.status === 200) {
        navigate(ADMIN_LOGIN_ROUTE);
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
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="text"
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your First Name"
              onChange={handleChange}
              name="firstName"
              value={adminData.firstName}
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
              value={adminData.lastName}
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
              placeholder="Enter Branch Name"
              onChange={handleChange}
              name="branchName"
              value={adminData.branchName}
              required
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-mobile text-x1"></i>
            </div>
          </div>
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="text"
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your ROle"
              onChange={handleChange}
              name="role"
              value={adminData.role}
              required
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-envelope text-x1"></i>
            </div>
          </div>
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="password"
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter password"
              onChange={handleChange}
              name="password"
              value={adminData.password}
              required
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-house text-x1"></i>
            </div>
          </div>
          
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="password"
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Re-Enter password"
              name="confirmPassword"
              value={comfirmPassword}
              onChange={e=>setConfirmPassword(e.target.value)}
              onBlur={handleConfirmPassword}
              required
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-house text-x1"></i>
            </div>
          </div>

          {error.confirmPasswordErr && <p style={{ color: "red" }}>{error.confirmPasswordErr}</p>}
          <div className="mx-5 my-7 py-2">
            <button className="bg-black w-full h-[35px] rounded-sm text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

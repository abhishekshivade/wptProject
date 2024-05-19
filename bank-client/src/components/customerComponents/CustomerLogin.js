import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {customerLogin} from "../../services/customerServices";
import { CUSTOMER_DASHBOARD } from "../../constants/AppRoutes";
import { getToken, storeToken } from "../../services/authServices";
import Eye from '../../assets/eye.svg'
import EyeSlash from '../../assets/eyeSlash.svg'

const CustomerLogin = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    customerId: "",
    password: "",
  });
  const [error, setError] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate(CUSTOMER_DASHBOARD);
    }
  }, [navigate]);

  const handleChange = (e) =>
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });

    
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response= await customerLogin(loginCredentials)
      // console.log(response)

      if(response.status===200){
        storeToken(response.data.token)
        navigate(CUSTOMER_DASHBOARD)
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="w-full h-[500px] flex items-center justify-center border">
      <div className="border-2 border black text-center rounded-lg py-2 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h2 className="text-black font-bold text-2xl md:text-3xl mt-3">Login</h2>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="text"
              value={loginCredentials.customerId}
              onChange={handleChange}
              required
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter Customer ID"
            />
          </div>
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type={passwordVisible ? "text" : "password"}
              value={loginCredentials.password}
              onChange={handleChange}
              required
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter Password"
            />
            <div className="w-2/12 flex items-center justify-center">               <i className="fa-solid fa-lock text-xl"></i>
             </div>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-0 pr-[60px] flex items-center justify-center text-xl"
            >{passwordVisible ? <img src={EyeSlash} alt=""/> :<img src={Eye} alt=""/>}
            </button>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="bg-black w-20 h-[35px] text-white rounded-full mb-3 hover:bg-white hover:text-black hover:border hover:border-black">Login</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerLogin;
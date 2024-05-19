import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../services/adminServices";
import { ADMIN_DASHBOARD } from "../../constants/AppRoutes";
import { getToken, storeToken } from "../../services/authServices";

const AdminLogin = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    employeeId: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate(ADMIN_DASHBOARD);
    }
  }, [navigate]);

  const handleChange = (e) =>
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response= await adminLogin(loginCredentials)
      // console.log(response)

      if(response.status===200){
        storeToken(response.data.token)
        navigate(ADMIN_DASHBOARD)
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center border">
      <div className="border text-center">
        <h2 className="text-2x1 text-black font-medium">Login</h2>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="text"
              value={loginCredentials.employeeId}
              onChange={handleChange}
              required
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter Employee ID"
            />
          </div>
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="password"
              value={loginCredentials.password}
              onChange={handleChange}
              required
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter Password"
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

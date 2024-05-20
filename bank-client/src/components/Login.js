import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "user" && password === "password") {
      alert("Login successful");
    } else {
      setError("Invalid username or password");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-full h-[500px] flex items-center justify-center border">
      <div className="border-2 border-black text-center rounded-lg py-2 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h1 className="text-black font-bold text-2xl md:text-3xl mt-3">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex border-b-black border-b-2 mx-5 py-1 mt-5">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter User Name"
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-user text-xl"></i>
            </div>
          </div>
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1 relative">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter Password"
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-lock text-xl"></i>
            </div>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-0 pr-[60px] flex items-center justify-center text-xl"
            >
              <i className={`fa-solid ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}></i>
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-black w-20 h-[35px] text-white rounded-full mb-3 hover:bg-white hover:text-black hover:border hover:border-black"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

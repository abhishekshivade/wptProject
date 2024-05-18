import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "user" && password === "password") {
      alert("Login successful");
    } else {
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter User Name"
            />
          </div>
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter Password"
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

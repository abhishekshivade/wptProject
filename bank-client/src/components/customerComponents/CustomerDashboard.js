import React from "react";

const CustomerDashboard = () => {
  return (
    <div className="w-screen text-center">
      <h1>CustomerDashboard</h1>
      <div className="flex justify-around items-center h-72">
        <div className="w-1/2"><h1>Personal Details</h1></div>
        <div className="w-1/2"><h1>Account Details</h1></div>
      </div>
      <div className="h-36"><h1>Transaction Details</h1></div>
    </div>
  );
};

export default CustomerDashboard;

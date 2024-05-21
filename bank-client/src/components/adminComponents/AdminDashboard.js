import React from "react";
import CustomerList from "./CustomerList";

const AdminDashboard = () => {

  const personalDetails=[{
    "CustomerID":"110008",
    "CustomerName":"ASD ZXC",
    "MobileNo" : "9561908666",
    "EmailID":"saurabhpande062@gmail.com",
    "Address":"MUMBAI",
    "AadharNo":"111122223333",
    "PanNo":"ABCDE1111X"
  },{
    "CustomerID": "110009",
    "CustomerName": "XYZ ABC",
    "MobileNo": "9561908777",
    "EmailID": "xyzabc@gmail.com",
    "Address": "DELHI",
    "AadharNo": "222233334444",
    "PanNo": "XYZEE1111Y"
  }]
  return (
    <div className="w-full min-h-screen p-4 bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Admin Details</h2>
          <div className="text-left space-y-2">
            <p>First Name: </p>
            <p>Last Name: </p>
            <p>Mobile Number: </p>
            <p>Email ID: </p>
            <p>Address: </p>
            <p>Aadhaar Number: </p>
            <p>PAN Number: </p>
          </div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
          <div className="text-left space-y-2">
            <p>Account Number:</p>
            <p>Branch Code:</p>
            <p>Balance:</p>
            <p>Account Type:</p>
          </div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg col-span-1 md:col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Transaction Details</h2>
          <div className="text-left space-y-2">
            <p>Transaction ID: </p>
            <p>Date: </p>
            <p>Amount:</p>
            <p>Status: </p>
          </div>
        </div>
      </div> */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Customer List Table</h2>
        {/* Add your table component here */}
        <CustomerList customer={personalDetails}></CustomerList>
      </div>
    </div>
  );
};

export default AdminDashboard;
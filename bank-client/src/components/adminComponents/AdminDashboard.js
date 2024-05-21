import React, { useEffect } from "react";
import CustomerList from "./CustomerList";
import { getToken } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import { BASE_ROUTE } from "../../constants/AppRoutes";

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

  
const navigate=useNavigate()

useEffect(()=>{
  if(!getToken()) navigate(BASE_ROUTE)
})

  return (
    <div className="w-full min-h-screen p-4 bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Customer List Table</h2>
        <CustomerList customer={personalDetails}></CustomerList>
      </div>
    </div>
  );
};

export default AdminDashboard;
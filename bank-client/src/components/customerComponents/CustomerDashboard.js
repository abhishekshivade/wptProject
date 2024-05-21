import React, { useEffect,useState} from "react";
import {TransactionTable} from './TransactionTable'
import { getCustomerId } from "../../services/authServices";
import { getPersonalDetails } from "../../services/customerServices";

const CustomerDashboard = () =>{
  const [personalDetails,setPersonalDetails]=useState()
  const [accouuntDetails,setAccountDetails]=useState()
  const [transactionDetails,setTransactionDetails]=useState()

  const customerId=getCustomerId()

  const getPrDetails=async()=>{
    
    setPersonalDetails(await getPersonalDetails(customerId))
    console.log(personalDetails)
  }
  
  useEffect(()=>{
    getPrDetails()
  },[])

  return (
    <div className="w-screen text-center">
      <h1 className="text-2xl font-bold mt-5">Customer Dashboard</h1>
      <div className="flex flex-col lg:flex-row justify-around items-start h-auto lg:h-72 mt-10 gap-2">
        <div className="w-full lg:w-5/12 p-5 border rounded-lg shadow-md mb-5 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          <div className="text-left space-y-2">
            <div>
              <strong>First Name:</strong>
            </div>
            <div>
              <strong>Last Name:</strong> 
            </div>
            <div>
              <strong>Mobile Number:</strong>
            </div>
            <div>
              <strong>Email ID:</strong> 
            </div>
            <div>
              <strong>Address:</strong> 
            </div>
            <div>
              <strong>Aadhaar Number:</strong> 
            </div>
            <div>
              <strong>PAN Number:</strong> 
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 p-5 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>
          <div className="text-left space-y-2">
            <div>
              <strong>Account Number:</strong> 
            </div>
            <div>
              <strong>Branch Code:</strong>
            </div>
            <div>
              <strong>Balance:</strong> 
            </div>
            <div>
              <strong>Account Type:</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="h-36 mt-10">
        <h1 className="text-xl font-semibold">Transaction Details</h1>
        {/* Add transaction details content here */}
        <TransactionTable/>
      </div>
    </div>
  );
};

export default CustomerDashboard
import React, { useEffect,useState} from "react";
import {TransactionTable} from './TransactionTable'
import { getCustomerId } from "../../services/authServices";
import { getPersonalDetails } from "../../services/customerServices";

const CustomerDashboard = () =>{
//   const [personalDetails,setPersonalDetails]=useState()
//   const [accouuntDetails,setAccountDetails]=useState()
//   const [transactionDetails,setTransactionDetails]=useState()

//   const customerId=getCustomerId()

//   const getPrDetails=async()=>{
    
//     setPersonalDetails(await getPersonalDetails(customerId))
//     console.log(personalDetails)
//   }
  
//   useEffect(()=>{
//     getPrDetails()
//   },[])

const personalDetails={
  "CustomerID":"110008",
  "CustomerName":"ASD ZXC",
  "MobileNo" : "9561908666",
  "EmailID":"saurabhpande062@gmail.com",
  "Address":"MUMBAI",
  "AadharNo":"111122223333",
  "PanNo":"ABCDE1111X"
}

const accountDetails={
  "account_no":"120000",
  "branch_code":"130000",
  "balance" : "0.00",
  "account_type":"savings",
  
}

  return (
    <div className="w-screen text-center">
      <h1 className="text-2xl font-bold mt-5">Customer Dashboard</h1>
      <div className="flex flex-col lg:flex-row justify-around items-start h-auto lg:h-72 mt-10 gap-2">
        <div className="w-full lg:w-5/12 p-5 border rounded-lg shadow-md mb-5 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          <div className="text-left space-y-2">
            
          <div>
              <strong>Customer ID:</strong> {personalDetails.CustomerID}
            </div>
            <div>
              <strong>First Name:</strong>{personalDetails.CustomerName}
            </div>
            <div>
              <strong>Mobile Number:</strong>{personalDetails.MobileNo}
            </div>
            <div>
              <strong>Email ID:</strong> {personalDetails.EmailID}
            </div>
            <div>
              <strong>Address:</strong> {personalDetails.Address}
            </div>
            <div>
              <strong>Aadhaar Number:</strong> {personalDetails.AadharNo}
            </div>
            <div>
              <strong>PAN Number:</strong> {personalDetails.PanNo}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 p-5 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>
          <div className="text-left space-y-2">
            <div>
              <strong>Account Number:</strong> {accountDetails.account_no}
            </div>
            <div>
              <strong>Branch Code:</strong>{accountDetails.branch_code}
            </div>
            <div>
              <strong>Balance:</strong> {accountDetails.balance}
            </div>
            <div>
              <strong>Account Type:</strong>{accountDetails.account_type}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-36 mt-10">
        <h1 className="text-xl font-semibold">Transaction Details</h1>
        
        <TransactionTable/>
      </div> */}
    </div>
  );
};

export default CustomerDashboard
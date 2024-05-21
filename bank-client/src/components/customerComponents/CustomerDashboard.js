import React, { useEffect, useState } from "react";
import { TransactionTable } from "./TransactionTable";
import { getCustomerId, getToken } from "../../services/authServices";
import {
  getPersonalDetails,
  getAllAccounts,
  getTransactionDetails,
  getAccountDetails,
} from "../../services/customerServices";
import { useNavigate } from "react-router-dom";
import { BASE_ROUTE } from "../../constants/AppRoutes";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CustomerDashboard = () => {
  const [personalDetails, setPersonalDetails] = useState([]);
  const [accountList, setAccountList] = useState([]);
  const [accountDetails, setAccountDetails] = useState([]);
  const [accountNumber, setAccountNumber] = useState();
  //   const [transactionDetails,setTransactionDetails]=useState()

  const customerId = getCustomerId();

  useEffect(() => {
    const getPrDetails = async () => {
      setPersonalDetails(await getPersonalDetails(customerId));
      setAccountList(await getAllAccounts(customerId));
    };
    getPrDetails();
  }, [customerId]);

  useEffect(() => {
    const setAcDetails = async () => {
      if (accountList.length > 0)
        setAccountNumber(await accountList[0].account_no);
    };
    setAcDetails();
  }, [accountList]);

  // useEffect(()=>{},[accountNumber])

  // useEffect(() => {
  //   setTimeout()
  //   if (accountNumber) {
  //     const getAcDetails = async () => {
  //       console.log("Account No : ", accountNumber);
  //       setAccountDetails(await getAccountDetails(accountNumber));
  //     };
  //     getAcDetails();
  //   }
  // }, [accountNumber]);

  // useEffect(() => {}, [accountDetails]);

  // useEffect(() => console.log(accountDetails));

  const handleAccountChage = (e) => setAccountNumber(e.target.value);

  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) navigate(BASE_ROUTE);
  });

  // const perDetails = {
  //   CustomerID: "110008",
  //   CustomerName: "ASD ZXC",
  //   MobileNo: "9561908666",
  //   EmailID: "saurabhpande062@gmail.com",
  //   Address: "MUMBAI",
  //   AadharNo: "111122223333",
  //   PanNo: "ABCDE1111X",
  // };

  // const accountDetails = {
  //   account_no: "120000",
  //   branch_code: "130000",
  //   balance: "0.00",
  //   account_type: "savings",
  // };

  return (
    <div className="w-screen text-center">
      <div>
        <h1 className="text-2xl font-bold mt-5">Customer Dashboard</h1>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Account Number</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={accountList.length > 0 ? accountNumber : "Account Number"}
            name="accountNumber"
            label="Account Number"
            onChange={handleAccountChage}
            required
          >
            {accountList.map((accountNo) => {
              return (
                <MenuItem value={accountNo.account_no}>
                  {accountNo.account_no}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-start h-auto lg:h-72 mt-10 gap-2">
        <div className="w-full lg:w-5/12 p-5 border rounded-lg shadow-md mb-5 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          {personalDetails.length > 0 ? (
            <div className="text-left space-y-2">
              <div>
                <strong>Customer ID : </strong> {personalDetails[0].CustomerID}
              </div>
              <div>
                <strong>First Name : </strong>
                {personalDetails[0].CustomerName}
              </div>
              <div>
                <strong>Mobile Number : </strong>
                {personalDetails[0].MobileNo}
              </div>
              <div>
                <strong>Email ID : </strong> {personalDetails[0].EmailID}
              </div>
              <div>
                <strong>Address : </strong> {personalDetails[0].Address}
              </div>
              <div>
                <strong>Aadhaar Number : </strong> {personalDetails[0].AadharNo}
              </div>
              <div>
                <strong>PAN Number : </strong> {personalDetails[0].PanNo}
              </div>
            </div>
          ) : (
            <div>
              <p>Missing Personal Details</p>
            </div>
          )}
        </div>
        <div className="w-full lg:w-5/12 p-5 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>
          <div className="text-left space-y-2">
            <div>
              <strong>Account Number:</strong> {accountDetails.account_no}
            </div>
            <div>
              <strong>Branch Code:</strong>
              {accountDetails.branch_code}
            </div>
            <div>
              <strong>Balance:</strong> {accountDetails.balance}
            </div>
            <div>
              <strong>Account Type:</strong>
              {accountDetails.account_type}
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

export default CustomerDashboard;

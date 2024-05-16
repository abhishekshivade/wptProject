import {
  ACC_DETAILS_TABLE,
  BRANCH_DETAILS_TABLE,
  CUST_DETAILS_TABLE,
} from "../Utility/constants.js";
import { dbConnection } from "../Utility/dbConnection.js";

export const createAccount = (req, res) => {
  // console.log("creating Account")
  const {
    firstName,
    lastName,
    mobileNumber,
    emailId,
    address,
    aadhaarNumber,
    panNumber,
    password,
    accountType,
  } = req.body;

  console.log(firstName," ",lastName," ",mobileNumber," ",emailId," ",address," ",aadhaarNumber," ",panNumber," ",password," ",accountType)

  const registerCustomerQuery = `insert into ${CUST_DETAILS_TABLE} (customerName,MobileNo,EmailID,Address,AadharNo,PanNo,Password) values ('${firstName}" "${lastName}','${mobileNumber}','${emailId}','${address}','${aadhaarNumber}','${panNumber}','${password}')`;

  dbConnection.query(registerCustomerQuery, (error, result) => {
    if (error) {
      // console.log(error)
      res
        .status(500)
        .send({ message: "Failed to register user, Something went wrong...!" });
    } else {
      // console.log(result)
      //         res.status(200).send({message:"User Registered Successfully...!"})
      //     }
      // })

      const customerIdQry = `select CustomerID from ${CUST_DETAILS_TABLE} where PanNo='${panNumber}'`;

      dbConnection.query(customerIdQry, (error, result) => {
        if (error) {
          // console.log(error)
          res.status(500).send({ message: "Failed to Retrive Customer ID" });
        } else {
            // console.log(result);
          const customerId = result[0].CustomerID;
          
          const branchCodeQry = `select branch_code from ${BRANCH_DETAILS_TABLE} where address='${address}'`;

          dbConnection.query(branchCodeQry, (error, result) => {
            if (error) {
            //   console.log(error)
              res.status(500).send({ message: "Failed to retrive branch code" });
            } else {
              const branchCode = result[0].branch_code;
              const createAccountQuery = `insert into ${ACC_DETAILS_TABLE} (branch_code,balance,account_type,customerID) values(${branchCode},0.0,'${accountType}',${customerId})`;

              dbConnection.query(createAccountQuery, (error, result) => {
                if (error) {
                //   console.log(error)
                  res
                    .status(500)
                    .send({
                      message:
                        "Failed to create account, Something went wrong...!",
                    });
                } else {
                  // console.log(result)
                  res
                    .status(200)
                    .send({ message: "Account Created Successfully...!" });
                }
              });
            }
          });
        }
      });
    }
  });
};

import bcrypt from "bcryptjs";
const { hashSync } = bcrypt;
import {
  BRANCH_DETAILS_TABLE,
  EMP_DETAILS_TABLE,
} from "../Utility/constants.js";
import { dbConnection } from "../Utility/dbConnection.js";

export const createAdmin = (req, res) => {
  // console.log("creating Account")
  const { firstName, lastName, branchName, role, password } = req.body;

    console.log(firstName," ",lastName," ",role," ",password)

  const encryptedPassword = hashSync(password, 10);

  const branchCodeQry = `select branch_code from ${BRANCH_DETAILS_TABLE} where address='${branchName}'`;

  dbConnection.query(branchCodeQry, (error, result) => {
    if (error) {
      //   console.log(error)
      res.status(500).send({ message: "Failed to retrive branch code" });
    } else {
      const branchCode = result[0].branch_code;

      const registerAdminQuery = `insert into ${EMP_DETAILS_TABLE} (emp_name,role,branch_code,Password) values ('${firstName} ${lastName}','${role}','${branchCode}','${encryptedPassword}')`;

      dbConnection.query(registerAdminQuery, (error, result) => {
        if (error) {
          console.log(error)
          res
            .status(500)
            .send({
              message: "Failed to register user, Something went wrong...!",
            });
        } else {
          console.log(result);
          res.status(200).send({ message: "User Registered Successfully...!" });
        }
      });

      // const customerIdQry = `select CustomerID from ${CUST_DETAILS_TABLE} where PanNo='${panNumber}'`;

      // dbConnection.query(customerIdQry, (error, result) => {
      //   if (error) {
      //     // console.log(error)
      //     res.status(500).send({ message: "Failed to Retrive Customer ID" });
      //   } else {
      //       // console.log(result);
      //     const customerId = result[0].CustomerID;

      //   const branchCodeQry = `select branch_code from ${BRANCH_DETAILS_TABLE} where address='${address}'`;

      //   dbConnection.query(branchCodeQry, (error, result) => {
      //     if (error) {
      //     //   console.log(error)
      //       res.status(500).send({ message: "Failed to retrive branch code" });
      //     } else {
      //       const branchCode = result[0].branch_code;
      //       const createAccountQuery = `insert into ${ACC_DETAILS_TABLE} (branch_code,balance,account_type,customerID) values(${branchCode},0.0,'${accountType}',${customerId})`;

      // dbConnection.query(createAccountQuery, (error, result) => {
      //   if (error) {
      //     console.log(error)
      //     res
      //       .status(500)
      //       .send({
      //         message:
      //           "Failed to create account, Something went wrong...!",
      //       });
      //   } else {
      // console.log(result)
      //   res
      //     .status(200)
      //     .send({ message: "Account Created Successfully...!" });
      // }
      // });
      // }
      // });
      // }
      // });
    }
  });
};

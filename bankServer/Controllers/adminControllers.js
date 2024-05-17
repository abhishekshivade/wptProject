import bcrypt from "bcryptjs";
const { hashSync } = bcrypt;
import {
  BRANCH_DETAILS_TABLE,
  EMP_DETAILS_TABLE,
} from "../Utility/constants.js";
import { dbConnection } from "../Utility/dbConnection.js";

export const createAdmin = (req, res) => {

  const { firstName, lastName, branchName, role, password } = req.body;

  // console.log(firstName, " ", lastName, " ", role, " ", password);

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
          // console.log(error);
          res.status(500).send({
            message: "Failed to register user, Something went wrong...!",
          });
        } else {
          console.log(result);
          res.status(200).send({ message: "User Registered Successfully...!" });
        }
      });
    }
  });
};

// import { compareSync } from "bcrypt";
// import { EMP_DETAILS_TABLE } from "../Utility/constants.js";
// import { dbConnection } from "../Utility/dbConnection.js";

export const fetchEmpDetails = (req, res) => {
  const qry = `select * from ${EMP_DETAILS_TABLE}`;
  dbConnection.query(qry, (error, results) => {
    if (error) {
      res.status(500).send({ message: "Something went wrong" });
    } else {
      res.status(200).send(results);
    }
  });
};

export const adminLogin = (req, res) => {
   // console.log("calling");
  const { username, password } = req.body;
  const qry = `select * from ${EMP_DETAILS_TABLE} where emp_name='${username}'`;
  dbConnection.query(qry, (error, result) => {
    if (error) {
       // console.log(error);
      res.status(500).send({ message: "Something went wrong....!" });
    } else {
      if (result.length == 0) {
        res.status(400).send({ message: "Invalid username" });
      } else {
       // console.log(result);
        // const encryptedPassword = result[0].password;
        //if(compareSync(password,encryptedPassword)){
        if (password == result[0].password) {
          res.status(200).send({ message: "Login successful" });
        } else {
          res
            .status(400)
            .send({ message: "Invalid password for the mentioned username" });
        }
      }
    }
  });
};





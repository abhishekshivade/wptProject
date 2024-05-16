import { CUST_DETAILS_TABLE } from '../Utility/constants.js'
import { dbConnection } from '../Utility/dbConnection.js'

export const createAccount = (req, res) => {
    const { firstName, lastName, mobileNumber, emailId, address, aadhaarNumber, panNumber, password, accountType } = req.body;

    const qry = `insert into ${CUST_DETAILS_TABLE} values ('${firstName}" "${lastName}','${mobileNumber}','${emailId}','${address}','${aadhaarNumber}','${panNumber}','${password}')`


}

export const customerLogin = (req, res) => {
    const { CustomerID, Password } = req.body;
    console.log(Password);
    const qry = `select * from ${CUST_DETAILS_TABLE} where CustomerID=${CustomerID}`
    dbConnection.query(qry, (error, result) => {
        console.log(result);

        if (error) {
            res.status(500).send({ message: "Somehing went wrong.....!" });
        } else {
            if (result.length == 0) {
                res.status(400).send({ message: "Invalid CustomerID" });
            }
            else {
                if (Password == result[0].Password) {
                    res.status(200).send({ message: "Login successful" });
                }
                else {
                    res
                        .status(400)
                        .send({ message: "Invalid password for the mentioned CustmerID" });
                }
            }
        }

    }

    )
}


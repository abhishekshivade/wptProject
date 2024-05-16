import {CUST_DETAILS_TABLE} from '../Utility/constants.js'

export const createAccount=(req,res)=>{
    const {firstName,lastName,mobileNumber,emailId,address,aadhaarNumber,panNumber,password,accountType}=req.body;

    const qry = `insert into ${CUST_DETAILS_TABLE} values ('${firstName}" "${lastName}','${mobileNumber}','${emailId}','${address}','${aadhaarNumber}','${panNumber}','${password}')`

    
}
import express from "express";
import {PORT} from "./Utility/constants.js";
import { dbConnection } from "./Utility/dbConnection.js";
import { customerRouter } from "./Routes/customerRoutes.js";

const app = express();

app.use(express.json());

app.use('/customers',customerRouter)

app.use('/',(req,res)=>{res.send('Welcome to RuPay Bank Server')})

app.listen(PORT, () => {
    dbConnection.connect(error=>{
        if(error){
            console.log("Error while connecting Db");
            console.log(error)
        }else{
            console.log("Db connected Successfully...!")
        }
    })
  console.log(`\nServer is listening on port ${PORT}\n`);
  console.log(`Local            : http://localhost:${PORT}`);
  console.log(`On Your Network  : http://192.168.0.107:${PORT}`)
});

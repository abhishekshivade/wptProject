// import React from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import FormControl from "@mui/material/FormControl";

// export default function RegistrationNext() {
//   const [accountType, setAccountType] = React.useState("");

//   const handleChange = (event) => {
//     setAccountType(event.target.value);
//   };

//   return (
//     <div className="w-full h-screen flex items-center justify-center">
//       <div className="w-80 glass">
//         <div className="w-full text-center my-3">
//           <h2 className="text-2x1 text-black font-medium">Register</h2>
//         </div>
//         <form className="my-2">
//           <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
//             <input
//               type="number"
//               className="w-11/12 bg-transparent outline-none placeholder-black"
//               placeholder="Enter your Aadhaar Number"
//             />
//             <div className="w-2/12 flex items-center justify-center">
//               <i className="fa-solid fa-id-card text-x1"></i>
//             </div>
//           </div>
//           <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
//             <input
//               type="text"
//               className="w-11/12 bg-transparent outline-none placeholder-black"
//               placeholder="Enter your PAN Number"
//             />
//             <div className="w-2/12 flex items-center justify-center">
//               <i className="fa-solid fa-address-card text-x1"></i>
//             </div>
//           </div>
//           <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
//             <input
//               type="password"
//               className="w-11/12 bg-transparent outline-none placeholder-black"
//               placeholder="Enter your Strong Password"
//             />
//             <div className="w-2/12 flex items-center justify-center">
//               <i className="fa-solid fa-lock text-x1"></i>
//             </div>
//           </div>
//           <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
//             <input
//               type="password"
//               className="w-11/12 bg-transparent outline-none placeholder-black"
//               placeholder="Enter your Confirm Password"
//             />
//             <div className="w-2/12 flex items-center justify-center">
//               <i className="fa-solid fa-lock text-x1"></i>
//             </div>
//           </div>
//           <div className="flex flex-col border-b-black border-b-2 mx-5 my-7 py-1">
//             <FormControl fullWidth>
//               <InputLabel id="demo-simple-select-label">
//                 Account Type
//               </InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={accountType}
//                 label="Account Type"
//                 onChange={handleChange}
//               >
//                 <MenuItem value="Savings">Savings</MenuItem>
//                 <MenuItem value="Current">Current</MenuItem>
//                 <MenuItem value="Loan">Loan</MenuItem>
//                 <MenuItem value="FD">Fixed Deposit</MenuItem>
//               </Select>
//             </FormControl>
//           </div>
//           <div className="mx-5 my-7 py-2">
//             <button className="bg-black w-full h-[35px] rounded-sm text-white">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

export default function RegistrationNext() {
  const [accountType, setAccountType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 md:p-8 glass">
        <div className="w-full text-center my-3">
          <h2 className="text-2xl text-black font-medium">Register</h2>
        </div>
        <form className="my-2">
          <div className="flex items-center border-b-black border-b-2 mx-1 md:mx-5 my-4 py-1">
            <input
              type="number"
              className="w-10/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your Aadhaar Number"
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-id-card text-xl"></i>
            </div>
          </div>
          <div className="flex items-center border-b-black border-b-2 mx-1 md:mx-5 my-4 py-1">
            <input
              type="text"
              className="w-10/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your PAN Number"
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-address-card text-xl"></i>
            </div>
          </div>
          <div className="flex items-center border-b-black border-b-2 mx-1 md:mx-5 my-4 py-1">
            <input
              type={showPassword ? "text" : "password"}
              className="w-10/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your Strong Password"
            />
            <div className="w-2/12 flex items-center justify-center cursor-pointer" onClick={togglePasswordVisibility}>
              <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} text-xl`}></i>
            </div>
          </div>
          <div className="flex items-center border-b-black border-b-2 mx-1 md:mx-5 my-4 py-1">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-10/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter your Confirm Password"
            />
            <div className="w-2/12 flex items-center justify-center cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
              <i className={`fa-solid ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"} text-xl`}></i>
            </div>
          </div>
          <div className="flex flex-col border-b-black border-b-2 mx-1 md:mx-5 my-4 py-1">
            <FormControl fullWidth>
              <InputLabel id="account-type-label">Account Type</InputLabel>
              <Select
                labelId="account-type-label"
                id="account-type"
                value={accountType}
                label="Account Type"
                onChange={handleChange}
              >
                <MenuItem value="Savings">Savings</MenuItem>
                <MenuItem value="Current">Current</MenuItem>
                <MenuItem value="Loan">Loan</MenuItem>
                <MenuItem value="FD">Fixed Deposit</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mx-1 md:mx-5 my-7 py-2">
            <button className="bg-black w-full h-[35px] rounded-sm text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


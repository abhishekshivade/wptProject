import React from "react";

export default function Registration(){

    return(
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-80 glass">
                <div className="w-full text-center my-3">
                    <h2 className="text-2x1 text-black font-medium">Register</h2>
                 </div>
                 <form className="my-2">
                    <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                        <input type="text" className="w-11/12 bg-transparent outline-none placeholder-black"
                          placeholder="Enter your First Name"
                        />
                        <div className="w-2/12 flex items-center justify-center">
                            <i className='fa-solid fa-user text-x1'></i>
                        </div>
                    </div>
                    <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                        <input type="text" className="w-11/12 bg-transparent outline-none placeholder-black"
                          placeholder="Enter your Last Name"
                        />
                        <div className="w-2/12 flex items-center justify-center">
                            <i className='fa-solid fa-user text-x1'></i>
                        </div>
                    </div>
                    <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                        <input type="text" className="w-11/12 bg-transparent outline-none placeholder-black"
                          placeholder="Enter your Mobile Number"
                        />
                        <div className="w-2/12 flex items-center justify-center">
                            <i className='fa-solid fa-mobile text-x1'></i>
                        </div>
                    </div>
                    <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                        <input type="email" className="w-11/12 bg-transparent outline-none placeholder-black"
                          placeholder="Enter your Email Address"
                        />
                        <div className="w-2/12 flex items-center justify-center">
                            <i className='fa-solid fa-envelope text-x1'></i>
                        </div>
                    </div>
                    <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                        <input type="text" className="w-11/12 bg-transparent outline-none placeholder-black"
                          placeholder="Enter your Address"
                        />
                        <div className="w-2/12 flex items-center justify-center">
                            <i className='fa-solid fa-house text-x1'></i>
                        </div>
                    </div>
                    <div className="mx-5 my-7 py-2">
                        <button className="bg-black w-full h-[35px] rounded-sm text-white">Next</button>
                    </div>
                 </form>
        </div>
        </div>

    );
}
import React from "react";

function Register() {
  return (
    <div className="section-container py-20">
      <div className="flex flex-col justify-center items-center ">
        <div className="border flex flex-col gap-2 rounded-lg p-2 w-[40%]">
            <div className="">
                <h1 className="text-2xl font-bold">Register</h1>
            </div>
          <input type="email" className="border-2 rounded-lg  outline-none text-xs p-2 " placeholder="Email"/>
          <input type="text" className="border-2 rounded-lg  outline-none text-xs p-2 " placeholder="Username"/>
          <input type="password" className="border-2 rounded-lg  outline-none text-xs p-2 " placeholder="Password"/>
          <input type="password" className="border-2 rounded-lg  outline-none text-xs p-2 " placeholder="ConfirmPassword"/>

          <button className="text-white font-bold bg-primary rounded-full p-2 my-4">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;

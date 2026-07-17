import React, { useState } from "react";
import userLoginImg from "../assets/images/userlogin.png";

const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] =useState("")

  function submitHandler(e) {
  e.preventDefault();

  console.log("Email:", email);
  console.log("Password:", password);

  setEmail("");
  setPassword("");
}

  return (
    <div className="flex h-screen">
      {/* left part */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${userLoginImg})` }}
      ></div>

      {/* Right Side */}
      <div className="w-1/2 flex justify-center items-center">
        <form onSubmit={submitHandler} className="flex flex-col gap-4 w-80">
          <h1 className="text-3xl font-bold">Login</h1>

          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded-md p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          
          <input
            type="password"
            placeholder="Enter your Password"
            className="border rounded-md p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button 
          type="submit" 
          className="bg-green-700 text-white p-3 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
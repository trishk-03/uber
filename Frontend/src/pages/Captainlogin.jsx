import React, { useState } from "react";
import userLoginImg from "../assets/images/userlogin.png";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/captainService";

const Captainlogin = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    
    const res = await login(email, password)
    console.log(email,password)

    setEmail("");
    setPassword("");
    if(res.status == 200){
    navigate("/dashboard");
    }
    else{
      alert("Wrong details")
    } 
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-emerald-700 font-sans antialiased">
      <div
        className="hidden md:flex md:w-1/2 relative rounded-4xl overflow-hidden"
      >
        <img src={userLoginImg} className="absolute inset-0 h-full w-full object-cover" alt="Captain login background" />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative z-10 flex h-full flex-col justify-between gap-6 p-10 text-white">
          <div>
            <span className="inline-flex rounded-full bg-amber-300/15 px-4 py-2 text-sm font-semibold text-amber-100 ring-1 ring-amber-100/20">
              Captain Portal
            </span>
            <h2 className="mt-8 text-4xl font-bold">Captain Login</h2>
            <p className="mt-4 max-w-md text-sm text-slate-200/85 leading-7">
              Sign in to receive ride requests, manage trips, and keep your earnings flowing.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm text-amber-200 font-semibold">Quick access</p>
              <p className="mt-2 text-slate-200 text-sm">Get back to the road faster with one tap login.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm text-amber-200 font-semibold">Driver focus</p>
              <p className="mt-2 text-slate-200 text-sm">Track your current rides and accept new requests instantly.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-10 sm:px-12 bg-white/10 backdrop-blur-xl border border-white/10 rounded-4xl shadow-2xl">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Captain Login
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-200/90">
              Enter your credentials and get back on the road.
            </p>
          </div>

          <form onSubmit={submitHandler} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="Enter your emaik"
                className="w-full border border-white/10 rounded-3xl p-4 text-white bg-slate-950/70 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent focus:bg-slate-900/90 transition-all duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full border border-white/10 rounded-3xl p-4 text-white bg-slate-950/70 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent focus:bg-slate-900/90 transition-all duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-semibold p-3.5 rounded-3xl shadow-lg shadow-emerald-500/30 transition-all duration-200 active:transform active:scale-[0.99] mt-2"
            >
              Log In
            </button>
          </form>

          <div className="pt-4 border-t border-white/10 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-slate-200/80">
              New user?{" "}
              <Link to="/signup" className="text-emerald-200 font-semibold hover:underline decoration-2 underline-offset-2">
                Sign up
              </Link>
            </p>

            <Link
              to="/login"
              className="w-full inline-flex justify-center items-center bg-slate-800/80 border border-white/10 text-white font-medium p-3 rounded-3xl hover:bg-slate-700/90 transition-colors duration-200 text-sm"
            >
              Join as a User
            </Link>
          </div>
        </div>
      </div>

      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center relative rounded-4xl overflow-hidden ml-8"
        style={{ backgroundImage: `url(${userLoginImg})` }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default Captainlogin;

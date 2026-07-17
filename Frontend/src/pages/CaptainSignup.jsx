import React, { useState } from "react";
import userLoginImg from "../assets/images/userlogin.png"; 
import { Link, useNavigate } from "react-router-dom";
import { captainSignup } from "../services/captainService";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState(1);
  const [vehicleType, setVehicleType] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const res = await captainSignup(firstName,lastName,email,password,color,plate, capacity,vehicleType)

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setColor("");
    setPlate("");
    setCapacity(1);
    setVehicleType("");
    console.log(res)
    if(res.status = 201){
      navigate("/dashboard")
    }
    else{
      console.log("Failed")
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-emerald-700 font-sans antialiased">
      <div
        className="hidden md:flex md:w-1/2 relative rounded-4xl overflow-hidden"
      >
        <img src={userLoginImg} className="absolute inset-0 h-full w-full object-cover" alt="Captain signup background" />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative z-10 flex h-full flex-col justify-between gap-6 p-10 text-white">
          <div>
            <span className="inline-flex rounded-full bg-amber-300/15 px-4 py-2 text-sm font-semibold text-amber-100 ring-1 ring-amber-100/20">
              Captain Portal
            </span>
            <h2 className="mt-8 text-4xl font-bold">Captain Signup</h2>
            <p className="mt-4 max-w-md text-sm text-slate-200/85 leading-7">
              Register your vehicle and become part of the GoRide fleet. Start accepting rides right away.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm text-amber-200 font-semibold">Start earning</p>
              <p className="mt-2 text-slate-200 text-sm">Set up your profile and begin receiving ride requests quickly.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm text-amber-200 font-semibold">Be visible</p>
              <p className="mt-2 text-slate-200 text-sm">Show your availability and connect with riders nearby.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-10 sm:px-12 bg-white/10 backdrop-blur-xl border border-white/10 rounded-4xl shadow-2xl">
        <div className="w-full max-w-lg space-y-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Register as a Captain
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-200/90">
              Join our fleet! Add your details and vehicle information.
            </p>
          </div>

          <form onSubmit={submitHandler} className="space-y-4">
            <div className="border-b border-white/10 pb-1">
              <h2 className="text-sm font-semibold text-emerald-200 uppercase tracking-wider">Personal Details</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">First Name</label>
                <input
                  type="text"
                  required
                  minLength={3}
                  placeholder="Enter your name"
                  className="w-full border border-white/10 rounded-3xl p-3.5 text-white bg-slate-950/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent focus:bg-slate-900/90 transition-all"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">Last Name <span className="text-slate-400 font-normal">(Optional)</span></label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full border border-white/10 rounded-3xl p-3.5 text-white bg-slate-950/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent focus:bg-slate-900/90 transition-all"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="Enter your Email"
                className="w-full border border-white/10 rounded-3xl p-3.5 text-white bg-slate-950/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent focus:bg-slate-900/90 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1">Password</label>
              <input
                type="password"
                required
                minLength={6}
                placeholder="Minimum 6 characters"
                className="w-full border border-white/10 rounded-3xl p-3.5 text-white bg-slate-950/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent focus:bg-slate-900/90 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="border-b border-white/10 pb-1 pt-2">
              <h2 className="text-sm font-semibold text-emerald-200 uppercase tracking-wider">Vehicle Details</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">Vehicle Color</label>
                <input
                  type="text"
                  required
                  minLength={3}
                  placeholder="e.g. Black"
                  className="w-full border border-white/10 rounded-3xl p-3.5 text-white bg-slate-950/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent focus:bg-slate-900/90 transition-all"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">Plate Number</label>
                <input
                  type="text"
                  required
                  minLength={3}
                  placeholder="e.g. UP78 GM 7210"
                  className="w-full border border-white/10 rounded-3xl p-3.5 text-white bg-slate-950/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent focus:bg-slate-900/90 transition-all"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">Passenger Capacity</label>
                <input
                  type="number"
                  required
                  min={1}
                  className="w-full border border-white/10 rounded-3xl p-3.5 text-white bg-slate-950/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent focus:bg-slate-900/90 transition-all"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">Vehicle Type</label>
                <select
                  required
                  className="w-full border border-white/10 rounded-3xl p-3.5 text-white bg-slate-950/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent focus:bg-slate-900/90 transition-all"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  <option value="" disabled hidden>Select Type</option>
                  <option value="car">Car</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 text-slate-950 font-bold p-3.5 rounded-3xl shadow-lg shadow-amber-500/30 transition-all active:transform active:scale-[0.99] mt-4"
            >
              Create Captain Account
            </button>
          </form>

          <div className="pt-4 border-t border-white/10 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-slate-200/80">
              Already have a captain account?{" "}
              <Link to="/captain-login" className="text-amber-200 hover:text-amber-100 font-bold hover:underline">
                Login here
              </Link>
            </p>

            <Link
              to="/signup"
              className="w-full inline-flex justify-center items-center text-white bg-emerald-500 border border-emerald-400 font-semibold p-3 rounded-3xl hover:bg-emerald-400 transition-colors duration-200 text-sm"
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
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-900/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default CaptainSignup;
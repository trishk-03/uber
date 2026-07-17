import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/images/Home.jpg";

const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-slate-950/95 via-slate-900/50 to-transparent" />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col justify-center gap-6 text-center md:text-left">
          <span className="inline-flex rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-200/20">
            Welcome to GoRide
          </span>

          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Ride smarter, every time.
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-200/85 leading-8">
              Fast pickups, transparent fares, and trusted captains wherever you go.
              Choose whether you want to ride or drive, all from one app.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/login" className="inline-flex w-full justify-center rounded-3xl bg-emerald-400 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02] sm:w-auto">
              Book a Ride
            </Link>
            <Link to="/captain-login" className="inline-flex w-full justify-center rounded-3xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20 sm:w-auto">
              Drive with GoRide
            </Link>
          </div>
        </div>

        <div className="relative flex-1 rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl text-white">
          <div className="absolute inset-0 bg-slate-950/35 rounded-[32px]" />
          <div className="relative space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/80">What GoRide offers</p>
              <h2 className="mt-3 text-3xl font-semibold">A polished ride experience for every route.</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <h3 className="text-lg font-semibold text-white">User Booking</h3>
                <p className="mt-2 text-slate-300 text-sm">Find rides, compare prices, and track your captain in real-time.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <h3 className="text-lg font-semibold text-white">Captain Dashboard</h3>
                <p className="mt-2 text-slate-300 text-sm">Receive requests, manage vehicles, and earn consistently.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <h3 className="text-lg font-semibold text-white">Instant support</h3>
                <p className="mt-2 text-slate-300 text-sm">Clear communication and trusted service every step of the way.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <h3 className="text-lg font-semibold text-white">Secure access</h3>
                <p className="mt-2 text-slate-300 text-sm">Safe authentication and easy account control for all users.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
"use client";

import Image from "next/image";
import { useState } from "react";
import LoginForm from "./login";
import RegisterForm from "./registration";

export default function Header() {
  const [activeForm, setActiveForm] = useState<"login" | "register" | null>(null);

  return (
    <div className="font-instrument-serif min-h-screen bg-[#121212] flex flex-col">
      {/* Top Navigation */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/SEVORA logo.png" alt="Sevora Logo" width={200} height={50} className="h-[45px] w-[200px]" />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setActiveForm("login")}
            className={`px-4 py-2 rounded-md text-sm font-medium border ${
              activeForm === "login"
                ? "bg-black text-white border-black"
                : "text-white border-gray-400 hover:bg-gray-800"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveForm("register")}
            className={`px-4 py-2 rounded-md text-sm font-medium border ${
              activeForm === "register"
                ? "bg-black text-white border-black"
                : "text-white border-gray-400 hover:bg-gray-800"
            }`}
          >
            Register
          </button>
        </div>
      </header>

      {/* Banner + Form Section */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-12">
        {/* Left: Banner Text */}
        <div className="flex-1 text-left text-white ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-pink-300">Sevora</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg">
            Discover beauty that’s truly yours. Login or create your account to explore exclusive offers and products.
          </p>
        </div>

        {/* Right: Conditional Form */}
        <div className="flex-1 flex items-center justify-center">
  {activeForm === "login" && <LoginForm />}
  {activeForm === "register" && <RegisterForm />}
  {!activeForm && (
    <div className="text-gray-400 text-center">
      Click "Login" or "Register" to continue.
    </div>
  )}
</div>

      </main>
    </div>
  );
}

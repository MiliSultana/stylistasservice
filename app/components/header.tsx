"use client";

import Image from "next/image";
import { useState } from "react";
import LoginForm from "./login";
import RegisterForm from "./registration";

export default function Header() {
  const [activeForm, setActiveForm] = useState<"login" | "register" | null>(null);

  return (
    <div className="font-instrument-serif bg-[#121212] min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-20 py-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Image
            src="/SEVORA logo.png"
            alt="Sevora Logo"
            width={200}
            height={50}
            className="h-[45px] w-[200px]"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={() =>
              setActiveForm(activeForm === "login" ? null : "login")
            }
            className={`px-4 py-2 rounded-md text-sm font-medium border ${
              activeForm === "login"
                ? "bg-black text-white border-black"
                : "text-white border-gray-400 hover:bg-gray-800"
            }`}
          >
            Login
          </button>

          <button
            onClick={() =>
              setActiveForm(activeForm === "register" ? null : "register")
            }
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
      <div className="w-full bg-[#121212] px-6 md:px-20 py-10 relative">
        {/* Right Vector Image */}
        <div className="absolute hidden md:block top-0 right-0 w-1/2 h-full z-0">
          <img
            src="/Vector.png"
            alt="Right Vector"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blur Glow Effect */}
        <div className="absolute top-[78%] transform -translate-y-1/2 rounded-full blur-[150px] bg-[#666666]/80 z-10
                        w-[150px] h-[150px] right-[2%] hidden md:block
                        md:w-[220px] md:h-[220px] md:right-[4%]
                        lg:w-[260px] lg:h-[260px] lg:right-[6%]
                        xl:w-[300px] xl:h-[300px] xl:right-[8%]
                        2xl:w-[350px] 2xl:h-[350px] 2xl:right-[10%]">
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-start gap-10 relative z-20">
          {/* LEFT: Banner Text (fixed) */}
          <div className="w-full md:w-1/2 text-center md:text-left text-white flex flex-col justify-center">
            <h1 className="text-[20px] md:text-[30px] xl:text-[50px] 2xl:text-[60px] font-instrument-serif mb-5">
              Shaping Tomorrow’s<br />
              <span className="text-[#737378]">Shopping Experience</span><br />
              Today.
            </h1>
            <button className="w-[193px] h-[42px] py-[10px] px-[24px] text-[13px] font-medium font-instrument-sans text-[#121212] bg-[#FFFFFF] hover:bg-white hover:text-gray-800 transition mx-auto md:mx-0">
              DOWNLOAD THE APP
            </button>
          </div>

          {/* RIGHT: Video or Form */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-8">
            {/* Video shown only if no form active */}
            {!activeForm && (
              <div className="relative w-full max-w-[600px]">
                <video autoPlay muted loop playsInline className="w-full h-auto object-contain">
                  <source src="/b9e7507766194a7d8035dc372c608159.mp4" type="video/mp4" />
                </video>
              </div>
            )}

            {/* Form Section */}
            {activeForm === "login" && (
              <LoginForm onSwitchToRegister={() => setActiveForm("register")} />
            )}
            {activeForm === "register" && (
              <RegisterForm onSwitchToLogin={() => setActiveForm("login")} />
            )}

            {/* Message when no form is active */}
            {!activeForm && (
              <p className="text-gray-400 text-center mt-4">
                Click "Login" or "Register" to continue.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

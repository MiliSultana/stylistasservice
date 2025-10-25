"use client";

import { useEffect } from "react";

//  Add this so TypeScript knows about window.validateRegistration
declare global {
  interface Window {
    validateRegistration: (formId: string) => boolean;
  }
}

type RegisterFormProps = {
  onSwitchToLogin: () => void;
};

export default function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  useEffect(() => {
    //  Dynamically load the script once component mounts
    const script = document.createElement("script");
    script.src = "/scripts/script.js"; // Path inside public/
    script.async = true;

    script.onload = () => {
      console.log("script.js loaded successfully");
    };

    script.onerror = () => {
      console.error(" Failed to load script.js");
    };

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // ✅ Handle submit with validation from script.js
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (window.validateRegistration && window.validateRegistration("registrationForm")) {
      alert("🎉 Registration successful!");
      onSwitchToLogin();
    } else {
      console.warn(" Validation failed or script not loaded yet");
    }
  };

  return (
    <form
      id="registrationForm"
      onSubmit={handleSubmit}
      className="bg-[#1E1E1E] p-8 rounded-xl w-full max-w-md shadow-lg text-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2 text-sm">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2 text-sm">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2 text-sm">Phone</label>
        <input
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Gender */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2 text-sm">Gender</label>
        <select
          name="gender"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Password */}
      <div className="mb-6">
        <label className="block text-gray-300 mb-2 text-sm">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Create a password"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
       {/* confirm Password */}
      <div className="mb-6">
        <label className="block text-gray-300 mb-2 text-sm"> Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Register Button */}
      <button
        type="submit"
        className="w-full bg-pink-400 hover:bg-pink-500 text-black font-semibold py-2 rounded-md transition"
      >
        Register
      </button>

      {/* Link to Login */}
      <p className="mt-4 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-pink-400 hover:underline"
        >
          Login
        </button>
      </p>
    </form>
  );
}

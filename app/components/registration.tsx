"use client";
// // Add this at the top of your RegisterForm.tsx
// declare global {
//   interface Window {
//     validateRegistration: (formId: string) => boolean;
//   }
// }


import { useEffect } from "react";
type RegisterFormProps = {
  onSwitchToLogin: () => void; // callback to switch to login form
};

export default function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  //  useEffect(() => {
  //   // dynamically load script.js
  //   const script = document.createElement("script");
  //   script.src = "/scripts/script.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // call the validation function from script.js
  //   if (window.validateRegistration("registrationForm")) {
  //     alert("Registration successful!");
  //     onSwitchToLogin();
  //   }
  // };
   return (
   
    <form className="bg-[#1E1E1E] p-8 rounded-xl w-full max-w-md shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2 text-sm">Name</label>
        <input required
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2 text-sm">Email</label>
        <input required
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2 text-sm">Phone</label>
        <input required
          type="tel"
          placeholder="Enter your phone number"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Gender */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2 text-sm">Gender</label>
        <select required
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
        <input required
          type="password"
          placeholder="Create a password"
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

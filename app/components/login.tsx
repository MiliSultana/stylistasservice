"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    validateLogin: (formId: string) => boolean;
  }
}

type LoginFormProps = {
  onSwitchToRegister: () => void;
};

export default function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement("script");
    script.src = "/scripts/script.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Run the validation from script.js
    const valid = window.validateLogin && window.validateLogin("loginForm");

    if (valid) {
      alert("Login successful!");
      // Optional: refresh or redirect
      window.location.reload();
    }
  };

  return (
    <form
      id="loginForm"
      onSubmit={handleSubmit}
      className="bg-[#1E1E1E] p-8 rounded-xl w-full max-w-md shadow-lg text-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2 text-sm">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Password Field */}
      <div className="mb-6">
        <label className="block text-gray-300 mb-2 text-sm">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-pink-400 hover:bg-pink-500 text-black font-semibold py-2 rounded-md transition"
      >
        Login
      </button>

      {/* Link to Register */}
      <p className="mt-4 text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-pink-400 hover:underline"
        >
          Register
        </button>
      </p>
    </form>
  );
}

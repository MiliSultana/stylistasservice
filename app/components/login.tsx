"use client";

type LoginFormProps = {
  onSwitchToRegister: () => void; // callback to switch to registration form
};

export default function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  return (
    <form className="bg-[#1E1E1E] p-8 rounded-xl w-full max-w-md shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2 text-sm">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Password */}
      <div className="mb-6">
        <label className="block text-gray-300 mb-2 text-sm">Password</label>
        <input
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

      {/* Link to Registration */}
      <p className="mt-4 text-center text-sm text-gray-400">
        If you are new,{" "}
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

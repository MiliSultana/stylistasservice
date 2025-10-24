"use client";

export default function LoginForm() {
  return (
    <form className="w-full max-w-sm bg-white p-6 shadow-md rounded-lg border">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        type="submit"
        className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
      >
        Login
      </button>
    </form>
  );
}

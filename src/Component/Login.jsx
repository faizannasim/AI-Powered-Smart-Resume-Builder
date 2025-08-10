import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

   
    localStorage.setItem("userEmail", email.trim());
    toast.success("Login successful!");
    navigate("/select-interview");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-5 border rounded">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border mb-3 rounded"
        required
      />

      <input
        type="password"
        placeholder="Password (min 6 chars)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border mb-3 rounded"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  );
}

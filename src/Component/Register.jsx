import React, { useState } from "react";

export default function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (email && password.length >= 6) {
      onRegister(email, password);
    } else {
      setError("Enter valid email and password (6+ chars)");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-5 border rounded">
      <h2 className="text-2xl mb-4">Register</h2>
      {error && <p className="text-red-600">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border mb-3"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password (min 6 chars)"
        className="w-full p-2 border mb-3"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
        Register
      </button>
    </form>
  );
}

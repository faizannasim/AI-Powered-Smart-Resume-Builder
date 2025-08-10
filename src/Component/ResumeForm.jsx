import React, { useState } from "react";

export default function ResumeForm({ onImproveSummary }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation or submit logic here
    // For now, just call AI improve function with summary
    onImproveSummary(summary);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-5 bg-white rounded shadow"
    >
      <h2 className="text-2xl font-semibold mb-4">Build Your Resume</h2>

      <label className="block mb-2 font-semibold">Full Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        required
      />

      <label className="block mb-2 font-semibold">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        required
      />

      <label className="block mb-2 font-semibold">Phone Number</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <label className="block mb-2 font-semibold">Professional Summary</label>
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        rows={4}
        required
      />

      <label className="block mb-2 font-semibold">Work Experience</label>
      <textarea
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        rows={4}
      />

      <label className="block mb-2 font-semibold">Education</label>
      <textarea
        value={education}
        onChange={(e) => setEducation(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        rows={3}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Improve Summary with AI
      </button>
    </form>
  );
}

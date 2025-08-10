import React, { useState } from "react";

export default function EditableTemplate({ initialSummary, onSummaryChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [summary, setSummary] = useState(initialSummary || "");

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    setSummary(e.target.value);
    onSummaryChange && onSummaryChange(e.target.value);
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Professional Summary</h2>
        <button
          onClick={toggleEdit}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      {isEditing ? (
        <textarea
          className="w-full p-3 border rounded resize-y"
          rows={6}
          value={summary}
          onChange={handleChange}
        />
      ) : (
        <p className="whitespace-pre-wrap">{summary || "No summary provided."}</p>
      )}
    </div>
  );
}

import React, { useState } from "react";

export default function EditableSkills({ initialSkills, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [skills, setSkills] = useState(initialSkills || "");

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    setSkills(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Skills</h2>
        <button
          onClick={toggleEdit}
          className="px-2 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      {isEditing ? (
        <textarea
          className="w-full p-3 border rounded resize-y"
          rows={3}
          value={skills}
          onChange={handleChange}
        />
      ) : (
        <p className="whitespace-pre-wrap">{skills || "No skills listed."}</p>
      )}
    </div>
  );
}

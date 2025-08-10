import React, { useState } from 'react'

function EditableEducation({ initialEducation, onChange }) {
  const [education, setEducation] = useState(initialEducation || "")
  const [isEditing, setIsEditing] = useState(false)

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleChange = (e) => {
    setEducation(e.target.value)
    onChange && onChange(e.target.value)
  }

  return (
    <div className='mb-6'>
      <div className='flex justify-between items-center mb-2'>
        <h2 className="text-xl font-semibold">Education</h2>
        <button onClick={toggleEdit} className='btn btn-danger'>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      {isEditing ? (
        <textarea
          rows="5"
          className="w-full p-3 border rounded resize-y"
          value={education}
          onChange={handleChange}
        />
      ) : (
        <p className="whitespace-pre-wrap">{education || "No Education found"}</p>
      )}
    </div>
  )
}

export default EditableEducation

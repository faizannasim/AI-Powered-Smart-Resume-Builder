import React, { useState } from 'react'

function EditableExperience({ initialExperience, onChange }) {
     const [isEditing, setIsEditing] = useState(false);
      const [experience, setExperience] = useState(initialExperience || "");


      const toggleEdit = ()=>{
        setIsEditing(!isEditing)
      }

      const handleChange = (e)=>{
        setExperience(e.target.value)
         onChange && onChange(e.target.value);
        
      }









  return (
    <div className='mb-6'>
        <div className='flex items-center justify-between mb-2'>
          <h2 className="text-xl font-semibold">Experience</h2>
          <button onClick={toggleEdit} className='btn btn-danger'>
           {isEditing ? "save" : "Edit"}
           </button>
        </div>
        {isEditing?(
            <textarea 
            rows="5"
             className="w-full p-3 border rounded resize-y"
             value={experience}
             onChange={handleChange}
             />
        ):(
         <p className="whitespace-pre-wrap">{experience || "No experience found"}</p>       
          
        )}
        
    </div>
  )
}

export default EditableExperience
import React, { useState, useEffect } from 'react';
import EditableEducation from './ EditableEducation';
import EditableExperience from './EditableExperience';
import EditableSkills from './ EditableSkills';
import EditableTemplate from './EditableTemplate';

function FullEditableResume({ initialSummary }) {
  const [summary, setSummary] = useState(initialSummary || "");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");

  useEffect(() => {
    setSummary(initialSummary || "");
  }, [initialSummary]);

  return (
   <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <EditableTemplate initialSummary={summary} onSummaryChange={setSummary} />
      <EditableExperience initialExperience={experience} onChange={setExperience} />
      <EditableEducation initialEducation={education} onChange={setEducation} />
      <EditableSkills initialSkills={skills} onChange={setSkills} />
    </div>
  );
}

export default FullEditableResume;

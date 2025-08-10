import React, { useState } from 'react';
import ResumeForm from '../Component/ResumeForm';
import { toast } from 'react-toastify';
import FullEditableResume from './FullEditableResume';

function ResumeBuilder() {
  const [improvedSummary, setImprovedSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const improveSummaryWithAI = async (summary) => {
    setLoading(true);
    setImprovedSummary("");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer"
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: `Improve this professional summary for a resume:\n\n${summary}`,
            },
          ],
          max_tokens: 150,
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        setImprovedSummary(data.choices[0].message.content);
      } else {
        setImprovedSummary("No Response from API");
      }
    } catch (error) {
      toast.error("Error improving summary: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='pt-5'>
      <ResumeForm onImproveSummary={improveSummaryWithAI} />
      {loading && <p className="mt-4 text-blue-600">Improving summary...</p>}
      {improvedSummary && (
        <>
          <FullEditableResume initialSummary={improvedSummary} />
         
        </>
      )}
    </div>
  );
}

export default ResumeBuilder;

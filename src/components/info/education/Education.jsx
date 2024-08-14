import SectionList from "../SectionList";
import EducationForm from "./EducationForm";

import { useState } from "react";

export default function Education({
  addEducation,
  education,
  deleteEducation,
}) {
  const [mode, setMode] = useState("Add");

  function changeMode() {
    setMode(mode === "Add" ? "View" : "Add");
  }

  return (
    <details>
      <summary>Education</summary>
      {mode === "Add" ? (
        education.map((edu) => (
          <SectionList
            deleteSection={deleteEducation}
            key={edu.school}
            name={edu.school}
          />
        ))
      ) : (
        <EducationForm addEducation={addEducation} changeView={changeMode} />
      )}
      <button onClick={changeMode} className="outline">
        {mode}
      </button>
    </details>
  );
}

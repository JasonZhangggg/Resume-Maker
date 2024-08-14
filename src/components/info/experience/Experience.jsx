import SectionList from "../SectionList";
import ExperienceForm from "./ExperienceForm";

import { useState } from "react";

export default function Experience({
  addExperience,
  experience,
  deleteExperience,
}) {
  const [mode, setMode] = useState("Add");

  function changeMode() {
    setMode(mode === "Add" ? "View" : "Add");
  }

  return (
    <details>
      <summary>Experience</summary>
      {mode === "Add" ? (
        experience.map((exp) => (
          <SectionList
            deleteSection={deleteExperience}
            key={exp.company}
            name={exp.company}
          />
        ))
      ) : (
        <ExperienceForm addExperience={addExperience} changeView={changeMode} />
      )}
      <button onClick={changeMode} className="outline">
        {mode}
      </button>
    </details>
  );
}

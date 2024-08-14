import { useState } from "react";

import Info from "./components/info/details/Info.jsx";
import Education from "./components/info/education/Education.jsx";
import Experience from "./components/info/experience/Experience.jsx";
import Page from "./components/render/Page.jsx";
import "./styles/app.css";

export default function App() {
  const [info, setInfo] = useState({
    name: "Name",
    email: "Email",
    phone: "Phone",
    address: "Address",
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  function editInfo(name, email, phone, address) {
    setInfo({ name, email, phone, address });
  }

  function addEducation(school, degree, startDate, endDate) {
    setEducation([...education, { school, degree, startDate, endDate }]);
  }

  function deleteEducation(school) {
    setEducation(education.filter((edu) => edu.school !== school));
  }

  function addExperience(company, title, description, startDate, endDate) {
    setExperience([
      ...experience,
      { company, title, description, startDate, endDate },
    ]);
  }

  function deleteExperience(company) {
    setExperience(experience.filter((exp) => exp.company !== company));
  }

  return (
    <>
      <header className="container">
        <h1 className="center">CV Application</h1>
      </header>
      <main className="container grid">
        <div>
          <Info editInfo={editInfo} />
          <Education
            addEducation={addEducation}
            education={education}
            deleteEducation={deleteEducation}
          />
          <Experience
            addExperience={addExperience}
            experience={experience}
            deleteExperience={deleteExperience}
          />
        </div>
        <div>
          <Page info={info} education={education} experience={experience} />
        </div>
      </main>
    </>
  );
}

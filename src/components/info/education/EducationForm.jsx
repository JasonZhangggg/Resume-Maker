import TextInput from "../TextInput";
import { useState } from "react";

export default function EducationForm({ addEducation, changeView }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleClick(e) {
    e.preventDefault();
    addEducation(school, degree, startDate, endDate);
    changeView();
  }
  return (
    <form onSubmit={handleClick}>
      <TextInput
        label="School"
        placeholder="Stanford University"
        value={school}
        setValue={setSchool}
      />
      <TextInput
        label="Degree"
        placeholder="Computer Science"
        value={degree}
        setValue={setDegree}
      />
      <TextInput
        label="Start Date"
        placeholder="2018"
        value={startDate}
        setValue={setStartDate}
      />
      <TextInput
        label="End Date"
        placeholder="2022"
        value={endDate}
        setValue={setEndDate}
      />
      <input type="submit" />
    </form>
  );
}

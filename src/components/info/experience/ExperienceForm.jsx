import TextInput from "../TextInput";
import { useState } from "react";

export default function ExperienceForm({ addExperience, changeView }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  function handleClick(e) {
    e.preventDefault();
    addExperience(company, title, description, startDate, endDate);
    changeView();
  }
  return (
    <form onSubmit={handleClick}>
      <TextInput
        label="Title"
        placeholder="Intern"
        value={title}
        setValue={setTitle}
      />
      <TextInput
        label="Company"
        placeholder="Amazon"
        value={company}
        setValue={setCompany}
      />
      <label htmlFor="Description">
        Description
        <textarea
          name="Description"
          placeholder="Worked on the AWS team"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>
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

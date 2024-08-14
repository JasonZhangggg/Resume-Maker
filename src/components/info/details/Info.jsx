import TextInput from "../TextInput";
import { useState } from "react";

export default function Info({ editInfo }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function handleClick(e) {
    e.preventDefault();
    editInfo(name, email, phone, address);
  }

  return (
    <details>
      <summary>Personal Information</summary>
      <form>
        <TextInput
          label="Name"
          placeholder="Bob Zhou"
          value={name}
          setValue={setName}
        />
        <TextInput
          label="Email"
          placeholder="Bobzhou@gmail.com"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="Phone number"
          placeholder="532-412-2218"
          value={phone}
          setValue={setPhone}
        />
        <TextInput
          label="Address"
          placeholder="Portland, OR"
          value={address}
          setValue={setAddress}
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </details>
  );
}

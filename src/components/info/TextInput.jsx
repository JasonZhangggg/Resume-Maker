import "../../styles/app.css";

export default function TextInput({ label, placeholder, value, setValue }) {
  const onChange = (e) => setValue(e.target.value);

  return (
    <div>
      <label htmlFor={label}>{label} </label>

      <input
        id={label}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

import "../../styles/app.css";

export default function SectionList({ name, deleteSection }) {
  return (
    <div className="sectionList">
      <h6>{name}</h6>
      <span
        onClick={() => deleteSection(name)}
        className="material-symbols-outlined deleteIcon"
      >
        delete
      </span>
    </div>
  );
}

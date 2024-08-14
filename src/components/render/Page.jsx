import "../../styles/app.css";

export default function Page({ info, education, experience }) {
  return (
    <div className="paper">
      <div>
        <h1 className="center black">{info.name}</h1>
        <div className="flex-center hgroup">
          <p className="black">{info.email}</p>
          <p className="black">{info.phone}</p>
          <p className="black">{info.address}</p>
        </div>
        <h4 className="black header">Education</h4>
        <hr />
        <div>
          {education.map((edu) => (
            <div key={edu.school} className="list">
              <div className="hgroup">
                <h6 className="black">{edu.school}</h6>
                <p className="black desc gray">{edu.degree}</p>
              </div>
              <p className="black">
                {edu.startDate}-{edu.endDate}
              </p>
            </div>
          ))}
        </div>
        <h4 className="black">Experience</h4>
        <hr />

        <div>
          {experience.map((exp) => (
            <div key={exp.company}>
              <div className="list">
                <div className="hgroup">
                  <h6 className="black">{exp.company}</h6>
                  <p className="black desc gray">{exp.title}</p>
                </div>
                <p className="black">
                  {exp.startDate}-{exp.endDate}
                </p>
              </div>
              <p className="black desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

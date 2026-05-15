import "./Skills.css";

function Skills() {
  const skills = [
    "Java",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "MySQL",
    "MongoDB",
    "Node.js",
    "Express.js",
    "SpringBoot",
  ];

  return (
    <section className="skills" id="skills">
      <h1>Skills</h1>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
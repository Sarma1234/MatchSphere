export default function SkillsSection() {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "Git",
    "UI/UX",
    "Problem Solving",
  ];

  return (
    <section className="discover-section glass">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <span
            key={skill}
            className="skill-chip"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
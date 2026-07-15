import "./SkillsSection.css";

const selectedSkills = [
    "React",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "Figma"
];

const suggestedSkills = [
    "Python",
    "Java",
    "C++",
    "DSA",
    "Machine Learning",
    "UI/UX",
    "Flutter",
    "Next.js",
    "Firebase",
    "AWS",
    "Docker",
    "Git"
];

export default function SkillsSection() {
    return (
        <section className="skills-section">

            <div className="section-heading">

                <h2>Skills</h2>

                <p>
                    Add skills that represent you and improve your matches.
                </p>

            </div>

            <div className="skills-search">

                <input
                    type="text"
                    placeholder="Search or add a skill..."
                />

                <button>
                    Add
                </button>

            </div>

            <div className="selected-skills">

                {selectedSkills.map((skill, index) => (

                    <div
                        key={index}
                        className="selected-skill"
                    >
                        <span>{skill}</span>

                        <button>×</button>
                    </div>

                ))}

            </div>

            <h4 className="skills-subtitle">
                Suggested Skills
            </h4>

            <div className="suggested-skills">

                {suggestedSkills.map((skill, index) => (

                    <button
                        key={index}
                        className="skill-chip"
                    >
                        + {skill}
                    </button>

                ))}

            </div>

        </section>
    );
}
import "./SkillsSection.css";
import { useState } from "react";

const suggestedSkills = [
    "Swimming",
    "Singing",
    "Dancing",
    "Cooking",
    "Freelancing",
    "Entrepreneurship",
    "Critical Thinking",
    "Emotional Intelligence",
    "Meditation",
    "AWS",
    "Animation",
    "Content Creation"
];

export default function SkillsSection({
    profileData,
    setProfileData,
}) {

    const skills = profileData.skills || [];

    const [skillInput, setSkillInput] = useState("");

    const addSkill = () => {

        const skillName = skillInput.trim();

        if (!skillName) return;

        const alreadyExists = skills.some(

            (skill) =>
                skill.name.toLowerCase() ===
                skillName.toLowerCase()

        );

        if (alreadyExists) return;


        setProfileData({

            ...profileData,

            skills: [

                ...skills,

                {
                    name: skillName,
                    level: "Beginner"
                }

            ]

        });


        setSkillInput("");

    };


    const removeSkill = (skillName) => {

        setProfileData({

            ...profileData,

            skills:

                skills.filter(

                    (skill) =>
                        skill.name !== skillName

                )

        });

    };


    const addSuggestedSkill = (skillName) => {

        const alreadyExists = skills.some(

            (skill) =>
                skill.name === skillName

        );

        if (alreadyExists) return;


        setProfileData({

            ...profileData,

            skills: [

                ...skills,

                {
                    name: skillName,
                    level: "Beginner"
                }

            ]

        });

    };


    return (
        <section className="skills-section">


            <div className="section-heading">

                <h2>
                    Skills
                </h2>


                <p>
                    Add skills that represent you and improve your matches.
                </p>


            </div>


            <div className="skills-search">


                <input

                    type="text"

                    placeholder="Search or add a skill..."

                    value={skillInput}

                    onChange={(e)=>
                        setSkillInput(e.target.value)
                    }

                />


                <button
                    onClick={addSkill}
                >
                    Add
                </button>


            </div>


            <div className="selected-skills">


                {skills.map((skill,index)=>(


                    <div

                        key={index}

                        className="selected-skill"

                    >

                        <span>
                            {skill.name}
                        </span>


                        <button

                            onClick={() =>
                                removeSkill(skill.name)
                            }

                        >
                            ×
                        </button>


                    </div>


                ))}


            </div>


            <h4 className="skills-subtitle">

                Suggested Skills

            </h4>


            <div className="suggested-skills">


                {suggestedSkills.map((skill,index)=>(


                    <button

                        key={index}

                        className="skill-chip"

                        onClick={() =>
                            addSuggestedSkill(skill)
                        }

                    >

                        + {skill}

                    </button>


                ))}


            </div>


        </section>
    );

}
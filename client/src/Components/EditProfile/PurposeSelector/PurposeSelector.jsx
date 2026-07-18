import "./PurposeSelector.css";

import {
    GraduationCap,
    Code2,
    Rocket,
    Dumbbell,
    Plane,
    Users,
    Briefcase,
    Gamepad2,
} from "lucide-react";

const purposes = [
    {
        value: "study_partner",
        title: "Study Partner",
        description: "Find someone to study and learn together.",
        icon: <GraduationCap size={28} />,
    },
    {
        value: "hackathon_partner",
        title: "Hackathon Partner",
        description: "Build your dream hackathon squad.",
        icon: <Code2 size={28} />,
    },
    {
        value: "startup_cofounder",
        title: "Startup Co-founder",
        description: "Meet ambitious founders and builders.",
        icon: <Rocket size={28} />,
    },
    {
        value: "fitness_partner",
        title: "Fitness Partner",
        description: "Stay consistent with your fitness goals.",
        icon: <Dumbbell size={28} />,
    },
    {
        value: "travel_partner",
        title: "Travel Partner",
        description: "Explore places with like-minded travelers.",
        icon: <Plane size={28} />,
    },
    {
        value: "project_partner",
        title: "Project Partner",
        description: "Collaborate on exciting real-world projects.",
        icon: <Users size={28} />,
    },
    {
        value: "open_source",
        title: "Open Source",
        description: "Contribute to open-source projects together.",
        icon: <Briefcase size={28} />,
    },
    {
        value: "dating",
        title: "Dating",
        description: "Meet people looking for meaningful connections.",
        icon: <Gamepad2 size={28} />,
    },
];

export default function PurposeSelector({
    profileData,
    setProfileData,
}) {

    const handlePurposeChange = (purposeValue) => {

        setProfileData({

            ...profileData,

            activePurpose: purposeValue,

        });

    };

    return (

        <section className="purpose-selector">

            <div className="section-heading">

                <h2>
                    Select Your Primary Purpose
                </h2>

                <p>
                    Choose one purpose to personalize your MatchSphere experience.
                </p>

            </div>

            <div className="purpose-grid">

                {purposes.map((purpose) => (

                    <div

                        key={purpose.value}

                        className={`purpose-card ${
                            profileData.activePurpose === purpose.value
                                ? "active"
                                : ""
                        }`}

                        onClick={() =>
                            handlePurposeChange(purpose.value)
                        }

                    >

                        <div className="purpose-icon">
                            {purpose.icon}
                        </div>

                        <h3>
                            {purpose.title}
                        </h3>

                        <p>
                            {purpose.description}
                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}
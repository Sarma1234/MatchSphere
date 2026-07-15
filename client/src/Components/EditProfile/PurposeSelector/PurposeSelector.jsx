import "./PurposeSelector.css";

import {
    GraduationCap,
    Code2,
    Rocket,
    Dumbbell,
    Plane,
    Users,
    Briefcase,
    Gamepad2
} from "lucide-react";

const purposes = [
    {
        title: "Study Partner",
        description: "Find someone to study and learn together.",
        icon: <GraduationCap size={28} />
    },
    {
        title: "Hackathon Team",
        description: "Build your dream hackathon squad.",
        icon: <Code2 size={28} />
    },
    {
        title: "Startup Co-founder",
        description: "Meet ambitious founders and builders.",
        icon: <Rocket size={28} />
    },
    {
        title: "Fitness Partner",
        description: "Stay consistent with your fitness goals.",
        icon: <Dumbbell size={28} />
    },
    {
        title: "Travel Buddy",
        description: "Explore places with like-minded travelers.",
        icon: <Plane size={28} />
    },
    {
        title: "Mentor",
        description: "Learn from experienced professionals.",
        icon: <Users size={28} />
    },
    {
        title: "Networking",
        description: "Expand your professional network.",
        icon: <Briefcase size={28} />
    },
    {
        title: "Gaming Partner",
        description: "Find teammates for your favorite games.",
        icon: <Gamepad2 size={28} />
    }
];

export default function PurposeSelector() {
    return (
        <section className="purpose-selector">

            <div className="section-heading">

                <h2>Select Your Primary Purpose</h2>

                <p>
                    Choose one purpose to personalize your MatchSphere experience.
                </p>

            </div>

            <div className="purpose-grid">

                {purposes.map((purpose, index) => (

                    <div
                        key={index}
                        className={`purpose-card ${index === 0 ? "active" : ""}`}
                    >

                        <div className="purpose-icon">
                            {purpose.icon}
                        </div>

                        <h3>{purpose.title}</h3>

                        <p>{purpose.description}</p>

                    </div>

                ))}

            </div>

        </section>
    );
}
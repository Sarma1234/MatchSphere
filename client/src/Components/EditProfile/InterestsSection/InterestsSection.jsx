import "./InterestsSection.css";

const selectedInterests = [
    "Artificial Intelligence",
    "Open Source",
    "Startups",
    "Travel"
];

const allInterests = [
    "Web Development",
    "Mobile Apps",
    "Machine Learning",
    "Cyber Security",
    "UI/UX Design",
    "Photography",
    "Content Creation",
    "Music",
    "Reading",
    "Fitness",
    "Movies",
    "Gaming",
    "Finance",
    "Public Speaking",
    "Cricket",
    "Football"
];

export default function InterestsSection() {
    return (
        <section className="interests-section">

            <div className="section-heading">

                <h2>Interests</h2>

                <p>
                    Choose interests that help us connect you with like-minded people.
                </p>

            </div>

            <div className="selected-interests">

                {selectedInterests.map((interest, index) => (

                    <button
                        key={index}
                        className="interest-pill active"
                    >
                        {interest}
                    </button>

                ))}

            </div>

            <h4 className="interests-subtitle">
                Explore More
            </h4>

            <div className="interest-grid">

                {allInterests.map((interest, index) => (

                    <button
                        key={index}
                        className="interest-pill"
                    >
                        {interest}
                    </button>

                ))}

            </div>

        </section>
    );
}
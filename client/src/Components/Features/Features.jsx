import "./Feature.css";

import { FaBullseye } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

const features = [
  {
    icon: <FaBullseye />,
    title: "Purpose First Matching",
    description:
      "Find people based on what you're actually looking for—study partners, travel buddies, co-founders, roommates and more.",
  },
  {
    icon: <FaUsers />,
    title: "Compatibility Score",
    description:
      "Beyond purpose, MatchSphere compares interests, goals and preferences to help you connect with the right people.",
  },
  {
    icon: <BsChatDotsFill />,
    title: "Instant Conversations",
    description:
      "Once matched, start chatting instantly and plan your next journey together.",
  },
];

function Features() {
  return (
    <section className="features">

      <div className="section-heading">

        <p>WHY MATCHSPHERE?</p>

        <h2>
          More than matching.
          <br />
          Meaningful connections.
        </h2>

      </div>

      <div className="feature-grid">

        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;
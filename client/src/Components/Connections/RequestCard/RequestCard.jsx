import "./RequestCard.css";

import {
    MapPin,
    GraduationCap,
    CircleCheckBig
} from "lucide-react";

export default function RequestCard() {
    return (
        <article className="request-card">

            <div className="request-left">

                <div className="request-avatar">

                    <img
                        src="https://i.pravatar.cc/300?img=15"
                        alt="Profile"
                    />

                    <span className="online-dot"></span>

                </div>

                <div className="request-content">

                    <div className="request-top">

                        <h2>Harshita Sarma</h2>

                        <span className="match-score">
                            96% Match
                        </span>

                    </div>

                    <span className="purpose-badge">
                        Study Partner
                    </span>

                    <div className="request-meta">

                        <span>
                            <MapPin size={15} />
                            Guwahati
                        </span>

                        <span>
                            <GraduationCap size={15} />
                            CSE Student
                        </span>

                    </div>

                    <p className="request-bio">
                        Passionate about MERN, DSA and open-source.
                        Looking for consistent study partners preparing
                        for placements.
                    </p>

                    <div className="request-skills">

                        <span>React</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                        <span>DSA</span>

                    </div>

                    <div className="mutual-info">

                        <CircleCheckBig size={17} />

                        <span>
                            8 mutual interests
                        </span>

                    </div>

                </div>

            </div>

            <div className="request-actions">

                <button className="accept-btn">
                    Accept
                </button>

                <button className="ignore-btn">
                    Ignore
                </button>

            </div>

        </article>
    );
}
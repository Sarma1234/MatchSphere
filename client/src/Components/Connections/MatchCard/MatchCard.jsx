import "./MatchCard.css";

import {
    MapPin,
    GraduationCap,
    Clock3,
    MessageCircle,
    UserRound
} from "lucide-react";

export default function MatchCard() {
    return (
        <article className="match-card">

            <div className="match-left">

                <div className="match-avatar">

                    <img
                        src="https://i.pravatar.cc/300?img=32"
                        alt="Profile"
                    />

                    <span className="online-dot"></span>

                </div>

                <div className="match-content">

                    <div className="match-top">

                        <h2>Priya Sharma</h2>

                        <span className="connected-badge">
                            Connected
                        </span>

                    </div>

                    <span className="purpose-badge">
                        Startup Co-founder
                    </span>

                    <div className="match-meta">

                        <span>
                            <MapPin size={15} />
                            Bangalore
                        </span>

                        <span>
                            <GraduationCap size={15} />
                            Software Engineer
                        </span>

                    </div>

                    <p className="match-bio">
                        Building AI products and looking for passionate
                        founders interested in solving real-world problems.
                    </p>

                    <div className="match-skills">

                        <span>React</span>
                        <span>Python</span>
                        <span>AI</span>
                        <span>Startup</span>

                    </div>

                    <div className="match-status">

                        <span>
                            <Clock3 size={16} />
                            Connected 2 days ago
                        </span>

                        <span>
                            Last active 5 min ago
                        </span>

                    </div>

                </div>

            </div>

            <div className="match-actions">

                <button className="message-btn">
                    <MessageCircle size={18} />
                    Message
                </button>

                <button className="profile-btn">
                    <UserRound size={18} />
                    View Profile
                </button>

            </div>

        </article>
    );
}
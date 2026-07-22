import "./MatchCard.css";

import {
    MapPin,
    GraduationCap,
    Clock3,
    MessageCircle,
    UserRound
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function MatchCard({ match }) {

    const navigate = useNavigate();

    const currentUserId = localStorage.getItem("userId");

    const user =
        match.userOne._id === currentUserId
            ? match.userTwo
            : match.userOne;

    const profilePhoto =
        user.photos?.find((photo) => photo.isPrimary)?.url ||
        user.photos?.[0]?.url ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}`;

    const connectedDate = new Date(match.matchedAt).toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric",
        }
    );

    return (

        <article className="match-card">

            <div className="match-left">

                <div className="match-avatar">

                    <img
                        src={profilePhoto}
                        alt={user.fullName}
                    />

                    {user.isOnline && (
                        <span className="online-dot"></span>
                    )}

                </div>

                <div className="match-content">

                    <div className="match-top">

                        <h2>{user.fullName}</h2>

                        <span className="connected-badge">
                            Connected
                        </span>

                    </div>

                    <span className="purpose-badge">
                        {match.purpose}
                    </span>

                    <div className="match-meta">

                        {user.location?.city && (

                            <span>

                                <MapPin size={15} />

                                {user.location.city}

                            </span>

                        )}

                        {user.profession && (

                            <span>

                                <GraduationCap size={15} />

                                {user.profession}

                            </span>

                        )}

                    </div>

                    <p className="match-bio">

                        {user.bio || "No bio added yet."}

                    </p>
<div className="match-skills">

    {user.skills?.length ? (

        user.skills.slice(0, 4).map((skill, index) => (

            <span
                key={skill._id || skill.name || index}
            >
                {skill.name}
            </span>

        ))

    ) : (

        <span>No skills added</span>

    )}

</div>

                    <div className="match-status">

                        <span>

                            <Clock3 size={16} />

                            Connected {connectedDate}

                        </span>

                        <span>

                            {user.isOnline
                                ? "Online"
                                : "Offline"}

                        </span>

                    </div>

                </div>

            </div>

            <div className="match-actions">

                <button
                    className="message-btn"
                    onClick={() => navigate("/chats")}
                >

                    <MessageCircle size={18} />

                    Message

                </button>

                <button
                    className="profile-btn"
                    onClick={() =>
                        navigate(`/profile/${user._id}`)
                    }
                >

                    <UserRound size={18} />

                    View Profile

                </button>

            </div>

        </article>

    );

}
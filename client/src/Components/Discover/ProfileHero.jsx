
import "./ProfileHero.css";
import { MapPin, BadgeCheck } from "lucide-react";

export default function ProfileHero({ profile }) {

    const profileImage =
        profile?.photos?.find(photo => photo.isPrimary)?.url ||
        profile?.photos?.[0]?.url ||
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900";

    const location = [

        profile?.location?.city,

        profile?.location?.country,

    ]
        .filter(Boolean)
        .join(", ");

    const purpose =
        profile?.activePurpose
            ?.replace(/_/g, " ")
            ?.replace(/\b\w/g, char => char.toUpperCase());

    return (

        <section className="profile-hero glass">

            <div className="profile-image">

                <img

                    src={profileImage}

                    alt={profile?.fullName || "Profile"}

                />

                <div className="match-badge">

                    <BadgeCheck size={18} />

                    <span>

                        {profile?.compatibility ?? 0}% Match

                    </span>

                </div>

            </div>

            <div className="profile-info">

                <h1>

                    {profile?.fullName || "Unknown User"}

                </h1>

                <p className="purpose-tag">

                    {purpose || "No Purpose Selected"}

                </p>

                <div className="location">

                    <MapPin size={18} />

                    <span>

                        {location || "Location not specified"}

                    </span>

                </div>

                <p className="scroll-text">

                    ↓ Scroll to explore profile

                </p>

            </div>

        </section>

    );

}


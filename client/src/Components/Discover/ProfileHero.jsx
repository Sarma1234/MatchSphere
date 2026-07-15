import "./ProfileHero.css";
import { MapPin, BadgeCheck } from "lucide-react";

export default function ProfileHero() {
  return (
    <section className="profile-hero glass">

      <div className="profile-image">

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900"
          alt="Profile"
        />

        <div className="match-badge">
          <BadgeCheck size={18} />
          <span>94% Match</span>
        </div>

      </div>

      <div className="profile-info">

        <h1>Vikash Kumar</h1>

        <p className="purpose-tag">
          Hackathon Partner
        </p>

        <div className="location">
          <MapPin size={18} />
          <span>Bengaluru, India</span>
        </div>

        <p className="scroll-text">
          ↓ Scroll to explore profile
        </p>

      </div>

    </section>
  );
}
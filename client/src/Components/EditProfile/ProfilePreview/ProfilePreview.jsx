import "./ProfilePreview.css";

import {
    MapPin,
    GraduationCap,
    Briefcase
} from "lucide-react";

export default function ProfilePreview() {
    return (
        <aside className="profile-preview">

            <div className="preview-cover">

                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200"
                    alt="Cover"
                />

            </div>

            <div className="preview-content">

                <div className="preview-avatar">

                    <img
                        src="https://i.pravatar.cc/300"
                        alt="Profile"
                    />

                </div>

                <h2>Vikash Kumar</h2>

                <span className="preview-purpose">
                    Study Partner
                </span>

                <p className="preview-bio">
                    Passionate MERN developer who loves building
                    meaningful products and learning with like-minded
                    people.
                </p>

                <div className="preview-details">

                    <div className="preview-item">
                        <MapPin size={16} />
                        <span>Delhi, India</span>
                    </div>

                    <div className="preview-item">
                        <GraduationCap size={16} />
                        <span>AKTU University</span>
                    </div>

                    <div className="preview-item">
                        <Briefcase size={16} />
                        <span>Computer Science</span>
                    </div>

                </div>

                <div className="preview-tags">

                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>JavaScript</span>
                    <span>DSA</span>

                </div>

            </div>

        </aside>
    );
}
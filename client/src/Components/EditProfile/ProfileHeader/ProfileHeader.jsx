import "./ProfileHeader.css";
import {
    Camera,
    ImagePlus
} from "lucide-react";

export default function ProfileHeader() {
    return (
        <section className="profile-header">

            <div className="cover-photo">

                <button className="cover-upload-btn">
                    <ImagePlus size={18} />
                    Change Cover
                </button>

            </div>

            <div className="profile-header-content">

                <div className="profile-avatar-wrapper">

                    <img
                        src="https://i.pravatar.cc/300"
                        alt="Profile"
                        className="profile-avatar"
                    />

                    <button className="avatar-upload-btn">
                        <Camera size={18} />
                    </button>

                </div>

                <div className="profile-user-info">

                    <h2>Create Your Profile</h2>

                    <p>
                        Complete your profile to improve your match quality.
                    </p>

                </div>

                <div className="completion-card">

                    <div className="completion-circle">
                        <span>20%</span>
                    </div>

                    <small>Completed</small>

                </div>

            </div>

        </section>
    );
}
import "./SocialLinks.css";

import {
    Linkedin,
    Github,
    Globe,
    Twitter
} from "lucide-react";

export default function SocialLinks() {
    return (
        <section className="social-links">

            <div className="section-heading">

                <h2>Social Links</h2>

                <p>
                    Add your professional profiles to build trust and help others know you better. This step is optional.
                </p>

            </div>

            <div className="social-links-list">

                <div className="social-input">

                    <div className="social-icon">
                        <Linkedin size={20} />
                    </div>

                    <input
                        type="text"
                        placeholder="LinkedIn Profile URL"
                    />

                </div>

                <div className="social-input">

                    <div className="social-icon">
                        <Github size={20} />
                    </div>

                    <input
                        type="text"
                        placeholder="GitHub Profile URL"
                    />

                </div>

                <div className="social-input">

                    <div className="social-icon">
                        <Globe size={20} />
                    </div>

                    <input
                        type="text"
                        placeholder="Portfolio Website"
                    />

                </div>

                <div className="social-input">

                    <div className="social-icon">
                        <Twitter size={20} />
                    </div>

                    <input
                        type="text"
                        placeholder="Twitter / X Profile"
                    />

                </div>

            </div>

        </section>
    );
}
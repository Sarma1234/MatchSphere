import "./ConnectionsHeader.css";

import {
    Users,
    UserCheck,
    Send
} from "lucide-react";

export default function ConnectionsHeader() {
    return (
        <section className="connections-header">

            <div className="connections-header-left">

                <span className="connections-badge">
                    Build Your Network
                </span>

                <h1>
                    Connections
                </h1>

                <p>
                    Manage incoming requests, sent invitations, and your accepted
                    matches—all in one place.
                </p>

            </div>

            <div className="connections-stats">

                <div className="stat-card">

                    <div className="stat-icon">
                        <Users size={22} />
                    </div>

                    <h3>24</h3>

                    <span>Requests</span>

                </div>

                <div className="stat-card">

                    <div className="stat-icon">
                        <Send size={22} />
                    </div>

                    <h3>11</h3>

                    <span>Sent</span>

                </div>

                <div className="stat-card">

                    <div className="stat-icon">
                        <UserCheck size={22} />
                    </div>

                    <h3>18</h3>

                    <span>Matches</span>

                </div>

            </div>

        </section>
    );
}
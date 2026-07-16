import "./EmptyState.css";

import {
    UserSearch,
    Compass,
    ArrowRight
} from "lucide-react";

export default function EmptyState() {
    return (
        <section className="empty-state">

            <div className="empty-icon">

                <UserSearch size={60} />

            </div>

            <h2>
                No Connections Yet
            </h2>

            <p>
                You don't have any requests or matches at the moment.
                Explore Discover to find like-minded people and start
                building meaningful connections.
            </p>

            <div className="empty-actions">

                <button className="discover-btn">

                    <Compass size={18} />

                    Explore Discover

                </button>

                <button className="refresh-btn">

                    Refresh

                    <ArrowRight size={18} />

                </button>

            </div>

        </section>
    );
}
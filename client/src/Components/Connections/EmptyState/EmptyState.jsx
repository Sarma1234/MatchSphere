import "./EmptyState.css";

import { useNavigate } from "react-router-dom";

import {
    UserSearch,
    Compass,
    ArrowRight
} from "lucide-react";

export default function EmptyState({

    title = "No Connections Yet",

    description = "You don't have any requests or matches at the moment. Explore Discover to find like-minded people and start building meaningful connections.",

    showRefresh = false,

    onRefresh,

}) {

    const navigate = useNavigate();

    return (

        <section className="empty-state">

            <div className="empty-icon">

                <UserSearch size={60} />

            </div>

            <h2>

                {title}

            </h2>

            <p>

                {description}

            </p>

            <div className="empty-actions">

                <button
                    className="discover-btn"
                    onClick={() => navigate("/discover")}
                >

                    <Compass size={18} />

                    Explore Discover

                </button>

                {showRefresh && (

                    <button
                        className="refresh-btn"
                        onClick={onRefresh}
                    >

                        Refresh

                        <ArrowRight size={18} />

                    </button>

                )}

            </div>

        </section>

    );

}
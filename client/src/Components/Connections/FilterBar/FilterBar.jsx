import "./FilterBar.css";

import {
    Search,
    SlidersHorizontal
} from "lucide-react";

export default function FilterBar() {
    return (
        <section className="filter-bar">

            <div className="search-box">

                <Search size={18} />

                <input
                    type="text"
                    placeholder="Search by name, skill or purpose..."
                />

            </div>

            <div className="filter-controls">

                <div className="filter-select">

                    <SlidersHorizontal size={18} />

                    <select>
                        <option>All Purposes</option>
                        <option>Study Partner</option>
                        <option>Hackathon Team</option>
                        <option>Startup Co-founder</option>
                        <option>Networking</option>
                        <option>Fitness Partner</option>
                        <option>Gaming Partner</option>
                    </select>

                </div>

                <div className="filter-select">

                    <select>
                        <option>Compatibility</option>
                        <option>90%+</option>
                        <option>80%+</option>
                        <option>70%+</option>
                    </select>

                </div>

                <div className="filter-select">

                    <select>
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Highest Match</option>
                    </select>

                </div>

            </div>

        </section>
    );
}
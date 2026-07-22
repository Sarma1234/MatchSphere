import "./FilterBar.css";

import {
    Search,
    SlidersHorizontal
} from "lucide-react";

export default function FilterBar({

    search,

    setSearch,

    purpose,

    setPurpose,

    compatibility,

    setCompatibility,

    sort,

    setSort,

}) {

    return (

        <section className="filter-bar">

            <div className="search-box">

                <Search size={18} />

                <input
                    type="text"
                    placeholder="Search by name, skill or purpose..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

            </div>

            <div className="filter-controls">

                <div className="filter-select">

                    <SlidersHorizontal size={18} />

                    <select
                        value={purpose}
                        onChange={(e) =>
                            setPurpose(e.target.value)
                        }
                    >

                        <option value="">
                            All Purposes
                        </option>

                        <option value="Study Partner">
                            Study Partner
                        </option>

                        <option value="Hackathon Team">
                            Hackathon Team
                        </option>

                        <option value="Startup Co-founder">
                            Startup Co-founder
                        </option>

                        <option value="Networking">
                            Networking
                        </option>

                        <option value="Fitness Partner">
                            Fitness Partner
                        </option>

                        <option value="Gaming Partner">
                            Gaming Partner
                        </option>

                    </select>

                </div>

                <div className="filter-select">

                    <select
                        value={compatibility}
                        onChange={(e) =>
                            setCompatibility(e.target.value)
                        }
                    >

                        <option value="">
                            Compatibility
                        </option>

                        <option value="90">
                            90%+
                        </option>

                        <option value="80">
                            80%+
                        </option>

                        <option value="70">
                            70%+
                        </option>

                    </select>

                </div>

                <div className="filter-select">

                    <select
                        value={sort}
                        onChange={(e) =>
                            setSort(e.target.value)
                        }
                    >

                        <option value="newest">
                            Newest
                        </option>

                        <option value="oldest">
                            Oldest
                        </option>

                        <option value="compatibility">
                            Highest Match
                        </option>

                    </select>

                </div>

            </div>

        </section>

    );

}
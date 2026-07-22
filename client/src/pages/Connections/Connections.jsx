import "./Connections.css";

import { useEffect, useMemo, useState } from "react";

import ConnectionsHeader from "../../components/Connections/ConnectionsHeader/ConnectionsHeader";
import Tabs from "../../components/Connections/Tabs/Tabs";
import FilterBar from "../../components/Connections/FilterBar/FilterBar";
import MatchCard from "../../components/Connections/MatchCard/MatchCard";
import EmptyState from "../../components/Connections/EmptyState/EmptyState";

import { getMyMatches } from "../../services/matchService";

export default function Connections() {

    const [matches, setMatches] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [purpose, setPurpose] = useState("");

    const [compatibility, setCompatibility] = useState("");

    const [sort, setSort] = useState("newest");

    const [activeTab, setActiveTab] = useState("matches");

    /* ---------------------------------------------------------------------- */
    /*                           Load Matches                                 */
    /* ---------------------------------------------------------------------- */

    useEffect(() => {

        loadMatches();

    }, []);

    const loadMatches = async () => {

        try {

            setLoading(true);

            const data = await getMyMatches();

            setMatches(data || []);

        }

        catch (error) {

            console.error(error);

            setMatches([]);

        }

        finally {

            setLoading(false);

        }

    };

    /* ---------------------------------------------------------------------- */
    /*                              Filtering                                 */
    /* ---------------------------------------------------------------------- */

    const filteredMatches = useMemo(() => {

        const currentUserId = localStorage.getItem("userId");

        let filtered = [...matches];

        /* ---------------------------- Search ---------------------------- */

        if (search.trim()) {

            filtered = filtered.filter((match) => {

                const otherUser =

                    match.userOne._id === currentUserId

                        ? match.userTwo

                        : match.userOne;

                return (

                    otherUser.fullName
                        ?.toLowerCase()
                        .includes(search.toLowerCase()) ||

                    otherUser.username
                        ?.toLowerCase()
                        .includes(search.toLowerCase()) ||

                    otherUser.bio
                        ?.toLowerCase()
                        .includes(search.toLowerCase()) ||

                    match.purpose
                        ?.toLowerCase()
                        .includes(search.toLowerCase())

                );

            });

        }

        /* ---------------------------- Purpose --------------------------- */

        if (purpose) {

            filtered = filtered.filter(

                (match) => match.purpose === purpose

            );

        }

        /* ------------------------------ Sort ---------------------------- */

        if (sort === "newest") {

            filtered.sort(

                (a, b) =>

                    new Date(b.matchedAt) -

                    new Date(a.matchedAt)

            );

        }

        if (sort === "oldest") {

            filtered.sort(

                (a, b) =>

                    new Date(a.matchedAt) -

                    new Date(b.matchedAt)

            );

        }

        return filtered;

    }, [

        matches,

        search,

        purpose,

        compatibility,

        sort,

    ]);

    /* ---------------------------------------------------------------------- */

    return (

        <main className="connections-page">

            <div className="connections-container">

                <ConnectionsHeader

                    totalMatches={matches.length}

                    totalRequests={0}

                    totalSent={0}

                />

                <Tabs

                    activeTab={activeTab}

                    setActiveTab={setActiveTab}

                    incomingCount={0}

                    sentCount={0}

                    matchCount={matches.length}

                />

                <FilterBar

                    search={search}

                    setSearch={setSearch}

                    purpose={purpose}

                    setPurpose={setPurpose}

                    compatibility={compatibility}

                    setCompatibility={setCompatibility}

                    sort={sort}

                    setSort={setSort}

                />

                <section className="connections-list">

                    {loading ? (

                        <div className="connections-loading">

                            Loading connections...

                        </div>

                    ) : activeTab !== "matches" ? (

                        <EmptyState

                            title="Coming Soon"

                            description="Incoming and Sent requests will be available soon."

                        />

                    ) : filteredMatches.length === 0 ? (

                        <EmptyState

                            title="No Connections Found"

                            description="Try changing your filters or discover new people."

                            showRefresh

                            onRefresh={loadMatches}

                        />

                    ) : (

                        filteredMatches.map((match) => (

                            <MatchCard

                                key={match._id}

                                match={match}

                            />

                        ))

                    )}

                </section>

            </div>

        </main>

    );

}
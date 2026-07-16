import "./Connections.css";

import ConnectionsHeader from "../../components/Connections/ConnectionsHeader/ConnectionsHeader";
import Tabs from "../../components/Connections/Tabs/Tabs";
import FilterBar from "../../components/Connections/FilterBar/FilterBar";
import RequestCard from "../../components/Connections/RequestCard/RequestCard";
import MatchCard from "../../components/Connections/MatchCard/MatchCard";
import EmptyState from "../../components/Connections/EmptyState/EmptyState";

export default function Connections() {
    return (
        <main className="connections-page">

            <div className="connections-container">

                <ConnectionsHeader />

                <Tabs />

                <FilterBar />

                <section className="connections-list">

                    <RequestCard />

                    <RequestCard />

                    <RequestCard />

                    <MatchCard />

                    <MatchCard />

                     <EmptyState /> 

                </section>

            </div>

        </main>
    );
}
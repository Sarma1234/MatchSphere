import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="chat-search">

            <Search
                size={18}
                className="chat-search-icon"
            />

            <input
                type="text"
                placeholder="Search conversations..."
                className="chat-search-input"
            />

        </div>
    );
}
import { Search } from "lucide-react";

export default function SearchBar({

    value,

    onChange,

}) {

    return (

        <div className="chat-search">

            <Search

                size={18}

                className="chat-search-icon"

            />

            <input

                type="text"

                value={value}

                onChange={(e) =>

                    onChange(e.target.value)

                }

                placeholder="Search conversations..."

                className="chat-search-input"

            />

        </div>

    );

}
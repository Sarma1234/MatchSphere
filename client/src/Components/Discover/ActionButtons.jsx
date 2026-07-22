
import "./ActionButtons.css";

import { X, Check } from "lucide-react";

export default function ActionButtons({

    onPass,

    onConnect,

    disabled = false,

}) {

    return (

        <div className="action-buttons">

            <button

                className="action-btn pass-btn"

                onClick={onPass}

                disabled={disabled}

            >

                <X size={26} />

                <span>

                    {disabled ? "Please wait..." : "Pass"}

                </span>

            </button>

            <button

                className="action-btn connect-btn"

                onClick={onConnect}

                disabled={disabled}

            >

                <Check size={26} />

                <span>

                    {disabled ? "Please wait..." : "Connect"}

                </span>

            </button>

        </div>

    );

}


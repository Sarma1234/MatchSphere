import "./ActionButtons.css";
import { X, Check } from "lucide-react";

export default function ActionButtons({
  onPass,
  onConnect,
}) {
  return (
    <div className="action-buttons ">

      <button
        className="action-btn pass-btn"
        onClick={onPass}
      >
        <X size={26} />
        <span>Pass</span>
      </button>

      <button
        className="action-btn connect-btn"
        onClick={onConnect}
      >
        <Check size={26} />
        <span>Connect</span>
      </button>

    </div>
  );
}
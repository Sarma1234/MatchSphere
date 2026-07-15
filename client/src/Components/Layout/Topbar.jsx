import "./Topbar.css";
import { Bell, Search } from "lucide-react";

export default function Topbar({
  title = "Discover",
  subtitle = "Find people who match your purpose",
  showSearch = true,
  showNotification = true,
}) {
  return (
    <header className="topbar glass">
      <div className="topbar-left">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="topbar-right">
        {showSearch && (
          <button className="icon-btn">
            <Search size={20} />
          </button>
        )}

        {showNotification && (
          <button className="icon-btn notification-btn">
            <Bell size={20} />
            <span className="notification-dot"></span>
          </button>
        )}

        <div className="topbar-profile">
          <div className="topbar-avatar">
            VK
          </div>

          <div className="topbar-user">
            <h4>Vikash Kumar</h4>
            <p>Online</p>
          </div>
        </div>
      </div>
    </header>
  );
}
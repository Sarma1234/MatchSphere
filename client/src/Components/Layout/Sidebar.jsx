import "./Sidebar.css";
import {
  Compass,
  Users,
  MessageCircle,
  User,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar glass">

      <div className="sidebar-logo">
        <h2>MatchSphere</h2>
        <p>Purpose Driven</p>
      </div>

      <nav className="sidebar-nav">

        <button className="nav-item active">
          <Compass size={20} />
          <span>Discover</span>
        </button>

        <button className="nav-item">
          <Users size={20} />
          <span>Connections</span>
        </button>

        <button className="nav-item">
          <MessageCircle size={20} />
          <span>Chats</span>
        </button>

        <button className="nav-item">
          <User size={20} />
          <span>Profile</span>
        </button>

        <button className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </button>

      </nav>

      <div className="sidebar-user">

        <div className="avatar">
          VK
        </div>

        <div>

          <h4>Vikash Kumar</h4>

          <p>Hackathon Mode</p>

        </div>

      </div>

    </aside>
  );
}
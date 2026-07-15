import "./BottomNav.css";
import {
  Compass,
  Users,
  MessageCircle,
  User,
  Settings,
} from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="bottom-nav glass">

      <button className="bottom-item active">
        <Compass size={22} />
        <span>Discover</span>
      </button>

      <button className="bottom-item">
        <Users size={22} />
        <span>Connect</span>
      </button>

      <button className="bottom-item">
        <MessageCircle size={22} />
        <span>Chats</span>
      </button>

      <button className="bottom-item">
        <User size={22} />
        <span>Profile</span>
      </button>

      <button className="bottom-item">
        <Settings size={22} />
        <span>Settings</span>
      </button>

    </nav>
  );
}
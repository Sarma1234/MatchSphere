import "./AppLayout.css";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import BottomNav from "./BottomNav";

export default function AppLayout() {


  return (
    <div className="app-layout">

      <Sidebar />

      <Topbar
        title="Discover"
        subtitle="Find people who match your purpose"
      />

      <main className="app-content">
        <Outlet />
      </main>

      <BottomNav />

    </div>
  );
}
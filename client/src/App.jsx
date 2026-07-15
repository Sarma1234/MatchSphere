import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import Auth from "./pages/Auth";

// Private Layout
import AppLayout from "./components/Layout/AppLayout";

// Private Pages
import Discover from "./pages/Discover/Discover";
// import Profile from "./pages/Profile/Profile";
// import Chats from "./pages/Chats/Chats";
// import Settings from "./pages/Settings/Settings";
// import Requests from "./pages/Requests/Requests";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ---------- Public Routes ---------- */}

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />

        {/* ---------- Private Routes ---------- */}

        <Route element={<AppLayout />}>

          <Route
            path="/discover"
            element={<Discover />}
          />
{/* 
          <Route
            path="/requests"
            element={<Requests />}
          />

          <Route
            path="/chats"
            element={<Chats />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />*/}

        </Route> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
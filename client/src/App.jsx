import { useEffect } from "react";
import { getMyProfile } from "./services/userService";
import { applyAppearance } from "./utils/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Public Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import Auth from "./pages/Auth";

// Private Layout
import AppLayout from "./components/Layout/AppLayout";

// Private Pages
import Discover from "./pages/Discover/Discover";
import EditProfile from "./pages/EditProfile/EditProfile";
import Profile from "./pages/Profile/Profile";
import Chats from "./pages/Chats/Chats";
import Settings from "./pages/Settings/Settings";
// import Requests from "./pages/Requests/Requests";
import Connections from "./pages/Connections/Connections";

function App() {
    useEffect(() => {

    const loadAppearance = async () => {

        try {

            const response = await getMyProfile();

            applyAppearance(
                response.data.appearance
            );

        }

        catch (error) {

            console.error(error);

        }

    };

    loadAppearance();

}, []);

    return (

        <BrowserRouter>

            <Routes>

                {/* ---------- Public Routes ---------- */}

                <Route path="/" element={<LandingPage />} />

                <Route
                    path="/login"
                    element={<Auth />}
                />

                <Route
                    path="/signup"
                    element={<Auth />}
                />

                {/* ---------- Private Routes ---------- */}

                <Route
                    path="/"
                    element={<AppLayout />}
                >

                    <Route
                        path="/discover"
                        element={<Discover />}
                    />

                    <Route
                        path="/connections"
                        element={<Connections />}
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
                        path="/edit-profile"
                        element={<EditProfile />}
                    />

                    <Route
                        path="/settings"
                        element={<Settings />}
                    />

                    {/*
                    <Route
                        path="/requests"
                        element={<Requests />}
                    />
                    */}

                </Route>

            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
                theme="dark"
            />

        </BrowserRouter>

    );

}

export default App;
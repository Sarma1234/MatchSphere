// import LandingPage from "./pages/LandingPage/LandingPage";

// function App() {
//   return <LandingPage />;
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
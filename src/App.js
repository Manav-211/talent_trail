import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CareerRecommendations from "./pages/CareerRecommendations";
import Mentorship from "./pages/Mentorship";
import Forum from "./pages/Forum";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/career-recommendations" element={<CareerRecommendations />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;

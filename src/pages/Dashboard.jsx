import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Talent Trail</h1>
      <nav className="flex space-x-4">
        <Link to="/career-recommendations" className="bg-blue-500 text-white p-3 rounded">Career Recommendations</Link>
        <Link to="/mentorship" className="bg-green-500 text-white p-3 rounded">Mentorship</Link>
        <Link to="/forum" className="bg-yellow-500 text-white p-3 rounded">Community Forum</Link>
        <Link to="/profile" className="bg-gray-500 text-white p-3 rounded">Profile</Link>
      </nav>
    </div>
  );
}

export default Dashboard;

import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <input className="w-full p-2 border mb-3" type="email" placeholder="Email" />
        <input className="w-full p-2 border mb-3" type="password" placeholder="Password" />
        <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        <p className="mt-2 text-sm">
          Don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

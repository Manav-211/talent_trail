import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <input className="w-full p-2 border mb-3" type="text" placeholder="Name" />
        <input className="w-full p-2 border mb-3" type="email" placeholder="Email" />
        <input className="w-full p-2 border mb-3" type="password" placeholder="Password" />
        <button className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
        <p className="mt-2 text-sm">
          Already have an account? <Link to="/" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

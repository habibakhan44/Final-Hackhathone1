import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', credentials);
      localStorage.setItem('token', res.data.token);
      navigate('/admin/dashboard');
    } catch (error) {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-200 via-indigo-300 to-blue-400 flex items-center justify-center px-4 py-8">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-100 drop-shadow-md">
          Admin Login
        </h2>

        <div className="mb-5">
          <label className="block text-gray-200 mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            className="w-full px-4 py-2 rounded-xl bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-200 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="w-full px-4 py-2 rounded-xl bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

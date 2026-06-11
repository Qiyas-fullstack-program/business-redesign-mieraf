import { useState } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { Car } from 'lucide-react';           // ← Add this import
import Button from '../../components/ui/Button';

export default function Login() {
  const [username, setUsername] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-700 to-dark-900 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
            <Car className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Owner Login</h2>
          <p className="text-gray-600 mt-2">Ethio Shine Wash Dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500"
              placeholder="Enter your username"
              required
            />
          </div>

          <Button type="submit" className="w-full py-4 text-lg">
            Login to Dashboard
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Demo: Type any username (e.g. admin, dawit, etc.)
        </p>
      </div>
    </div>
  );
}
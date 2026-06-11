import { Link, useLocation } from 'react-router-dom';
import { Car, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';

export default function Navbar() {
  const location = useLocation();
  const { isLoggedIn } = useAuthStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-dark-900">Ethio Shine Wash</h1>
              <p className="text-xs text-gray-500 -mt-1">Premium Detailing</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-700">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <Link to="/services" className="hover:text-primary-600">Services</Link>
            <Link to="/gallery" className="hover:text-primary-600">Gallery</Link>
            <Link to="/booking" className="hover:text-primary-600">Book Now</Link>
            <Link to="/about" className="hover:text-primary-600">About</Link>
            <Link to="/contact" className="hover:text-primary-600">Contact</Link>

            <Link to="/dashboard" className="bg-primary-600 text-white px-5 py-2.5 rounded-xl hover:bg-primary-700 flex items-center gap-2">
              <User size={18} /> {isLoggedIn ? 'Dashboard' : 'Owner Login'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-6 py-6 border-t flex flex-col gap-6 text-lg">
            <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link to="/gallery" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link to="/booking" onClick={() => setMobileOpen(false)}>Book Now</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
            
            <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="bg-primary-600 text-white px-6 py-3 rounded-xl inline-block text-center">
              Owner Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
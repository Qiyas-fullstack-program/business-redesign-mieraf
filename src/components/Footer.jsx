import { Link } from 'react-router-dom';
import { Car, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Ethio Shine Wash</h3>
            </div>
            <p className="text-gray-400">
              Premium car wash and detailing service in Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <div className="space-y-3 text-gray-400">
              <Link to="/" className="hover:text-white block">Home</Link>
              <Link to="/services" className="hover:text-white block">Services</Link>
              <Link to="/gallery" className="hover:text-white block">Gallery</Link>
              <Link to="/booking" className="hover:text-white block">Book Now</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact Us</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 w-5 h-5 text-primary-500" />
                <div>Bole, Addis Ababa, Ethiopia</div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 w-5 h-5 text-primary-500" />
                <div>+251 911 555 888</div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 w-5 h-5 text-primary-500" />
                <div>Mon - Sat: 8:00 AM - 6:00 PM</div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Business Hours</h4>
            <div className="space-y-3 text-gray-400">
              <div>Monday - Friday: <span className="text-white">8:00 AM - 6:00 PM</span></div>
              <div>Saturday: <span className="text-white">9:00 AM - 5:00 PM</span></div>
              <div>Sunday: <span className="text-amber-400">Closed</span></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
          © 2026 Ethio Shine Wash. All rights reserved. | Built for Qiyas Fullstack Program
        </div>
      </div>
    </footer>
  );
}
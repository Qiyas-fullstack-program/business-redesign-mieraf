import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact'

import DashboardLayout from './pages/dashboard/DashboardLayout';
import Login from './pages/dashboard/Login';
import Overview from './pages/dashboard/Overview';
import Appointments from './pages/dashboard/Appointments';
import Customers from './pages/dashboard/Customers';
import ServiceDashboard from './pages/dashboard/Services';
import Inventory from './pages/dashboard/Inventory';
import Analytics from './pages/dashboard/Analytics';

function App() {
  return (
    <Router basename="/business-redesign-mieraf">
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public Routes */}
<Route path="/" element={<><Navbar /><Home /><Footer /></>} />
<Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
<Route path="/gallery" element={<><Navbar /><Gallery /><Footer /></>} />
<Route path="/booking" element={<><Navbar /><Booking /><Footer /></>} />
<Route path="/about" element={<><Navbar /><About /><Footer /></>} />
<Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />

          {/* Dashboard Routes */}
          <Route path="/dashboard/login" element={<Login />} />
          
          <Route path="/dashboard/*" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="customers" element={<Customers />} />
            <Route path="services" element={<ServiceDashboard />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="analytics" element={<Analytics />} />
            {/* We will add more pages here later */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
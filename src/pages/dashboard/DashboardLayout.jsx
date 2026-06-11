import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Car, LayoutDashboard, Calendar, Users, Package, BarChart3, LogOut, Menu } from 'lucide-react';
import { useState } from 'react';

export default function DashboardLayout() {
  const { isLoggedIn, user, logout } = useAuthStore();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock login if not logged in
  if (!isLoggedIn) {
    return <Navigate to="/dashboard/login" replace />;
  }

  const navItems = [
    { path: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { path: "/dashboard/appointments", label: "Appointments", icon: Calendar },
    { path: "/dashboard/customers", label: "Customers", icon: Users },
    { path: "/dashboard/services", label: "Services", icon: Car },
    { path: "/dashboard/inventory", label: "Inventory", icon: Package },
    { path: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>
        <div className="p-6 border-b flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
            <Car className="w-6 h-6 text-white" />
          </div>
          {sidebarOpen && (
            <div>
              <h1 className="font-bold text-xl">Ethio Shine Wash</h1>
              <p className="text-xs text-gray-500">Admin Dashboard</p>
            </div>
          )}
        </div>

        <div className="flex-1 px-3 py-6">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || 
                             (item.path === "/dashboard" && location.pathname === "/dashboard");
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-primary-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <Icon size={20} />
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t">
          <button
            onClick={logout}
            className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-medium">Welcome back, {user?.username || "Owner"}</p>
              <p className="text-sm text-gray-500">Manager</p>
            </div>
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              👋
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
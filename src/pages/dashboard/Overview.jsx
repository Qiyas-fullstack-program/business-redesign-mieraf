import { useBusinessStore } from '../../store/useBusinessStore';
import Card from '../../components/ui/Card';
import { Calendar, Users, DollarSign, TrendingUp } from 'lucide-react';

export default function Overview() {
  const { stats, appointments } = useBusinessStore();

  const todayAppointments = appointments.filter(app => 
    app.date === "2026-06-12" // Current mock date
  );

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Today's Revenue</p>
              <p className="text-4xl font-bold mt-3">{stats.todayRevenue || 2450} ETB</p>
            </div>
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <p className="text-green-600 text-sm mt-4 flex items-center gap-1">
            <TrendingUp size={16} /> +12% from yesterday
          </p>
        </Card>

        <Card className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Appointments Today</p>
              <p className="text-4xl font-bold mt-3">{todayAppointments.length}</p>
            </div>
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">4 Completed • 2 In Progress</p>
        </Card>

        <Card className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Customers</p>
              <p className="text-4xl font-bold mt-3">12</p>
            </div>
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">This week</p>
        </Card>

        <Card className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Completion Rate</p>
              <p className="text-4xl font-bold mt-3">{stats.completionRate || 94}%</p>
            </div>
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-amber-600" />
            </div>
          </div>
          <p className="text-green-600 text-sm mt-4">Excellent performance</p>
        </Card>
      </div>

      {/* Recent Appointments */}
      <Card className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Today's Appointments</h2>
          <a href="/dashboard/appointments" className="text-primary-600 hover:underline text-sm font-medium">
            View All →
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-4 font-medium">Customer</th>
                <th className="pb-4 font-medium">Vehicle</th>
                <th className="pb-4 font-medium">Service</th>
                <th className="pb-4 font-medium">Time</th>
                <th className="pb-4 font-medium">Amount</th>
                <th className="pb-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {todayAppointments.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="py-5 font-medium">{app.customerName}</td>
                  <td className="py-5 text-gray-600">{app.vehicle}</td>
                  <td className="py-5">{app.service}</td>
                  <td className="py-5 text-gray-600">{app.time}</td>
                  <td className="py-5 font-medium">{app.amount} ETB</td>
                  <td className="py-5">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-medium
                          ${app.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                            app.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : 
                            'bg-blue-100 text-blue-700'}`}>
                          {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
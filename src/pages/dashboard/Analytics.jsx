import { useBusinessStore } from '../../store/useBusinessStore';
import Card from '../../components/ui/Card';
import { TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

export default function Analytics() {
  const { stats, appointments } = useBusinessStore();

  const totalRevenue = appointments.reduce((sum, app) => sum + app.amount, 0);
  const completedAppointments = appointments.filter(a => a.status === 'Completed').length;
  const completionRate = appointments.length > 0 
    ? Math.round((completedAppointments / appointments.length) * 100) 
    : 94;

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Analytics & Reports</h1>
        <p className="text-gray-600 mt-2">Business performance overview</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="p-8">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Total Revenue</p>
              <p className="text-4xl font-bold mt-4">{totalRevenue} ETB</p>
            </div>
            <DollarSign className="w-12 h-12 text-green-600" />
          </div>
          <p className="text-green-600 mt-6 text-sm">+18% this month</p>
        </Card>

        <Card className="p-8">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Appointments</p>
              <p className="text-4xl font-bold mt-4">{appointments.length}</p>
            </div>
            <Calendar className="w-12 h-12 text-blue-600" />
          </div>
          <p className="text-gray-600 mt-6 text-sm">This period</p>
        </Card>

        <Card className="p-8">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Completion Rate</p>
              <p className="text-4xl font-bold mt-4">{completionRate}%</p>
            </div>
            <TrendingUp className="w-12 h-12 text-emerald-600" />
          </div>
          <p className="text-emerald-600 mt-6 text-sm">Excellent</p>
        </Card>

        <Card className="p-8">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Avg. Ticket</p>
              <p className="text-4xl font-bold mt-4">
                {appointments.length > 0 ? Math.round(totalRevenue / appointments.length) : 750} ETB
              </p>
            </div>
            <Users className="w-12 h-12 text-purple-600" />
          </div>
          <p className="text-gray-600 mt-6 text-sm">Per service</p>
        </Card>
      </div>

      {/* Simple Chart Simulation */}
      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-8">Revenue Trend (Last 7 Days)</h2>
        
        <div className="h-80 flex items-end gap-4 justify-around">
          {[4200, 3800, 5100, 2900, 6700, 5400, 7200].map((amount, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className="bg-primary-600 rounded-t w-full transition-all hover:bg-primary-700"
                style={{ height: `${(amount / 8000) * 280}px` }}
              ></div>
              <p className="text-xs text-gray-500 mt-3">Day {index + 1}</p>
              <p className="text-sm font-medium">{amount} ETB</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-8 text-center text-sm text-gray-500">
        In a real app, this would connect to a backend with proper charts (Recharts / Chart.js)
      </div>
    </div>
  );
}
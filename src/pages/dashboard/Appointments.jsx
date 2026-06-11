import { useBusinessStore } from '../../store/useBusinessStore';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useState } from 'react';

export default function Appointments() {
  const { appointments, updateAppointmentStatus, addAppointment } = useBusinessStore();
  const [filter, setFilter] = useState('All');

  const filteredAppointments = filter === 'All' 
    ? appointments 
    : appointments.filter(app => app.status === filter);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'In Progress': return 'bg-yellow-100 text-yellow-700';
      case 'Confirmed': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Appointments</h1>
          <p className="text-gray-600">Manage all customer bookings</p>
        </div>
        <Button onClick={() => alert('New appointment form coming soon!')}>
          + New Appointment
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-8">
        {['All', 'Confirmed', 'In Progress', 'Completed'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-5 py-2 rounded-xl font-medium transition ${
              filter === status 
                ? 'bg-primary-600 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b text-left text-sm text-gray-600">
                <th className="px-8 py-5 font-medium">ID</th>
                <th className="px-8 py-5 font-medium">Customer</th>
                <th className="px-8 py-5 font-medium">Vehicle</th>
                <th className="px-8 py-5 font-medium">Service</th>
                <th className="px-8 py-5 font-medium">Date</th>
                <th className="px-8 py-5 font-medium">Time</th>
                <th className="px-8 py-5 font-medium">Amount</th>
                <th className="px-8 py-5 font-medium">Status</th>
                <th className="px-8 py-5 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredAppointments.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-8 py-6 font-mono text-sm">#{app.id}</td>
                  <td className="px-8 py-6 font-medium">{app.customerName}</td>
                  <td className="px-8 py-6 text-gray-600">{app.vehicle}</td>
                  <td className="px-8 py-6">{app.service}</td>
                  <td className="px-8 py-6 text-gray-600">{app.date}</td>
                  <td className="px-8 py-6 font-medium">{app.time}</td>
                  <td className="px-8 py-6 font-semibold">{app.amount} ETB</td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <select
                      value={app.status}
                      onChange={(e) => updateAppointmentStatus(app.id, e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-primary-500"
                    >
                      <option value="Confirmed">Confirmed</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {filteredAppointments.length === 0 && (
        <p className="text-center text-gray-500 py-12">No appointments found.</p>
      )}
    </div>
  );
}
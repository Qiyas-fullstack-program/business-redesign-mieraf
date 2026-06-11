import { useBusinessStore } from '../../store/useBusinessStore';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useState } from 'react';

export default function Customers() {
  const { customers } = useBusinessStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Customers</h1>
          <p className="text-gray-600">Manage your loyal customers and their vehicles</p>
        </div>
        <Button>+ Add New Customer</Button>
      </div>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search customers or vehicles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500"
        />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b text-left text-sm text-gray-600">
                <th className="px-8 py-5 font-medium">Customer Name</th>
                <th className="px-8 py-5 font-medium">Phone</th>
                <th className="px-8 py-5 font-medium">Vehicle</th>
                <th className="px-8 py-5 font-medium">Total Visits</th>
                <th className="px-8 py-5 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-8 py-6 font-medium">{customer.name}</td>
                  <td className="px-8 py-6 text-gray-600">{customer.phone}</td>
                  <td className="px-8 py-6 font-medium">{customer.vehicle}</td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {customer.visits} visits
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <Button variant="outline" size="sm">
                      View History
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {filteredCustomers.length === 0 && (
        <p className="text-center py-12 text-gray-500">No customers found.</p>
      )}
    </div>
  );
}
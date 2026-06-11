import { useBusinessStore } from '../../store/useBusinessStore';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useState } from 'react';

export default function ServicesDashboard() {
  const { services, addService } = useBusinessStore();
  const [newService, setNewService] = useState({
    name: '',
    price: '',
    duration: '',
    description: '',
    category: ''
  });

  const handleAddService = () => {
    if (newService.name && newService.price) {
      const serviceToAdd = {
        id: Date.now(),
        name: newService.name,
        price: parseInt(newService.price),
        duration: newService.duration || "45 min",
        description: newService.description,
        category: newService.category || "Wash"
      };
      
      addService(serviceToAdd);
      setNewService({ name: '', price: '', duration: '', description: '', category: '' });
      alert('Service added successfully!');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Services Management</h1>
          <p className="text-gray-600">Add, edit and manage your service offerings</p>
        </div>
      </div>

      {/* Add New Service Form */}
      <Card className="p-8 mb-10">
        <h2 className="text-2xl font-semibold mb-6">Add New Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Service Name</label>
            <input
              type="text"
              value={newService.name}
              onChange={(e) => setNewService({...newService, name: e.target.value})}
              className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500"
              placeholder="e.g. Ceramic Coating"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price (ETB)</label>
            <input
              type="number"
              value={newService.price}
              onChange={(e) => setNewService({...newService, price: e.target.value})}
              className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500"
              placeholder="1500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Duration</label>
            <input
              type="text"
              value={newService.duration}
              onChange={(e) => setNewService({...newService, duration: e.target.value})}
              className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500"
              placeholder="2 hours"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={newService.category}
              onChange={(e) => setNewService({...newService, category: e.target.value})}
              className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500"
            >
              <option value="">Select Category</option>
              <option value="Wash">Wash</option>
              <option value="Detailing">Detailing</option>
              <option value="Interior">Interior</option>
              <option value="Exterior">Exterior</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={newService.description}
            onChange={(e) => setNewService({...newService, description: e.target.value})}
            className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500 h-24"
            placeholder="Describe the service..."
          />
        </div>

        <Button onClick={handleAddService} className="mt-6">
          Add Service
        </Button>
      </Card>

      {/* Existing Services */}
      <Card>
        <div className="p-6 border-b">
          <h2 className="text-2xl font-semibold">Current Services</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b text-left text-sm text-gray-600">
                <th className="px-8 py-5 font-medium">Service</th>
                <th className="px-8 py-5 font-medium">Category</th>
                <th className="px-8 py-5 font-medium">Duration</th>
                <th className="px-8 py-5 font-medium text-right">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50">
                  <td className="px-8 py-6 font-medium">{service.name}</td>
                  <td className="px-8 py-6">
                    <span className="px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                      {service.category}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-gray-600">{service.duration}</td>
                  <td className="px-8 py-6 text-right font-semibold text-lg">
                    {service.price} ETB
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
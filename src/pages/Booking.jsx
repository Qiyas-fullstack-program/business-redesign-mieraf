import { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useBusinessStore } from '../store/useBusinessStore';
import { Calendar, Clock, User } from 'lucide-react';

export default function Booking() {
  const { services, addAppointment } = useBusinessStore();
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    vehicle: '',
    serviceId: '',
    date: '',
    time: '',
  });

  const selectedService = services.find(s => s.id === parseInt(formData.serviceId));

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.customerName || !formData.serviceId || !formData.date || !formData.time) {
      alert("Please fill all required fields");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      customerName: formData.customerName,
      vehicle: formData.vehicle || "Not specified",
      service: selectedService ? selectedService.name : "Custom Service",
      date: formData.date,
      time: formData.time,
      status: "Confirmed",
      amount: selectedService ? selectedService.price : 0
    };

    addAppointment(newAppointment);
    
    alert("🎉 Booking Successful! Your appointment has been confirmed.");
    
    // Reset form
    setFormData({
      customerName: '',
      phone: '',
      vehicle: '',
      serviceId: '',
      date: '',
      time: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-600">Get your car shining in no time</p>
        </div>

        <Card className="p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Info */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={formData.customerName}
                    onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500"
                    placeholder="Abebe Kebede"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500"
                    placeholder="+251 911 234 567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Vehicle Model</label>
                  <input
                    type="text"
                    value={formData.vehicle}
                    onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500"
                    placeholder="Toyota Camry 2022"
                  />
                </div>
              </div>

              {/* Service & Time */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Service <span className="text-red-500">*</span></label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({...formData, serviceId: e.target.value})}
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500"
                    required
                  >
                    <option value="">Choose a service</option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name} - {service.price} ETB ({service.duration})
                      </option>
                    ))}
                  </select>
                </div>

                {selectedService && (
                  <div className="bg-primary-50 p-5 rounded-2xl">
                    <p className="font-medium">{selectedService.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{selectedService.description}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date <span className="text-red-500">*</span></label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Time <span className="text-red-500">*</span></label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500"
                      required
                    >
                      <option value="">Select time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <Button type="submit" className="w-full py-4 text-lg">
                Confirm Booking
              </Button>
              <p className="text-center text-sm text-gray-500 mt-4">
                You will receive a confirmation via phone
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
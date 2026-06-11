import { useBusinessStore } from '../store/useBusinessStore';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function Services() {
  const { services } = useBusinessStore();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional car wash and detailing services tailored for your vehicle
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="p-8 hover:scale-[1.02] transition-transform">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-500">{service.duration}</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold text-primary-600">
                    {service.price} ETB
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {service.category}
                </span>
                <Button>Book This Service</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 bg-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Our Services Stand Out</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-5xl mb-4">🚿</div>
              <h4 className="font-semibold">Eco-Friendly Products</h4>
              <p className="text-gray-600 mt-2">Water-saving technology and biodegradable cleaners</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🛡️</div>
              <h4 className="font-semibold">Satisfaction Guaranteed</h4>
              <p className="text-gray-600 mt-2">Not happy? We'll redo it free of charge</p>
            </div>
            <div>
              <div className="text-5xl mb-4">⏱️</div>
              <h4 className="font-semibold">Flexible Timing</h4>
              <p className="text-gray-600 mt-2">Early morning and weekend appointments available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
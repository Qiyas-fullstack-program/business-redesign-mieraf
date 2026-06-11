import Card from '../components/ui/Card';

export default function About() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-600">Professional car care with passion since 2022</p>
        </div>

        <Card className="p-12 mb-12">
          <p className="text-lg leading-relaxed text-gray-700">
            Ethio Shine Wash was founded with one mission: to provide world-class car detailing 
            services using premium products and skilled technicians right here in Ethiopia.
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-10">
          <Card className="p-10">
            <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
            <p className="text-gray-600">
              To make every car we touch look brand new while delivering exceptional customer service.
            </p>
          </Card>

          <Card className="p-10">
            <h3 className="text-2xl font-semibold mb-6">Our Values</h3>
            <ul className="space-y-4 text-gray-600">
              <li>✓ Quality over quantity</li>
              <li>✓ Eco-friendly practices</li>
              <li>✓ Customer satisfaction first</li>
              <li>✓ Attention to every detail</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
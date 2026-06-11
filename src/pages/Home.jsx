import { Link } from 'react-router-dom';
import { Car, Clock, Award, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-dark-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            Shine Like Never Before
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-white/90">
            Premium Car Wash &amp; Detailing in Ethiopia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="text-lg px-10 py-4 text-xl">Book Appointment Now</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="text-lg px-10 py-4 text-xl border-white text-white hover:bg-white hover:text-dark-900">
                See Our Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <p className="text-sm tracking-widest">SCROLL TO EXPLORE ↓</p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600">5000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600">2hrs</div>
            <div className="text-gray-600">Avg. Detailing Time</div>
          </div>
        </div>
      </div>

      {/* Services Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional care for your vehicle</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Basic Wash</h3>
              <p className="text-gray-600 mb-6">Exterior wash, tire shine &amp; interior vacuum. Quick and fresh.</p>
              <div className="text-3xl font-bold text-primary-600 mb-6">350 ETB</div>
              <Link to="/services"><Button className="w-full">Learn More</Button></Link>
            </Card>

            <Card className="p-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Premium Detailing</h3>
              <p className="text-gray-600 mb-6">Complete interior + exterior transformation. The full shine experience.</p>
              <div className="text-3xl font-bold text-primary-600 mb-6">1,200 ETB</div>
              <Link to="/services"><Button className="w-full">Learn More</Button></Link>
            </Card>

            <Card className="p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Interior Deep Clean</h3>
              <p className="text-gray-600 mb-6">Thorough cleaning of seats, carpets, and dashboard.</p>
              <div className="text-3xl font-bold text-primary-600 mb-6">850 ETB</div>
              <Link to="/services"><Button className="w-full">Learn More</Button></Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold leading-tight mb-8">
                We don't just wash cars.<br />
                We restore their pride.
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                With years of experience and premium products, Ethio Shine Wash delivers the highest standard of car care in Ethiopia.
              </p>
              <Link to="/about">
                <Button>Learn Our Story</Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow">
                <Users className="w-12 h-12 text-primary-600 mb-4" />
                <h4 className="font-semibold text-xl">Expert Team</h4>
                <p className="text-gray-600">Trained and passionate detailers</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow">
                <Award className="w-12 h-12 text-accent-500 mb-4" />
                <h4 className="font-semibold text-xl">Premium Products</h4>
                <p className="text-gray-600">Only the best materials used</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to make your car shine?</h2>
          <p className="text-xl mb-8">Book your appointment today and experience the difference</p>
          <Link to="/booking">
            <Button className="text-xl px-12 py-4 bg-white text-primary-700 hover:bg-gray-100">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
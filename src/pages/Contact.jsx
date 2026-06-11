import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600">We're here to help keep your car shining</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-10">
            <h2 className="text-2xl font-semibold mb-8">Send us a Message</h2>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message sent! (Demo)"); }}>
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input type="text" className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500" placeholder="Abebe Kebede" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input type="tel" className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500" placeholder="+251 911 234 567" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary-500 h-40" placeholder="I would like to book a premium detailing..." required></textarea>
              </div>

              <Button type="submit" className="w-full py-4">Send Message</Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl">Location</h3>
                  <p className="text-gray-600 mt-2">Bole Road, Behind Edna Mall<br />Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </Card>

            <Card className="p-10">
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl">Call Us</h3>
                  <p className="text-gray-600 mt-2">+251 911 555 888<br />+251 900 777 666</p>
                </div>
              </div>
            </Card>

            <Card className="p-10">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl">Working Hours</h3>
                  <p className="text-gray-600 mt-2">Monday - Saturday: 8:00 AM - 6:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
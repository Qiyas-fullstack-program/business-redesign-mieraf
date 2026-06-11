import { useState } from 'react';
import Card from '../components/ui/Card';

const galleryImages = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1581232324547-1e0e9d8f0d3e",
    after: "https://images.unsplash.com/photo-1494976388531-d1058494a5d8",
    title: "Toyota Camry - Full Detail",
    category: "Exterior"
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    after: "https://images.unsplash.com/photo-1609521263047-f8f205293f24",
    title: "Honda Civic Interior",
    category: "Interior"
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1605559424843-9e4c228d1b5f",
    after: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    title: "Suzuki Vitara - Premium Package",
    category: "Full Detail"
  },
  {
    id: 4,
    before: "https://images.unsplash.com/photo-1549317666-4c07c4c2e5e2",
    after: "https://images.unsplash.com/photo-1618843479313-40f8e899fcce",
    title: "Engine Bay Cleaning",
    category: "Detailing"
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-gray-600">Real results from real cars</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['All', 'Exterior', 'Interior', 'Full Detail', 'Detailing'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-2xl font-medium transition ${
                filter === cat 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredImages.map((item) => (
            <Card key={item.id} className="overflow-hidden group">
              <div className="grid grid-cols-2 gap-1">
                {/* Before */}
                <div className="relative">
                  <img 
                    src={item.before} 
                    alt="Before" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    BEFORE
                  </div>
                </div>
                
                {/* After */}
                <div className="relative">
                  <img 
                    src={item.after} 
                    alt="After" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                    AFTER
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-xl mb-1">{item.title}</h3>
                <p className="text-primary-600 font-medium">{item.category}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 max-w-md mx-auto">
            Want your car to look like this? 
            <span className="block mt-3">
              <a href="/booking" className="text-primary-600 hover:underline font-medium">Book your appointment today →</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
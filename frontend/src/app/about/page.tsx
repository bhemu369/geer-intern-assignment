import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Naksh Jewels | Premium Jewelry Craftsmanship',
  description: 'Learn about Naksh Jewels\' heritage, craftsmanship, and commitment to creating exquisite jewelry pieces since 1975. Meet our team of skilled artisans.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Naksh Jewels</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting exquisite jewelry for over three generations, blending traditional artistry with contemporary design.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 1975, Naksh Jewels began as a small family business with a simple vision: 
                to create jewelry that tells a story. What started as a humble workshop has grown into 
                one of India's most trusted jewelry houses, known for our commitment to quality and craftsmanship.
              </p>
              <p>
                Our name "Naksh" means "design" or "pattern" in Sanskrit, reflecting our dedication to 
                creating intricate, meaningful pieces that celebrate life's precious moments. Every piece 
                in our collection is carefully designed and crafted by skilled artisans who have perfected 
                their craft over decades.
              </p>
              <p>
                From engagement rings that mark the beginning of a lifetime journey to heritage pieces 
                passed down through generations, we believe that jewelry should be more than just an 
                accessory – it should be a treasured part of your story.
              </p>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-amber-700">
              <div className="text-6xl mb-4">💎</div>
              <div className="text-lg font-medium">Crafting Excellence Since 1975</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">⚒️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Master Craftsmanship</h3>
              <p className="text-gray-600">
                Every piece is meticulously handcrafted by skilled artisans who bring decades of experience 
                and passion to their work. We believe in the art of traditional jewelry making.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Authentic Materials</h3>
              <p className="text-gray-600">
                We source only the finest precious metals and gemstones from trusted suppliers worldwide. 
                Each stone is carefully selected for its quality, beauty, and ethical sourcing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships with our customers is at the heart of everything we do. 
                We provide lifetime warranty and after-sales service for all our jewelry pieces.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">RK</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rajesh Kumar</h3>
              <p className="text-amber-600 font-medium mb-2">Founder & Master Craftsman</p>
              <p className="text-gray-600 text-sm">
                With over 45 years of experience, Rajesh founded Naksh Jewels with a vision to preserve 
                traditional jewelry making techniques while embracing modern designs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">PS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Priya Sharma</h3>
              <p className="text-amber-600 font-medium mb-2">Head Designer</p>
              <p className="text-gray-600 text-sm">
                Priya brings contemporary flair to our traditional designs. Her innovative approach has 
                won numerous awards and recognition in the jewelry industry.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">AV</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Amit Verma</h3>
              <p className="text-amber-600 font-medium mb-2">Quality Assurance Manager</p>
              <p className="text-gray-600 text-sm">
                Amit ensures that every piece meets our stringent quality standards. His attention to 
                detail guarantees that customers receive only the finest jewelry.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg p-8 shadow-md text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            To create timeless pieces of jewelry that celebrate life's most precious moments, 
            while preserving the ancient art of craftsmanship for future generations. We are 
            committed to ethical practices, sustainable sourcing, and delivering exceptional 
            value to our customers through uncompromising quality and personalized service.
          </p>
        </div>
      </div>
    </div>
  );
}

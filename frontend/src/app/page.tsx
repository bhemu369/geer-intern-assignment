import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Naksh Jewels
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our exquisite collection of handcrafted jewelry pieces, 
            where tradition meets modern elegance.
          </p>
          <Link 
            href="/products"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Collection
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Crafted with the finest materials and attention to detail</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💎</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Authentic Gems</h3>
            <p className="text-gray-600">Genuine precious stones sourced from trusted suppliers</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Artisan Crafted</h3>
            <p className="text-gray-600">Each piece is uniquely designed by skilled artisans</p>
          </div>
        </div>
      </div>
    </div>
  );
}

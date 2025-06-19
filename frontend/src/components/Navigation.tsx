import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-amber-600">
            Naksh Jewels
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition duration-300">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-amber-600 transition duration-300">
              Products
            </Link>
            <Link href="#" className="text-gray-700 hover:text-amber-600 transition duration-300">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-amber-600 transition duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

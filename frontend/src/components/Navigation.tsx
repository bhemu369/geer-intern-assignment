'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-amber-600">
            Naksh Jewels
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition duration-300">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-amber-600 transition duration-300">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition duration-300">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 transition duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition duration-300"
              >
                Products
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

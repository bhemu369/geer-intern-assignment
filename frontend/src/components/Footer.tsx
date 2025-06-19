import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">Naksh Jewels</h3>
            <p className="text-gray-300 mb-4">
              Crafting exquisite jewelry for over three generations. Where tradition meets modern elegance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-amber-400 transition duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400 transition duration-300">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400 transition duration-300">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-amber-400 transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=Rings" className="text-gray-300 hover:text-amber-400 transition duration-300">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="/products?category=Necklaces" className="text-gray-300 hover:text-amber-400 transition duration-300">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/products?category=Earrings" className="text-gray-300 hover:text-amber-400 transition duration-300">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/products?category=Bracelets" className="text-gray-300 hover:text-amber-400 transition duration-300">
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  123 Jewelry Street<br />
                  Karol Bagh, New Delhi - 110005
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 11 2345-6789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@nakshjewels.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Naksh Jewels. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-300 hover:text-amber-400 text-sm transition duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400 text-sm transition duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400 text-sm transition duration-300">
                Returns & Exchanges
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/product';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = useCallback(async (id: string) => {
    try {
      const response = await fetch(`/api/products/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      } else {
        console.error('Product not found');
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id as string);
    }
  }, [params.id, fetchProduct]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <button
            onClick={() => router.push('/products')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Product Details */}
            <div className="p-8">
              <div className="mb-4">
                <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              
              <p className="text-4xl font-bold text-amber-600 mb-6">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description || 'No description available for this product.'}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Product Features</h2>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    Premium quality materials
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    Handcrafted by skilled artisans
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    Lifetime warranty included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    Free shipping and secure packaging
                  </li>
                </ul>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg font-semibold transition duration-300">
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

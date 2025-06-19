'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onDelete?: (id: string) => void;
  showDeleteButton?: boolean;
}

export default function ProductCard({ 
  product, 
  onDelete, 
  showDeleteButton = false 
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(`/api/products/${product.id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          onDelete?.(product.id);
        } else {
          alert('Failed to delete product');
        }
      } catch (error) {
        alert('Error deleting product');
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 w-full bg-gray-200">
        {!imageError ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
            priority={false}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200">
            <div className="text-center text-amber-700">
              <div className="text-4xl mb-2">💎</div>
              <div className="text-sm font-medium">{product.category}</div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        <p className="text-xl font-bold text-amber-600 mb-3">
          ₹{product.price.toLocaleString('en-IN')}
        </p>
        <div className="flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-center py-2 px-4 rounded transition duration-300"
          >
            View Details
          </Link>
          {showDeleteButton && (
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

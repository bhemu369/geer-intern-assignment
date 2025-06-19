import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  const category = searchParams.get('category');

  let filteredProducts = products;

  if (search) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category && category !== 'All') {
    filteredProducts = filteredProducts.filter(product =>
      product.category.toLowerCase() === category.toLowerCase()
    );
  }

  return NextResponse.json(filteredProducts);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, price, imageUrl, category, description } = body;

    if (!name || !price || !imageUrl || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newProduct: Product = {
      id: uuidv4(),
      name,
      price: parseFloat(price),
      imageUrl,
      category,
      description: description || ''
    };

    products.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON' },
      { status: 400 }
    );
  }
}

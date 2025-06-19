import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const productIndex = products.findIndex(product => product.id === id);

  if (productIndex === -1) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404 }
    );
  }

  const deletedProduct = products.splice(productIndex, 1)[0];

  return NextResponse.json({
    message: 'Product deleted successfully',
    product: deletedProduct
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const product = products.find(product => product.id === id);

  if (!product) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}

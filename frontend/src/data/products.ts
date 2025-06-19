import { Product } from '@/types/product';

// Mutable array to allow modifications via API
export let products: Product[] = [
  {
    id: '1',
    name: 'Diamond Solitaire Ring',
    price: 25000,
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'Rings',
    description: 'Elegant diamond solitaire ring crafted in 18k white gold with a brilliant cut diamond.'
  },
  {
    id: '2',
    name: 'Gold Pearl Necklace',
    price: 18000,
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'Necklaces',
    description: 'Classic pearl necklace with lustrous cultured pearls and 22k gold clasp.'
  },
  {
    id: '3',
    name: 'Emerald Drop Earrings',
    price: 32000,
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'Earrings',
    description: 'Stunning emerald drop earrings with diamond accents in rose gold setting.'
  },
  {
    id: '4',
    name: 'Sapphire Tennis Bracelet',
    price: 45000,
    imageUrl: 'https://images.unsplash.com/photo-1611652022313-8fae96a03e4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'Bracelets',
    description: 'Premium sapphire tennis bracelet with alternating blue sapphires and diamonds.'
  },
  {
    id: '5',
    name: 'Ruby Pendant',
    price: 22000,
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'Necklaces',
    description: 'Exquisite ruby pendant with intricate filigree work in yellow gold.'
  },
  {
    id: '6',
    name: 'Diamond Eternity Band',
    price: 38000,
    imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'Rings',
    description: 'Timeless diamond eternity band with perfectly matched round brilliant diamonds.'
  },
  {
    id: '7',
    name: 'Vintage Art Deco Ring',
    price: 55000,
    imageUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'Rings',
    description: 'Rare vintage Art Deco ring featuring geometric patterns and precious stones.'
  },
  {
    id: '8',
    name: 'Pearl Chandelier Earrings',
    price: 28000,
    imageUrl: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'Earrings',
    description: 'Luxurious chandelier earrings with multiple tiers of cultured pearls.'
  }
];

# Naksh Jewels - E-commerce Platform

A modern, responsive e-commerce web application for jewelry shopping, built with Next.js and TypeScript.

## 🚀 Features

- **Product Listing**: Browse through a beautiful collection of jewelry pieces
- **Search & Filter**: Search products by name and filter by category
- **Product Details**: Detailed view of individual products with descriptions
- **CRUD Operations**: Add and delete products (admin functionality)
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional interface with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: Next.js API Routes
- **Image Handling**: Next.js Image component with optimization

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── products/           # API routes for products
│   │   ├── products/               # Products pages
│   │   │   ├── [id]/              # Individual product page
│   │   │   └── page.tsx           # Products listing page
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/
│   │   └── ProductCard.tsx        # Product card component
│   ├── data/
│   │   └── products.ts           # Sample product data
│   └── types/
│       └── product.ts            # TypeScript interfaces
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Naksh Jewels"
   ```

2. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📡 API Endpoints

The application includes the following API endpoints:

### Products API

- **GET** `/api/products` - Get all products
  - Query params: `search`, `category`
  - Example: `/api/products?search=ring&category=Rings`

- **POST** `/api/products` - Add a new product
  - Body: `{ name, price, imageUrl, category, description }`

- **GET** `/api/products/[id]` - Get a specific product by ID

- **DELETE** `/api/products/[id]` - Delete a product by ID

## 🎨 Design Features

- **Responsive Grid Layout**: Products display in a responsive grid that adapts to screen size
- **Search Functionality**: Real-time search across product names and categories
- **Category Filtering**: Filter products by jewelry categories (Rings, Necklaces, Earrings, Bracelets)
- **Modern Card Design**: Each product is displayed in an elegant card with hover effects
- **Professional Color Scheme**: Warm amber and gold tones reflecting the jewelry theme

## 📱 Pages

### Home Page (`/`)
- Welcome message and brand introduction
- Call-to-action button to browse products
- Feature highlights with icons

### Products Page (`/products`)
- Grid layout of all products
- Search and filter functionality
- Add new product form (admin feature)
- Delete product functionality

### Product Detail Page (`/products/[id]`)
- Large product image
- Detailed product information
- Product features list
- Action buttons (Add to Cart, Save for Later)

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🎯 Key Assumptions & Design Decisions

1. **In-Memory Storage**: Products are stored in memory (array) for simplicity. In production, this would be replaced with a database.

2. **Image Hosting**: Product images are hosted on external URLs (Unsplash). In production, you'd use a CDN or local storage.

3. **No Authentication**: Admin features (add/delete) are accessible to all users. In production, these would be protected.

4. **Single Currency**: All prices are displayed in Indian Rupees (₹).

5. **No Payment Integration**: The "Add to Cart" button is for UI demonstration only.

## 🚀 Production Considerations

For a production deployment, consider:

- Add user authentication and authorization
- Implement a proper database (PostgreSQL, MongoDB)
- Add image upload functionality
- Implement shopping cart and checkout flow
- Add payment gateway integration
- Include product inventory management
- Add user reviews and ratings
- Implement SEO optimization
- Add analytics and monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Naksh Jewels** - Where tradition meets modern elegance ✨

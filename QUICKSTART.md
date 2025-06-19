# Quick Start Guide

## Running the Project

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies (if not already done):**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Routes

- `/` - Home page with brand introduction
- `/products` - Product listing with search and filter
- `/products/[id]` - Individual product detail page

## API Testing

You can test the API endpoints directly:

### Get all products:
```bash
curl http://localhost:3000/api/products
```

### Add a new product:
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Ring",
    "price": 15000,
    "imageUrl": "https://via.placeholder.com/400x400",
    "category": "Rings",
    "description": "A beautiful test ring"
  }'
```

### Get a specific product:
```bash
curl http://localhost:3000/api/products/1
```

### Delete a product:
```bash
curl -X DELETE http://localhost:3000/api/products/1
```

## Development Tasks

- **Start Dev Server**: Use VS Code Task "Start Development Server"
- **Build for Production**: `npm run build`
- **Type Check**: `npm run type-check`
- **Lint Code**: `npm run lint`

## Features to Test

1. **Search Products**: Try searching for "diamond", "gold", "ring", etc.
2. **Filter by Category**: Use the category dropdown to filter products
3. **Add New Product**: Click "Add Product" button and fill in the form
4. **View Product Details**: Click "View Details" on any product card
5. **Delete Products**: Use the red "Delete" button on product cards
6. **Responsive Design**: Test on different screen sizes

The app is fully functional with all CRUD operations working!

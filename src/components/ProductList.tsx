import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList = ({ products, addToCart }: ProductListProps) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Card key={product.id} className="product-card">
          <CardContent className="p-4">
            <div className="aspect-square relative mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-3">{product.description}</p>
            <div className="text-lg font-bold text-primary">${product.price.toFixed(2)}</div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
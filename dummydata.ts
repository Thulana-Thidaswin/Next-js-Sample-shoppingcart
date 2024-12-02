import { Product } from "./interfaces";

export const fetchProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const products: Product[] = await response.json();
      return products.map(product => ({
        id: product.id,
        name: product.name, 
        price: product.price,
        image: product.image,
      }));
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };
  
  // Usage
  fetchProducts().then(dummyProducts => {
    console.log("Fetched products:", dummyProducts);
  });
  
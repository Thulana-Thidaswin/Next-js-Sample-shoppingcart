'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../../../interfaces';

const ProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                // Transform data to match your Product type
                const formattedProducts = data.map((product: any) => ({
                    id: product.id,
                    name: product.title, // Assuming API uses 'title'
                    price: product.price,
                    image: product.image, // Assuming API uses 'image'
                }));
                setProducts(formattedProducts);
            } catch (err: any) {
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div className="p-4">Loading products...</div>;
    if (error) return <div className="p-4 text-red-500">{error}</div>;

    return (
        <div className="p-4 flex-wrap gap-4 grid lg:grid-cols-4 max-w-[1440px] m-auto ">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductPage;

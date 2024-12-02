import React from 'react'
import { Product } from '../../../interfaces';

interface Props {
    product: Product;
}

const ProductCard = async () => {
    const serverData = await fetch('https://fakestoreapi.com/products');
    const products: Product[] = await serverData.json();
    return (
        <div>
            <h1> Products</h1>
            <div></div>
            <ul className='max-w-[1440px] mx-auto flex flex-row flex-wrap'>
                {products.map(product => <li className='m-5 w-[25%]' key={product.id}>{product.name}</li>)}
            </ul>
        </div>
    )
}

export default ProductCard

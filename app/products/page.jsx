'use client';

import React from 'react'
import Link from "next/link";
import { useProducts } from "@/context/ProductContext";



export default function ProductsPage() {
    const { products } = useProducts();

    if (!products.length) return <p>Ürünler Yükleniyor...</p>

    return (
    <div className='p-8'>
        <h1 className='text-3xl font-bold mb-6'>Ürünler</h1>
        <div className='grid grid-cols-3 gap-6'>
                {products.map(product => (
                    <Link
                     key={product.id}
                     href={`/products/${product.id}`}
                     className='border p-4 rounded shadow hover:shadow-lg transition'
                    >
                    <img
                    src={product.thumbnail}
                    alt={product.title}    
                    className='w-full h-40 object-cover mb-2'
                    />
                    <h2 className='text-xl font-semibold'>{product.title}</h2>
                    <p className='text-gray-600'>${product.price}</p>
                    </Link>
                ))}
        </div>
    </div>
     );
};


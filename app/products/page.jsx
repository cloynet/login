'use client';

import React, { useState } from 'react'
import Link from "next/link";
import { useProducts } from "@/context/ProductContext";

export default function ProductsPage() {
    const { products } = useProducts();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!products.length) return <p>Ürünler Yükleniyor...</p>

    return (
    <div className='p-8'>
        <h1 className='text-3xl font-bold mb-6'>Ürünler</h1>
        <input
            type='text'
            placeholder='ürün ara'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='border p-2 rounded mb-6 w-full max-w-md'
        />
        
        <div className='grid grid-cols-3 gap-6'>
        {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
                <Link
                    key={product.title}
                    href={`/products/${product.id}`}
                    className='border p-4 rounded shadow hover:shadow-lg transition'
                >
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className='w-full h-40 object-cover mb-2'
                />
                <h2 className='text-xl font-semibold'>{product.title}</h2>
                <p>${product.price}</p>
                </Link>
            ))
        ) : (
            <p>uygun ürün yok</p>
        )}
        </div>
    </div>
)
}


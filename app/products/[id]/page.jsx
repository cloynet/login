'use client';

import React, { useEffect, useState, use } from 'react'

export default function ProductDetails({ params }) {
  const { id } =  use(params);
  
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  
  if (!product) return <div>Yükleniyor...</div>;


  return (
    <div className='p-8 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
        <img
        src={product.thumbnail || product.images[0]}
        alt={product.title}
        className='w-full max-h-96 object-contain mb-4'
        />
        <p>{product.description}</p>
        <p className='mt-2 font-semibold'>${product.price}</p>

        <p>Marka: {product.brand}</p>
        <p>Kategori: {product.category}</p>
        <p>Stok: {product.stock}</p>
        <p>İndirim: {product.discountPercentage}</p>

        

    </div>
  )
}


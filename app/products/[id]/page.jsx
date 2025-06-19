import React from 'react'

async function fetchProduct(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    return res.json();
}

export default async function ProductDetails({ params }) {
  const { id } = params;
  
  const product = await fetchProduct(id);
    
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

        <h2 className='mt-6 font-semibold'>Yorumlar</h2>
        <ul>
            {product.reviews.map((review, i) => (
                <li key={i} className='mb-2 border-b pb-2'>
                    <p>{review.reviewerName} ({review.rating} / 5)</p>
                    <p>{review.comment}</p>
                </li>
            ))}
        </ul>

    </div>
  )
}


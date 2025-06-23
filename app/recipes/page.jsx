'use client';

import React, { useState } from 'react'
import Link from 'next/link';
import { useRecipes } from "@/context/RecipesContext"

export default function RecipesPage() {
    const { recipes } = useRecipes();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRecipes = recipes.filter(recipe => 
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!recipes.length) return <p>Tarifler Yükleniyor...</p>

  return (
    <div className='p-8'>
        <h1 className='text-3xl font-bold mb-6'>Tarifler</h1>

        <input
          type='text'
          placeholder='tarif ara...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border p-2 rounded mb-6 w-full max-w-md'
        />

        <div className='grid grid-cols-3 gap-6'>
        {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(recipe => (
                        <Link
                            key={recipe.id}
                            href={`/recipes/${recipe.id}`}
                            className='border p-4 rounded shadow hover:shadow-lg transition'
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.name}
                                className='w-full h-40 object-cover mb-2'
                            />
                            <h2 className='text-xl font-semibold'>{recipe.name}</h2>
                        </Link>
                    ))
                ) : (
                    <p>uygun tarif yok</p>
                )}
            </div>
        </div>
  )
}


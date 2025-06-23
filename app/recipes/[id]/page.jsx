'use client';

import React, { useEffect, useState, use } from 'react';

export default function RecipeDetails({ params }) {
    const { id } = use(params);

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchRecipe() {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await res.json();
        setRecipe(data);
        }
        fetchRecipe();
    }, [id]);

    if (!recipe) return <div>Yükleniyor...</div>;

    return (
        <div className='p-8 max-w-4xl mx-auto'>
            <h1 className='text-3xl font-bold mb-4'>{recipe.name}</h1>
            <img
            src={recipe.image}
            alt={recipe.name}
            className='w-full max-h-96 object-contain mb-4'
            />
            <p>{recipe.ingredients}</p>
            <br/>
            <p>{recipe.instructions}</p>
            <br/>
            <p>{recipe.mealType}</p>
            <br/>
            <p>{recipe.prepTimeMinutes}</p>
            <br/>
            <p>{recipe.rating}</p>
            <br/>
            <p>{recipe.reviewCount}</p>
            <br/>
            <p>{recipe.servings}</p>
            <br/>
            <p>{recipe.tags}</p>
        </div>
    )


}
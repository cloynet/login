'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
    const pathname = usePathname();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (pathname === '/recipes') {
            fetchRecipes();
        }
    }, [pathname]);

    const fetchRecipes = async () => {
        const res = await fetch('https://dummyjson.com/recipes');
        const data = await res.json();
        setRecipes(data.recipes)
        console.log(data);
    };

    return (
        <RecipesContext.Provider value={{ recipes }}>
            {children}
        </RecipesContext.Provider>
    )

}

export const useRecipes = () => useContext(RecipesContext);
'use client';

import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        console.log(data.products);
        setProducts(data.products);
    };

    const getProductById = (id) => {
        return products.find((p) => p.id === Number(id));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, getProductById }}>
            {children}
        </ProductContext.Provider>
        )
    
};

export const useProducts = () => useContext(ProductContext); 

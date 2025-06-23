'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const pathname = usePathname();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        if (pathname === '/products') {
            fetchProducts();
        }
    }, [pathname]);

    const fetchProducts = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        // console.log(data.products);
        setProducts(data.products);
    };

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
        )
    
};

export const useProducts = () => useContext(ProductContext); 

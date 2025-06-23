import { ProductProvider } from '@/context/ProductContext';

export default function ProductsLayout({ children }) {
  return (
  <ProductProvider>
    {children}
    </ProductProvider>
    );
}

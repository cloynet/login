import '@/styles/globals.css'
import { AuthProvider } from '@/context/AuthContext';
import { ProductProvider } from '@/context/ProductContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ProductProvider>
            {children}
          </ProductProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

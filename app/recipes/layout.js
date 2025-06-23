import { RecipesProvider } from '@/context/RecipesContext';

export default function RecipesLayout({ children }) {
  return (
    <RecipesProvider>
    {children}
    </RecipesProvider>
    );
}

import { CocktailProvider } from "./Cocktail/Cocktail";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <CocktailProvider>{children}</CocktailProvider>;
};

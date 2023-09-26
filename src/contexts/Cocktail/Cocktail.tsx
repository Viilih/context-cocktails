import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  SEARCH_DRINK_BY_NAME,
  SEARCH_DRINK_BY_FIRST_LETTER,
} from "../../api/url";
interface IProps {
  children: ReactNode;
}

export type CocktailProps = {
  strDrink: string;
  idDrink: number;
  strDrinkThumb: string;
  strGlass: string;
  strCategory: string;
};

type CocktailContextProps = {
  cocktails: CocktailProps[];
  isLoading: boolean;
  getDrinkByName: (drinkName: string) => Promise<void>;
  initialCocktails: () => Promise<void>;
};

const CocktailContext = createContext<CocktailContextProps>(
  {} as CocktailContextProps
);

const CocktailProvider = ({ children }: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cocktails, setCocktails] = useState<CocktailProps[]>([]);
  const [searchItem, setSearchItem] = useState(null);

  const getDrinkByName = useCallback(async (drinkName: string) => {
    try {
      const response = await fetch(`${SEARCH_DRINK_BY_NAME}${drinkName}`);
      const data = await response.json();
      const { drinks } = data;
      setCocktails(drinks);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const initialCocktails = useCallback(async () => {
    try {
      const response = await fetch(`${SEARCH_DRINK_BY_FIRST_LETTER}a`);
      const data = await response.json();
      const { drinks } = data;
      setCocktails(drinks);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const contextValues = useMemo(
    () => ({
      getDrinkByName,
      initialCocktails,
      cocktails,
      isLoading,
    }),
    [getDrinkByName, initialCocktails, cocktails, isLoading]
  );
  return (
    <CocktailContext.Provider value={contextValues}>
      <>{children}</>
    </CocktailContext.Provider>
  );
};

const useCockTail = () => {
  const context = useContext(CocktailContext);
  if (!CocktailContext) throw new Error("Falha ao utilizar esse contexto");
  return context;
};

export { CocktailContext, CocktailProvider, useCockTail };

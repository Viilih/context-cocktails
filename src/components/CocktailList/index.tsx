import React, { useEffect } from "react";
import { useCockTail } from "../../contexts/Cocktail/Cocktail";
import { CocktailCard } from "../CocktailCard";

export const CocktailList = () => {
  const { fetchDrink, cocktails, initialCocktails } = useCockTail();

  // Chame fetchDrink automaticamente na primeira renderização
  useEffect(() => {
    initialCocktails("a"); // Ou o nome do coquetel que deseja buscar inicialmente
  }, []);

  // console.log(cocktails);
  return (
    <div>
      <button onClick={() => fetchDrink("Negroni")}>
        Buscar outro coquetel
      </button>
      <ul>
        {cocktails?.length > 0 &&
          cocktails.map((item) => (
            <li key={item.idDrink}>
              <CocktailCard
                drinkName={item.strDrink}
                imgUrl={item.strDrinkThumb}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

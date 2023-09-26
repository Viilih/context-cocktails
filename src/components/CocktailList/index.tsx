import React, { useEffect } from "react";
import { useCockTail } from "../../contexts/Cocktail/Cocktail";
import { CocktailCard } from "../CocktailCard";

export const CocktailList = () => {
  const { fetchDrink, cocktails, initialCocktails } = useCockTail();

  // Chame fetchDrink automaticamente na primeira renderização
  useEffect(() => {
    initialCocktails(); // Ou o nome do coquetel que deseja buscar inicialmente
  }, [initialCocktails]);

  // console.log(cocktails);
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <button onClick={() => fetchDrink("Negroni")}>
        Buscar outro coquetel
      </button>
      <ul className="flex gap-7 flex-wrap items-center justify-center">
        {cocktails?.length > 0 &&
          cocktails.map((item) => (
            <li key={item.idDrink}>
              <CocktailCard
                drinkName={item.strDrink}
                imgUrl={item.strDrinkThumb}
                drinkCategory={item.strCategory}
                drinkGlass={item.strGlass}
                id={item.idDrink}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

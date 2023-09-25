import React from "react";
import { Link } from "react-router-dom";
import { SearchForm } from "../../components/Search";
import { CocktailList } from "../../components/CocktailList";

export const HomePage = () => {
  return (
    <div className="w-100 flex items-center justify-center py-3 gap-3 flex-col">
      <SearchForm />
      <CocktailList />
    </div>
  );
};

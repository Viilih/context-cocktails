import { Link } from "react-router-dom";

interface CocktailCardProps {
  drinkName: string;
  imgUrl: string;
  drinkCategory: string;
  drinkGlass: string;
  id: number;
}
export const CocktailCard = ({
  drinkName,
  imgUrl,
  drinkCategory,
  drinkGlass,
  id,
}: CocktailCardProps) => {
  const handleNavigateToSingleCocktail = () => {};

  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg  transform transition duration-500 hover:bg-gray-300">
        <img
          className="w-full h-80"
          src={imgUrl}
          alt="Sunset in the mountains"
        />
        <div className="px-6 ">
          <div className="font-bold text-xl mb-2">{drinkName}</div>
        </div>
        <div className="px-5 pb-2 flex flex-col">
          <div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {drinkCategory}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {drinkGlass}
            </span>
          </div>
          <Link to={`/cocktail/${id}`}>
            <button className="cursor-pointer px-2 py-1 rounded bg-blue-500 text-slate-100">
              Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

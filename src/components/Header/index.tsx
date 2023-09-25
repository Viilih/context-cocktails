import React from "react";
import logo from "../../assets/cocktail.svg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 flex justify-around items-center py-4">
        <div className="w-12">
          <Link to="/" className="flex justify-center items-center">
            <img src={logo} alt="Cocktail logo" className="object-contain" />
            <h3 className="text-slate-300">Cocktails</h3>
          </Link>
        </div>
        <div className="w-96 flex justify-around ">
          <button className="text-slate-300">
            <Link to="/">Home</Link>
          </button>
          <button className="text-slate-300">
            <Link to="/about">About</Link>
          </button>
        </div>
      </nav>
    </>
  );
};

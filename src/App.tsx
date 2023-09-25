import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Header";
import { HomePage } from "./Pages/Home/index";
import { AboutPage } from "./Pages/About/index";
import { SingleProductPage } from "./Pages/Products/index";
import { ErrorPage } from "./Pages/Error";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cocktail/:id" element={<SingleProductPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      {/* <BrowserRouter>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </BrowserRouter> */}
    </>
  );
};
export default App;

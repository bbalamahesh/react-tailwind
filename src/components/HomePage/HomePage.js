import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroHome from "../HeroHome/HeroHome";
import MovieList from "../MovieList/MovieList";
import Header from "./../Header/Header";

function Homepage() {
  return (
    <>
      <Router>
        <Header />
        <HeroHome />
        <MovieList />
        <footer className="text-center text-white bg-gray-800">
          <div className="text-center p-4">
            © 2021 Copyright
          </div>
        </footer>
      </Router>
    </>
  );
}
export default Homepage;

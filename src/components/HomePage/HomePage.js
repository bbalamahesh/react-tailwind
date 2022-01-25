import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      </Router>
    </>
  );
}
export default Homepage;

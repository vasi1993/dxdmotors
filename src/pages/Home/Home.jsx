import React from "react";
import Header from "../../components/Header/Header";
import CategoriiPiese from "../../components/CategoriiPiese/CategoriiPiese";
import Locatie from "../../components/Locatie/Locatie";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <CategoriiPiese />
      <Locatie />
    </div>
  );
};

export default Home;

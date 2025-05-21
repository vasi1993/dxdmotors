import React from "react";
import Header from "../../components/Header/Header";
import CategoriiPiese from "../../components/CategoriiPiese/CategoriiPiese";
import Locatie from "../../components/Locatie/Locatie";
import "./Home.css";
import BadgeOferta from "../../components/BadgeOferta/BadgeOferta";
const Home = () => {
  return (
    <main
      className="home"
      role="main"
      aria-label="Pagina principală DXD Motors"
    >
      <Header />
      <CategoriiPiese />
      <BadgeOferta
        aria-live="polite"
        role="region"
        aria-label="Ofertă specială"
      />
      <Locatie aria-label="Locația magazinului DXD Motors" />
    </main>
  );
};

export default Home;

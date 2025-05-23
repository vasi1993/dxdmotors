import React from "react";
import "./BadgeOferta.css";
import { Link } from "react-router-dom";

const BanerOferta = () => {
  return (
    <div className="banner-oferta" aria-label="Ofertă piese auto">
      <div className="banner-oferta-title">
        <span>Cauți piese auto?</span>
        <span>
          Completează un formular rapid și primești o ofertă personalizată!
        </span>{" "}
        <Link to="/cerere">
          <button className="banner-oferta-btn">Cere Ofertă</button>
        </Link>
      </div>
    </div>
  );
};

export default BanerOferta;

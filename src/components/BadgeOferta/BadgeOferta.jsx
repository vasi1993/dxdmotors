import React from "react";
import "./BadgeOferta.css";
import { Link } from "react-router";

const BanerOferta = () => {
  return (
    <div>
      <div className="banner-oferta">
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
    </div>
  );
};

export default BanerOferta;

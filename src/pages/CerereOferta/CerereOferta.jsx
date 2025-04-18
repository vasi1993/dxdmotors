import React from "react";
import "./CerereOferta.css";
import FormOferta from "../../components/FormOferta/FormOferta";

const CerereOferta = () => {
  return (
    <div className="cerere-oferta">
      <div className="cerere-title">
        <h1>Cerere Ofertă</h1>
      </div>
      <div className="cerere-form">
        <FormOferta />
      </div>
    </div>
  );
};

export default CerereOferta;

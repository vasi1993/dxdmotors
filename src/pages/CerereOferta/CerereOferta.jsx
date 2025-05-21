import React from "react";
import "./CerereOferta.css";
import FormOferta from "../../components/FormOferta/FormOferta";

const CerereOferta = () => {
  return (
    <main
      className="cerere-oferta"
      role="main"
      aria-label="Formular cerere ofertă piese auto"
    >
      <header className="cerere-title">
        <h1>Cerere Ofertă</h1>
      </header>
      <section className="cerere-form">
        <FormOferta />
      </section>
    </main>
  );
};

export default CerereOferta;

import React from "react";
import "./CategoriiPiese.css";
import categoriData from "../../data/categoriData";

import CardPiese from "../CardPiese/CardPiese";

const CategoriiPiese = () => {
  return (
    <section className="categori" aria-labelledby="categori-title">
      <div className="categori-title">
        <span
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-once="true"
          id="categori-title"
        >
          DxD Motors
        </span>
        <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
          Categorii ce le puteți găsi la noi în magazin
        </span>{" "}
      </div>

      <div className="categori-carduri" aria-label="Categorii de piese auto">
        {categoriData && categoriData.length > 0 ? (
          categoriData.map((data) => (
            <CardPiese
              img={data.img}
              title={data.title}
              key={data.id}
              id={data.id}
              aosDelay={data.aosDelay}
              categori={data.categori}
            />
          ))
        ) : (
          <p>Nu sunt categorii disponibile momentan.</p>
        )}
      </div>
    </section>
  );
};

export default CategoriiPiese;

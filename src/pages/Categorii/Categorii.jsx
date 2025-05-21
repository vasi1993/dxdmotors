import React from "react";
import "./Categorii.css";
import categoriData from "../../data/categoriData";
import CardPiese from "../../components/CardPiese/CardPiese";

const Categorii = () => {
  return (
    <main
      className="categorii"
      role="main"
      aria-label="Categorii piese auto DxD Motors"
    >
      <header className="categorii-title">
        <span data-aos="zoom-out" data-aos-duration="500" data-aos-once="true">
          DxD Motors
        </span>
        <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
          Categorii ce le puteți găsi la noi în magazin
        </span>{" "}
      </header>

      <section
        className="categorii-carduri"
        aria-label="Lista categorii piese auto"
      >
        {categoriData.map((data) => {
          return (
            <CardPiese
              img={data.img}
              title={data.title}
              key={data.id}
              id={data.id}
              aosDelay={data.aosDelay}
              categori={data.categori}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Categorii;

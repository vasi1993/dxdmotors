import React from "react";
import { Link } from "react-router-dom";
import "./CardPiese.css";

const CardPiese = ({ id, img, title, aosDelay, categori }) => {
  return (
    <div
      className="categori-card"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={aosDelay}
      key={id}
    >
      <Link to={`/products/${categori}`} className="categori-img">
        <img src={img} alt="imagine-card" />
      </Link>
      <hr />
      <div className="categori-card-title">{title}</div>
    </div>
  );
};

export default CardPiese;

import React from "react";
import { Link } from "react-router-dom";
import "./CardPiese.css";

const CardPiese = ({ id, img, title, aosDelay, categori }) => {
  return (
    <article
      className="categori-card"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={aosDelay}
      key={id}
    >
      <Link
        to={`/products/${categori}`}
        className="categori-img"
        aria-label={`Vezi produse din categoria ${title}`}
      >
        <img src={img} alt={`Imagine pentru categoria ${title}`} />
      </Link>
      <hr />
      <div className="categori-card-title">{title}</div>
    </article>
  );
};

export default CardPiese;

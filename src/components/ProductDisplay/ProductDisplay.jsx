import React from "react";
import "./ProductDisplay.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDisplay = ({ id, img1, img2, img3 }) => {
  return (
    <div
      className="carousel-wrapper"
      role="region"
      aria-label={`Galerie imagini pentru produsul #${id}`}
    >
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        interval={4000}
        transitionTime={600}
        emulateTouch={true} // 👈 permite swipe pe desktop și touch devices
        swipeable={true} // 👈 activează swipe pe mobil
      >
        <div>
          <img src={img1} alt={`Imagine 1 cu produsul #${id}`} loading="lazy" />
        </div>
        <div>
          <img src={img2} alt={`Imagine 2 cu produsul #${id}`} loading="lazy" />
        </div>
        <div>
          <img src={img3} alt={`Imagine 3 cu produsul #${id}`} loading="lazy" />
        </div>
      </Carousel>
      <div id="skip-carousel" tabIndex="-1">
        {" "}
        <a href="#skip-carousel" className="visually-hidden">
          Sari peste galeria produsului
        </a>
      </div>
    </div>
  );
};

export default ProductDisplay;

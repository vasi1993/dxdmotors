import React from "react";
import "./ProductDisplay.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDisplay = ({ id, img1, img2, img3 }) => {
  return (
    <div className="carousel-wrapper">
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
          <img src={img1} alt="1" />
        </div>
        <div>
          <img src={img2} alt="2" />
        </div>
        <div>
          <img src={img3} alt="3" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductDisplay;

import React from "react";
import "./Header.css";
import storeimg from "../../assets/header-store1.jpg";
import climaimg from "../../assets/header-clima.jpg";
import serviceimg from "../../assets/header-service.jpg";
import { MdPhoneForwarded } from "react-icons/md";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: storeimg,
    title: "DxD MOTORS",
    description: "Piese autoturisme, camioane, remorci, motobike",
    button: "Sună acum pentru detalii!",
  },
  {
    id: 2,
    img: climaimg,
    title: "Încărcări clima auto",
    description: "Încărcăm climatizarea, îți răcorim călătoriile!",
    button: "Sună acum pentru detalii!",
  },
  {
    id: 3,
    img: serviceimg,
    title: "Mentenanță auto",
    description: "Reparăm mașina ta, reconstruim încrederea!",
    button: "Sună acum pentru detalii!",
  },
];

const Header = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="header">
      <div className="header-container">
        <section className="header-left-store" aria-labelledby="dxd-title">
          <div className="store">
            <h1
              id="dxd-title"
              className="header-title"
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
            >
              DxD MOTORS
            </h1>
            <p
              className="header-desc"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              Piese autoturisme, camioane, remorci, motobike
            </p>
            <button
              className="header-button"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              {" "}
              <MdPhoneForwarded className="header-button-icon" />
              <a href="tel:(+)40756452917">Sună acum pentru detalii!</a>
            </button>
          </div>
          <div className="store-img" data-aos="zoom-in" data-aos-once="true">
            <img src={storeimg} alt="Imagine magazin piese auto DxD Motors" />
          </div>
        </section>

        <div className="header-right">
          <section
            role="region"
            aria-label="Servicii climatizare auto"
            className="header-right-service header-right-color1"
          >
            <div className="service">
              <h1
                className="service-title"
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
              >
                Încărcări clima <br /> auto
              </h1>
              <button
                className="header-button-service"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                {" "}
                <MdPhoneForwarded className="header-button-icon" />
                <a href="tel:(+)40756452917">Programează</a>
              </button>
            </div>

            <div
              className="service-img"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <img
                src={climaimg}
                alt="Serviciu încărcare climă auto"
                width={300}
              />
            </div>
          </section>

          <section
            role="region"
            aria-label="Servicii mentenanta auto"
            className="header-right-service header-right-color2"
          >
            <div className="service">
              <h1 className="service-title">Mentenanță auto</h1>

              <button
                className="header-button-service"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                {" "}
                <MdPhoneForwarded className="header-button-icon" />
                <a href="tel:(+)40756452917">Programează</a>
              </button>
            </div>

            <div
              className="service-img"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <img
                src={serviceimg}
                alt="Mentenanță și reparații auto în atelier"
                width={300}
              />
            </div>
          </section>
        </div>
      </div>

      <div className="header-mobile">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div className="header-mobile-container" key={data.id}>
              <div className="store-img-mobile">
                <img src={data.img} alt="" />
              </div>{" "}
              <div className="header-mobile-offer">
                <div className="header-mobile-ofer-container">
                  <div
                    className="header-title-mobile"
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    {data.title}
                  </div>
                  <div
                    className="header-desc-mobile"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    {data.description}
                  </div>
                  <button
                    className="header-button"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    {" "}
                    <MdPhoneForwarded className="header-button-icon" />
                    <a href="tel:(+)40756452917">{data.button}</a>
                  </button>{" "}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Header;

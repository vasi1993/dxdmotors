import React from "react";
import "./Locatie.css";

import { ImLocation } from "react-icons/im";

const Locatie = () => {
  return (
    <section className="location" id="location" aria-label="Locația DxD Motors">
      <div
        className="location-title"
        data-aos="zoom-out"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <span>TE AȘTEPTĂM LA DxD MOTORS</span> <span>Unde ne găsești?</span>
      </div>
      <div className="location-street">
        <div
          className="street"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <ImLocation />
          <p>Adresa - Str. Caprioarei, Mihai Viteazu</p>
        </div>
        {/*      <div className="phone">
                <BsFillTelephoneFill/> 
                <a href="tel:(+)40756999791"><p>Telefon - 0364 566 544</p></a>
            </div>

            */}
      </div>
      <div
        className="location-map"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.5595261016456!2d23.7643377!3d46.5366174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474969003c21a099%3A0xbc2d1fd1f7ddf8b5!2sDXD%20Motors!5e0!3m2!1sro!2sro!4v1736416693101!5m2!1sro!2sro"
          width="1200"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hartă Google Maps DxD Motors"
        ></iframe>
      </div>
    </section>
  );
};

export default Locatie;

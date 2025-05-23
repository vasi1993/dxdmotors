import React from "react";
import "./Footer.css";
import facebook_icon from "../../assets/facebook.svg";
import instagram_icon from "../../assets/instagram.svg";
import gmail_icon from "../../assets/gmail.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import anpc_sal_image from "../../assets/anpc-sal.png";
import anpc_sol_image from "../../assets/anpc-sol.png";
import logoImg from "../../assets/logo6.png";

const Footer = () => {
  return (
    <footer
      className="footer-main"
      role="contentinfo"
      aria-label="Informații despre site-ul DxD Motors"
    >
      <div className="footer">
        <div className="footer-logo">
          <div className="footer-logo-img">
            <img src={logoImg} alt="Logo DxD Motors" />
          </div>

          <p className="footer-logo-description">
            Alege DxD Motors pentru piese auto de înaltă calitate, servicii
            rapide și profesionale, prețuri corecte și o echipă dedicată care
            asigură performanța și siguranța mașinii tale!
          </p>
        </div>

        <div className="footer-social">
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61572600716737"
              className="footer-social-icon"
              aria-label="Facebook DxD Motors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook_icon} alt="Pagina noastră de Facebook" />
            </a>
            <a
              href="#"
              className="footer-social-icon"
              aria-label="Instagram DxD Motors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram_icon} alt="Profilul nostru de Instagram" />
            </a>
            <a href="mailto:dxdmotors@gmail.com" className="footer-social-icon">
              <img src={gmail_icon} alt="Trimite-ne un email" />
            </a>
          </div>

          <div className="footer-social-anpc">
            <a
              href="https://anpc.ro/ce-este-sal/"
              className="footer-social-anpc-icon"
            >
              <img
                src={anpc_sal_image}
                alt="Soluționare Alternativă a Litigiilor - ANPC SAL"
              />
            </a>
            <a
              href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
              className="footer-social-anpc-icon"
            >
              <img
                src={anpc_sol_image}
                alt="Soluționare Online a Litigiilor - ANPC SOL"
              />
            </a>
          </div>
        </div>

        <div className="footer-location">
          <div className="footer-location-title">Locație</div>
          <div className="footer-location-street">
            <ImLocation />
            <p>Adresa - Str. Caprioarei, Mihai Viteazu</p>
          </div>
          <div className="footer-location-phone">
            <BsFillTelephoneFill />
            <p>
              <a
                href="tel:(+)40364566544"
                aria-label="Sună DxD Motors la 0756 452 917"
              >
                Telefon - 0756452917
              </a>
            </p>
          </div>
          <div className="footer-location-program">
            <div className="footer-location-orar">
              <div className="footer-location-orar-day">Luni - Joi</div>
              <div className="footer-location-orar-time">09:00 - 17:00</div>
            </div>
            <hr />

            <div className="footer-location-orar">
              <div className="footer-location-orar-day">Vineri</div>
              <div className="footer-location-orar-time">09:00 - 17:00</div>
            </div>
            <hr />

            <div className="footer-location-orar">
              <div className="footer-location-orar-day">Sâmbătă</div>
              <div className="footer-location-orar-time">Închis</div>
            </div>
            <hr />

            <div className="footer-location-orar">
              <div className="footer-location-orar-day">Duminică</div>
              <div className="footer-location-orar-time">Închis</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>
          &copy; {new Date().getFullYear()} vasy. Toate drepturile sunt
          rezervate.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

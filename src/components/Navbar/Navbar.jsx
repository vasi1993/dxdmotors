import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { IoIosSearch } from "react-icons/io";
import Logoimg from "../../assets/logo5.png";
import whatsupicon from "../../assets/whatsapp.svg";
import { MdEmail, MdPhoneForwarded } from "react-icons/md";
import {
  FaCar,
  FaTruckMoving,
  FaMotorcycle,
  FaPhoneAlt,
  FaOilCan,
} from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { TbBatteryAutomotiveFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 2000) {
      return { left: !menuOpen && "-1000%" };
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <nav ref={navRef} className="navbar" aria-label="Navigație principală">
      {/* first menu */}
      <div className="first-nav">
        <div className="first-nav-left">
          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Deschide/Închide meniu"
          >
            {menuOpen ? (
              <AiOutlineMenuFold size={25} className="nav-mobil-icon" />
            ) : (
              <AiOutlineMenuUnfold size={25} className="nav-mobil-icon" />
            )}
          </div>
          <div className="nav-logo">
            <Link to="/">
              <img
                src={Logoimg}
                alt="Sigla DxD Motors"
                onClick={() => setMenuOpen(false)}
              />
            </Link>
          </div>
        </div>
        <div className="nav-search" role="search" aria-label="Căutare piese">
          <input type="text" placeholder="Căutare" aria-label="Căutare" />
          <IoIosSearch className="search-icon" aria-label="Buton căutare" />
        </div>
        <div className="nav-contact">
          <div className="nav-phone">
            <img src={whatsupicon} alt="Icon WhatsApp" />
            <a href="tel:(+)40756452917">0756452917</a>
          </div>
          <div className="nav-email">
            <MdEmail className="email-icon" />
            <a href="mailto:dxdmotors@gmail.com">Contact</a>
          </div>
        </div>
      </div>

      {/* second menu */}
      <div className="nav-second">
        <div className="nav-items item1">
          <FaCar className="nav-items-icon" />
          <Link to="/categoriipiese">Piese auto</Link>
        </div>

        <div className="nav-items item2">
          <FaTruckMoving className="nav-items-icon" />
          <Link to="/categoriipiese">Piese camioane</Link>
        </div>

        <div className="nav-items item3">
          <FaMotorcycle className="nav-items-icon" />
          <Link to="/categoriipiese">Piese moto</Link>
        </div>

        <div className="nav-items item4">
          <GiAutoRepair className="nav-items-icon" />
          <Link to="/categoriipiese">Tuning</Link>
        </div>

        <div className="nav-items item5">
          <FaOilCan className="nav-items-icon" />
          <Link to="/categoriipiese">Uleiuri și lichide</Link>
        </div>

        <div className="nav-items item6">
          <TbBatteryAutomotiveFilled className="nav-items-icon" />
          <Link to="/categoriipiese">Autoaccesorii</Link>
        </div>

        <div className="nav-items item7">
          <MdEmail className="nav-items-icon" />
          <a href="tel:(+)40756452917">Contact</a>
        </div>

        <div className="nav-items item8">
          <GoQuestion className="nav-items-icon" />
          <Link to="/cerere"> Întrebări</Link>
        </div>
      </div>

      {/* mobile navbar */}
      <div
        className="nav-mobile"
        style={getMenuStyles(menuOpen)}
        aria-label="Meniu mobil"
      >
        <div className="nav-mobile-link">
          <MdPhoneForwarded className="mobile-icon" />
          <a href="tel:(+)40756452917">Informații telefonic</a>
        </div>
        <div className="nav-mobile-link">
          <MdEmail className="mobile-icon" />
          <a href="mailto:dxdmotors@gmail.com">Contact</a>
        </div>
        <div
          className="nav-mobile-link"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {" "}
          <GoQuestion className="mobile-icon" />
          <Link to="/cerere"> Întrebari</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

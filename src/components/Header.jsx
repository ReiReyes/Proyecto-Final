import "../assets/styles/header.css";
import logoMolokai from "../assets/imgs/imgHeader/Logo Molokai.png";
import logoUnimet from "../assets/imgs/imgHeader/LogoUnimet.png";
// import { useState } from "react";
import Usuario from "../assets/imgs/imgHeader/Usuario.png";
import Barra from "../assets/imgs/imgHeader/Barra.png";

import { LuShoppingBasket } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Header = () => {
  // const [isLogged, setIsLogged] = useState(false);

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="body-header">
      <div className="header">
        <div className="top-bar">
          <div className="uni-logo">
            <img src={logoUnimet} alt="Universidad Metropolitana" />
          </div>
          <div className="perfil">
            <a className="registerh" href="/register">
              Registrarse
            </a>
            <img src={Barra} alt="Separador" className="separator" />
            <img src={Usuario} alt="Usuario" className="user-icon" />
            <a className="loginh" href="/login">
              Iniciar Sesión
            </a>
          </div>
        </div>

        <div className="main-header">
          <div className="brand">
            <h1>MOLOKA'I</h1>
          </div>
          <div className="logoMolokai">
            <img src={logoMolokai} alt="Logotipo de MOLOKA'I" />
          </div>
          <nav ref={navRef} className="menu">
            <a href="/home">INICIO</a>
            <a href="/about">NOSOTROS</a>
            <a className="pedidos" href="/menu">
              MENÚ
            </a>
            <a href="/cart">
              {" "}
              <LuShoppingBasket className="shopcart" />
            </a>
            <button className="btn close-button" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

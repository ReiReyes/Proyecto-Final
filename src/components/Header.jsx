import "../assets/styles/header.css";
import logoMolokai from "../assets/imgs/imgHeader/Logo Molokai.png";
import logoUnimet from "../assets/imgs/imgHeader/LogoUnimet.png";
import cartlogo from "../assets/imgs/imgHeader/LogoCarrito.png";
import { useState } from "react";
import { LuShoppingBasket } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";


const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div className="body-header">

      <div className="header">
        <div className="top-bar">
          <div className="uni-logo">
            <img src={logoUnimet} alt="Universidad Metropolitana" />
          </div>
          <div className="perfil">
            <a className="registerh" href="/register">Registrarse</a>
            <h5>|</h5>
            <a className="loginh" href="/login">Iniciar Sesión</a>

          </div>
        </div>
        
        <div className="main-header">
          <div className="brand">
            <h1>MOLOKA'I</h1>
          </div>
          <div className="logoMolokai">
            <img src={logoMolokai} alt="Logotipo de MOLOKA'I" />
          </div>
          <nav ref= {navRef} className="menu">

            <a href="/home">INICIO</a>
            <a href="/about">NOSOTROS</a>
            <a className ="pedidos"href="/menu">MENU</a>
            <a href="/cart"> <LuShoppingBasket className= "shopcart" /></a>
            <button className="close-icon" onClick={showNavbar}><FaTimes/></button>
          </nav>
            <button className="menu-icon" onClick={showNavbar}><FaBars/></button>


        </div>
      </div>
    </div>
  );
};

export default Header;

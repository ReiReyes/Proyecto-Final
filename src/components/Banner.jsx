import "../assets/styles/Banner.css";
import imgPrincipal from "../assets/imgs/imgBanner/Banner-Poke.jpg";
// import Buscador from "../assets/imgs/imgBanner/Buscador.png";
import FlechaDerecha from "../assets/imgs/imgBanner/FlechaDerecha.png";
import FlechaIzquierda from "../assets/imgs/imgBanner/FlechaIzquierda.png";
import FlechaAbajo from "../assets/imgs/imgBanner/FlechaAbajo.png";

const Banner = () => {
  return (
    <header className="banner">
      <div className="imgPoke">
        <img src={imgPrincipal} alt="Banner Principal" />
      </div>
      <div className="overlay">
        <h1 className="title">THIS IS HOW WE POKÉ</h1>
        <h2 className="text1">¡Haz clic ahora y déjate sorprender!</h2>
        <div className="order-button-container">
          <button className="order-button">ORDENA YA</button>
        </div>
        <h3 className="text2">¡No te arrepentirás!</h3>
        <div className="arrow-down">
          <img src={FlechaAbajo} alt="Flecha Abajo" />
        </div>
      </div>
      <div className="arrows">
        <div className="arrow-left">
          <img src={FlechaIzquierda} alt="Flecha Izquierda" />
        </div>
        <div className="arrow-right">
          <img src={FlechaDerecha} alt="Flecha Derecha" />
        </div>
      </div>
    </header>
  );
};

export default Banner;

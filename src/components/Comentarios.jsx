import "../assets/styles/Comentarios.css"; 
import exit from "../assets/imgs/imgDetalles/Exit.png";
import molo from "../assets/imgs/imgComentarios/comentariosMolokai.png";


const Checkout = () => {


  return (
    <comentarios>
      {/* Barra */}
      <div className="top-bar">
        <div className="blueBar">
          <img src={exit} className="exit" alt="Exit"></img>
        </div>
      </div>
      <div className="container">
      <img src={molo} className="molo" alt="Logo Molokai"></img>
      </div>
      <div className="container">
        <div className="cuadrado">
          <p className="exp">¿Cómo fue su experiencia?</p>
          <br/>
          <input className="input" placeholder="Añade un comentario"></input>
          <button className="botonComentar">
            <p className="enviarComentario">Enviar comentario</p>
          </button>
        </div>
      </div>
      <button className="menu-boton" onClick={() => redirectToMetodoPago()}>
        <p className="menu">Menú principal</p>
      </button>
    </comentarios>
  );
};

export default Checkout;
import "../assets/styles/Detalles.css";
import exit from "../assets/imgs/imgDetalles/Exit.png";
import delivery from "../assets/imgs/imgDetalles/imagenDelivery.png";
import PropTypes from 'prop-types';


const Detalles = ({ onNext }) => {
  return (
    <div className="detalles">
      {/* Barra */}
      <div className="top-bar">
        <div className="blueBar">
          <img src={exit} className="exit" alt="Exit" />
        </div>
      </div>

      {/* Estado de transacción */}
      <div className="linea"></div>
      <div className="circulos">
        <div className="circuloRelleno" />
        <div className="circulo" />
        <div className="circulo" />
      </div>

      <div className="nombreEstados">
        <p>Detalles</p>
        <p>Método de pago</p>
        <p>Confirmación</p>
      </div>
      <p className="estadoActual">Detalles</p>

      {/* Delivery */}
      <div className="delivery">
        <img src={delivery} className="imgDelivery" alt="Delivery" />
        <p className="horaEntrega">Hora de entrega</p>
        <div className="hora">
          <p className="set-hora">2pm</p>
        </div>
      </div>
      <button className="confirmar-boton" onClick={onNext}>
        <p className="confirmar">Confirmar</p>
      </button>
    </div>
  );
};

Detalles.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Detalles;
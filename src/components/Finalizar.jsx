import { useState, useEffect } from 'react';
import moment from 'moment-timezone'; // npm install moment-timezone
import "../assets/styles/Finalizar.css";
import exit from "../assets/imgs/imgDetalles/Exit.png";
import PropTypes from 'prop-types';

const Finalizar = ({ onNext }) => {

  const [horaVenezuela, setHoraVenezuela] = useState('');

  useEffect(() => {
    const getHoraVenezuela = () => {
      const horaActual = moment().tz('America/Caracas').format('HH:mm:ss');
      setHoraVenezuela(horaActual);
    };

    getHoraVenezuela();
  }, []);

  // const redirectToMetodoPago = () => {

  //   console.log('Redirigiendo al método de pago');
  // };

  return (
    <detalles>
      <div className="top-bar">
        <div className="blueBar">
          <img src={exit} className="exit" alt="Exit"></img>
        </div>
      </div>
      <div className="linea"></div>  
      <div className="circulos">       
        <div className="circulo" />
        <div className="circulo" />
        <div className="circuloRelleno" />
      </div>
      
      <div className="nombreEstados">
        <p>Detalles</p>
        <p>Método de pago</p>
        <p>Confirmación</p>
      </div>
      <p className="estadoActual">Confirmar</p>

      <div className="confirmarCuadro1">
        <p className="informacion">Método de pago: </p>
        <br />
        <p className="informacion">Fecha de pedido: {moment().format('DD/MM/YYYY')}</p>
        <br />
        <p className="informacion">Hora de pedido: {horaVenezuela}</p>
        <br />
      </div>

      <div className="confirmarCuadro2">
        <p className="informacion">Total a pagar: </p>
      </div>

      <button className="confirmar-boton" onClick={onNext}>
        <p className="confirmar">Finalizar</p>
      </button>
    </detalles>
  );
};

Finalizar.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Finalizar;

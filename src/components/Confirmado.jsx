import { useState, useEffect } from 'react';
import moment from 'moment-timezone'; // npm install moment-timezone
import "../assets/styles/Confirmado.css";
import exit from "../assets/images/imgDetalles/Exit.png";

const Checkout = () => {
  const [horaVenezuela, setHoraVenezuela] = useState('');

  useEffect(() => {
    const getHoraVenezuela = () => {
      const horaActual = moment().tz('America/Caracas').format('HH:mm:ss');
      setHoraVenezuela(horaActual);
    };

    getHoraVenezuela();
  }, []);

  const redirectToMetodoPago = () => {

    console.log('Redirigiendo al método de pago');
  };

  return (
    <confirmado>
      <div className="top-bar">
        <div className="blueBar">

          {/* flecha para salir */}
          <img src={exit} className="exit" alt="Exit"></img>
        </div>
      </div>
      <br/>
      <p className="pagoExitoso">¡Pago exitoso!</p>
      
      <div className="finalizadoCuadro">
        <p className="informacion">Número de Orden: </p>
        <br />
        <p className="informacion">Método de pago: </p>
        <br />
        <p className="informacion">Fecha de pedido: {moment().format('DD/MM/YYYY')}</p>
        <br />
        <p className="informacion">Hora de pedido: {horaVenezuela}</p>
        <br />
      </div>

      {/* Boton para ir a comentar */}
      <button className="comentar-boton" onClick={redirectToMetodoPago}>
        <p className="comentar">Comentar</p>
      </button>
      <br />

      {/* Boton para ir al menu (LandingPage) */}
      <button className="confirmar-boton" onClick={redirectToMetodoPago}>
        <p className="confirmar">Menú</p>
      </button>
    </confirmado>
  );
};

export default Checkout;
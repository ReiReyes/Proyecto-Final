import React, { useState } from 'react';
import "../assets/styles/MetodoPago.css"; 
import exit from "../assets/imgs/imgDetalles/Exit.png";
import paypal from "../assets/imgs/imgMetodoPago/PayPal.png";
import debito from "../assets/imgs/imgMetodoPago/Debito.png";

const Checkout = () => {

  // Scripts para los botones de debito y paypal
  const [isSeleccionPago2Clicked, setSeleccionPago2Clicked] = useState(false);
  const [isSeleccionPago1Clicked, setSeleccionPago1Clicked] = useState(false);

  const handleClickSeleccionPago2 = () => {
    setSeleccionPago2Clicked(true);
    setSeleccionPago1Clicked(false);
  };

  const handleClickSeleccionPago1 = () => {
    setSeleccionPago1Clicked(true);
    setSeleccionPago2Clicked(false);
  };

  const redirectToMetodoPago = () => {

  };

  return (
    <metodo>
      {/* Barra */}
      <div className="top-bar">
        <div className="blueBar">

          {/* flecha para salir */}
          <img src={exit} className="exit" alt="Exit"></img>
        </div>
      </div>

      {/* Estado de transacción */}
      <div className="linea"></div>
      <div className="circulos">       
        <div className="circulo" />
        <div className="circuloRelleno" />
        <div className="circulo" />
      </div>
      
      <div className="nombreEstados">
        <p>Detalles</p>
        <p>Método de pago</p>
        <p>Confirmación</p>
      </div>
      <p className="estadoActual">Método de pago</p>

      {/* Método de pago */}
      <div className="metodoPago">
        <p className="pagar">¿Cómo desea pagar?</p>
        <div className="metodos">

          {/* Botones del selector de pago */}
          <button className={isSeleccionPago2Clicked ? 'seleccionPago2 clicked' : 'seleccionPago2'} onClick={handleClickSeleccionPago2}></button>
          <img src={debito} className="debito" alt="Debito"></img>
          <button className={isSeleccionPago1Clicked ? 'seleccionPago1 clicked' : 'seleccionPago1'} onClick={handleClickSeleccionPago1}></button>
          <img src={paypal} className="paypal" alt="Paypal"></img>

        </div>
        <p className="pagar">Detalles del pago</p>
        <input className='nombreTarjeta' placeholder='Nombre en tarjeta' />
        <input className='nroTarjeta' placeholder='Número de tarjeta' />
        {/* Puse un br para que no se solapen */}
        <br></br>
        <input className='fechaTarjeta' placeholder='Fecha de expiración' />
        <input className='ccvTarjeta' placeholder='CCV' />

      </div>


      {/* Boton para ir a finalizar */}
      <button className="confirmar-boton" onClick={redirectToMetodoPago}>
        <p className="confirmar">Confirmar</p>
      </button>
    </metodo>
  );
};

export default Checkout;
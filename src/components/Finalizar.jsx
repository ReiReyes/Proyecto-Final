import { useState, useEffect } from 'react';
import moment from 'moment-timezone'; // npm install moment-timezone
import "../assets/styles/Finalizar.css";
import exit from "../assets/imgs/imgDetalles/Exit.png";
import PropTypes from 'prop-types';

const Finalizar = ({ onNext, onBack }) => {
  const [horaVenezuela, setHoraVenezuela] = useState('');
  const [totalPagar, setTotalPagar] = useState(25); // Total inicial del carrito
  const [codigoPromo, setCodigoPromo] = useState(''); // Estado para almacenar el código promocional ingresado
  const [PromosList, setPromosList] = useState([]); // Estado para almacenar las promociones disponibles
  const [promoAplicada, setPromoAplicada] = useState(false); // Estado para controlar si ya se aplicó una promoción

  useEffect(() => {
    const getHoraVenezuela = () => {
      const horaActual = moment().tz('America/Caracas').format('HH:mm:ss');
      setHoraVenezuela(horaActual);
    };

    getHoraVenezuela();
  }, []);

  useEffect(() => {
    const storedPromos = JSON.parse(localStorage.getItem('PROMOS')) || [];
    setPromosList(storedPromos);
  }, []);

  const metodo = 'Paypal';

  const handleFinalizar = () => {
    const pedido = {
      id: Date.now(),
      metodoPago: metodo,
      fechaPedido: moment().format('DD/MM/YYYY'),
      horaPedido: horaVenezuela,
      totalPagar: totalPagar,
      estado: 'Finalizado',
      productosPedido: [
        { nombre: "Hamburguesa", cantidad: 2, precio: 20, img: "", ingredientes: "Cosas, cosas" },
        { nombre: "Papas", cantidad: 1, precio: 10, img: "", ingredientes: "Cosas, cosas" },
        { nombre: "Refresco", cantidad: 1, precio: 5, img: "", ingredientes: "BASE, ATÚN, SALMÓN,CAMARÓN, EDAMAME,ZANAHORIA, KANI, AGUACATE." }
      ],
      correo: "", // Aquí deberías incluir el correo del usuario cuando lo tengas disponible
    };

    let storedPedidos = JSON.parse(localStorage.getItem('PEDIDOS')) || [];
    storedPedidos.push(pedido);
    localStorage.setItem('PEDIDOS', JSON.stringify(storedPedidos));

    console.log('Pedido guardado:', pedido);

    onNext();
  };

  const aplicarPromo = () => {
    if (promoAplicada) {
      alert('Ya has aplicado un código promocional.');
      return;
    }

    const promoEncontrada = PromosList.find(promo => promo.nombreCod === codigoPromo);
    if (promoEncontrada.estado) {
      const descuento = totalPagar * promoEncontrada.descuento;
      const nuevoTotal = totalPagar - descuento;

      if (nuevoTotal < 0) {
        setTotalPagar(0); // No permitir un total negativo
      } else {
        setTotalPagar(nuevoTotal);
        setPromoAplicada(true); // Marcar que se ha aplicado un código promocional

      }
    }
  };

  return (
    <detalles>
      <div className="top-bar-c">
        <button onClick={onBack} className="blueBar">
          <img src={exit} className="exit" alt="Exit" />
        </button>
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
        <p className="informacion">Método de pago: {metodo} </p>
        <br />
        <p className="informacion">Fecha de pedido: {moment().format('DD/MM/YYYY')}</p>
        <br />
        <p className="informacion">Hora de pedido: {horaVenezuela}</p>
        <br />
      </div>

      <div className="confirmarCuadro2">
        <p className="informacion">Total a pagar: {totalPagar}</p>
        <div className='input-wrapper-c'>
          <input
            type="text"
            className='input-Cod-c'
            placeholder='Codigo promocional (opcional)'
            maxLength={6}
            value={codigoPromo}
            onChange={(e) => setCodigoPromo(e.target.value)}
            disabled={promoAplicada} // Deshabilitar el input si ya se aplicó un código
          />
          <button className="boton-Cod-c" onClick={aplicarPromo} disabled={promoAplicada}>Aplicar</button>
        </div>
      </div>

      <button className="confirmar-boton" onClick={handleFinalizar}>
        <p className="confirmar">Finalizar</p>
      </button>
    </detalles>
  );
};

Finalizar.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Finalizar;


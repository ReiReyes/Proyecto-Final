import "../assets/styles/Detalles.css";
import exit from "../assets/images/imgDetalles/Exit.png";
import delivery from "../assets/images/imgDetalles/imagenDelivery.png";

const Checkout = () => {
  return (
    <detalles>
      {/* Barra */}
      <div className="top-bar">
        <div className="blueBar">
          <img src={exit} className="exit"></img>
        </div>
      </div>

      {/* Estado de transacción */}


      <div className="circulos">       
        <div className="circulo" />
        <div className="circulo" />
        <div className="circulo" />
        <div className="linea-gris"></div>
      </div>
      
      <div className="nombreEstados">
        <p>Detalles</p>
        <p>Método de pago</p>
        <p>Confirmación</p>
      </div>
      <p className="estadoActual">Detalles</p>

      {/* Delivery */}
      <div className="delivery">
      <img src={delivery} className="imgDelivery"></img>
      <p className="horaEntrega">Hora de entrega</p>
          <div className="hora">
            <p className="set-hora">2pm</p>
          </div>
      </div>
      <div className="confirmar-boton">
        <p className="confirmar">Confirmar</p>
      </div>
    </detalles>
  );
};

export default Checkout;


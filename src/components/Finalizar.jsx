import { useState, useEffect } from 'react';
import moment from 'moment-timezone'; // npm install moment-timezone
import "../assets/styles/Finalizar.css";
import exit from "../assets/imgs/imgDetalles/Exit.png";
import PropTypes from 'prop-types';
import {doc, getDoc} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from "../pages/firebase";

const Finalizar = ({ onNext, onBack }) => {
const [email, setEmail] = useState("");

// buscar correo
  const fetchUserData = async (user) => {
    try {
      console.log("Fetching user data for user:", user.uid);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setEmail(data.email || "Email not available");
      } else {
        setEmail("Email not available");
      }
    } catch (error) {
      setEmail("Error fetching email");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user);
        fetchUserData(user);
      } else {
        console.log("No user logged in");
        setEmail("No user logged in");
      }
    });

    return () => unsubscribe();
  }, []);

// buscar correo

  const [horaVenezuela, setHoraVenezuela] = useState('');
  const [totalPagar, setTotalPagar] = useState(25); // Aqui coloca el total de carrito
  useEffect(() => {
    const getHoraVenezuela = () => {
      const horaActual = moment().tz('America/Caracas').format('HH:mm:ss');
      setHoraVenezuela(horaActual);
    };

    getHoraVenezuela();
  }, []);

  const metodo = 'Paypal';
  const handleFinalizar = () => {
    const pedido = {
      id: Date.now(),
      metodoPago: metodo,   //el metodo de pago cuando lo logres pasar cambialo aqui
      fechaPedido: moment().format('DD/MM/YYYY'),
      horaPedido: horaVenezuela,
      totalPagar: totalPagar,
      estado: 'Finalizado',
      productosPedido: [
        { nombre: "Hamburguesa", cantidad: 2, precio: 20, img: "", ingredientes: "Cosas, cosas"},
        { nombre: "Papas", cantidad: 1, precio: 10, img: "", ingredientes: "Cosas, cosas" },
        { nombre: "Refresco", cantidad: 1, precio: 5, img: "", ingredientes: "BASE, ATÚN, SALMÓN,CAMARÓN, EDAMAME,ZANAHORIA, KANI, AGUACATE." }
        // esto es solo una muestra cambia aqui por los productos que tengas en el carrito y que se vean con esa estructura
    ],
    correo: email, // esto es solo un ejemplo, cuando tengas el correo del usuario cambialo aqui
      
    };

    let storedPedidos = JSON.parse(localStorage.getItem('PEDIDOS')) || [];
    storedPedidos.push(pedido);
    localStorage.setItem('PEDIDOS', JSON.stringify(storedPedidos));

    console.log('Pedido guardado:', pedido);

    onNext();
  };

  return (
    <detalles>
      <div className="top-bar-c">
      <button onClick={onBack} className="blueBar">
          <img src={exit} className="exit"  alt="Exit"></img>
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
        <p className="informacion">Total a pagar: {25}</p>
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
import "../assets/styles/ProfileHist.css";
import Header from "../components/Header-p.jsx";
import Order from "../components/Order.jsx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
import Plato from "../components/Plato.jsx";

function ProfileHist() {
    const navRefA = useRef(null);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const showBusq = () => {
        if (navRefA.current) {
            navRefA.current.classList.toggle("responsive_bus");
        } else {
            console.error("navRefA.current is undefined");
        }
    };

    const orderList = [
        {
            id: 1,
            codigo: "HO1820234",
            hora: "12:01",
            fecha: "15/5/2024",
            metodoPago: "Paypal",
            estado: "Finalizado",
            total: 35,
            detalles: [
                { nombre: "Hamburguesa", cantidad: 2, precio: 20, img: "", ingredientes: "Cosas, cosas"},
                { nombre: "Papas", cantidad: 1, precio: 10, img: "", ingredientes: "Cosas, cosas" },
                { nombre: "Refresco", cantidad: 1, precio: 5, img: "", ingredientes: "Cosas, cosas" }
            ]
        },
        {
            id: 2,
            codigo: "HO1820235",
            hora: "13:01",
            fecha: "15/5/2024",
            metodoPago: "Tarjeta de Crédito",
            estado: "En Proceso",
            total: 80,
            detalles: [
                { nombre: "Pasta", cantidad: 2, precio: 20, img: "", ingredientes: "Cosas, cosas" },
                { nombre: "Papas", cantidad: 1, precio: 10, img: "", ingredientes: "Cosas, cosas" },
                { nombre: "Refresco", cantidad: 1, precio: 50, img: "", ingredientes: "Cosas, cosas" }
            ]
        }
    ];

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredOrders = orderList.filter(order =>
        order.codigo.includes(searchTerm.toUpperCase()) ||
        order.hora.includes(searchTerm.replace(" ", '')) ||
        order.fecha.includes(searchTerm)
    );

    return (
        <div className="body_ProfileHist">
            <Header enlacep="/Profile" primero="Perfil" enlaces="Profile_security" segundo="Metodos y Seguridad" enlacet="/Profile_history" tercero="Historial"  cuarto="Log Out" />
            <div className="profileHist_container">
                <div className="lista_pedidos_profileHist">
                    <h1 className="titulo_pedido_profileHist">
                        <div className="titulo_profileHist">PEDIDO'S</div>
                        <button className="lupa_icon_profileHist" onClick={showBusq}><FaMagnifyingGlass /></button>
                    </h1>
                    <div className="pedidos_historial_profileHist" ref={navRefA}>
                        <button className="close_icon_profileHist" onClick={showBusq}><FaTimes /></button>
                        <input
                            className="search_profileHist"
                            type="text"
                            placeholder="Buscar"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <div className="ordenes_profileHist">
                            {filteredOrders.map((order) => (
                                <Order
                                    key={order.codigo}
                                    hora={order.hora}
                                    fecha={order.fecha}
                                    onClickOrder={() => handleOrderClick(order)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="detalles_pedido_profileHist">
                    <h1 className="detalle_titulo_profileHist">DETALLES DEL PEDIDO</h1>
                    <div className="separador_profileHist"></div>
                    {selectedOrder ? (
                        <div className="detalles_profileHist">
                            <div className="datospedido_profileHist">
                                <div className="dato_profileHist">
                                    <p className="titulo_dato_profileHist">Metodo Pago</p>
                                    <p className="info_dato_profileHist">{selectedOrder.metodoPago}</p>
                                </div>
                                <div className="dato_profileHist">
                                    <p className="titulo_dato_profileHist">Estado Actual</p>
                                    <p className="info_dato_profileHist">{selectedOrder.estado}</p>
                                </div>
                                <div className="dato_profileHist">
                                    <p className="titulo_dato_profileHist">Total Pagado</p>
                                    <p className="info_dato_profileHist">{selectedOrder.total}$</p>
                                </div>
                            </div>
                            <div className="Orden_usuario">
                                <div className="orden_user">
                                    {selectedOrder.detalles.map((detalle, index) => (
                                        <Plato
                                            key={index}
                                            nombre={detalle.nombre}
                                            ingredientes={detalle.ingredientes}
                                            precio={detalle.precio + "$"}
                                            cant={detalle.cantidad}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="detalle_titulo_profileHist">Selecciona un pedido para ver los detalles</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfileHist;

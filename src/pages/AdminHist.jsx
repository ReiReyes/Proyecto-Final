import "../assets/styles/Admin.css";
import "../assets/styles/AdminHist.css";
import Headerp from "../components/Header-p.jsx";
import Order from "../components/Order.jsx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
import Plato from "../components/Plato.jsx";

function AdminHist() {
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
        <div className="bodyA">
            <Headerp
                primero="Inicio" enlacep="LandingPage"
                segundo="Gestionar Menú" enlaces="Manage-menu"
                tercero="Gestionar Historial" enlacet="Manage-shop-record"
                cuarto="Gestionar Promociones" enlacec="Manage-coupons"
            />
            <div className="adminh-wrap">
                <div className="listapedidos">
                    <h1 className="pedidotitulo">
                        <div className="textotitulo">PEDIDO'S</div>
                        <button className="lupa-icon-admin" onClick={showBusq}><FaMagnifyingGlass /></button>
                    </h1>
                    <div className="pedidoshistorial" ref={navRefA}>
                        <button className="close-icon-admin" onClick={showBusq}><FaTimes /></button>
                        <input
                            className="busqueda"
                            type="text"
                            placeholder="Buscar"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <div className="ordenes">
                            {filteredOrders.map((order) => (
                                <Order
                                    key={order.codigo}
                                    codigo={order.codigo}
                                    hora={order.hora}
                                    fecha={order.fecha}
                                    onClickOrder={() => handleOrderClick(order)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="detallepedido">
                    <h1 className="detalletitulo">DETALLES DEL PEDIDO</h1>
                    <div className="separador"></div>
                    {selectedOrder ? (
                        <div className="detalles">
                            <div className="datospedido">
                                <div className="dato">
                                    <p className="titulodato">Metodo Pago</p>
                                    <p className="infodato">{selectedOrder.metodoPago}</p>
                                </div>
                                <div className="dato">
                                    <p className="titulodato">Estado Actual</p>
                                    <p className="infodato">{selectedOrder.estado}</p>
                                </div>
                                <div className="dato">
                                    <p className="titulodato">Total Pagado</p>
                                    <p className="infodato">{selectedOrder.total}$</p>
                                </div>
                            </div>
                            <div className="tuOrden">
                                <div className="orden">
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
                        <p className="detalletitulo">Selecciona un pedido para ver los detalles</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminHist;

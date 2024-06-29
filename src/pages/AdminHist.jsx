
import "../assets/styles/Admin.css";
import "../assets/styles/AdminHist.css";
import Headerp from "../components/Header-p.jsx";
import Order from "../components/Order.jsx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useRef } from "react";
import Plato from "../components/Plato.jsx";

function AdminHist() {
    const navRefA = useRef(null);

    const showBusq = () => {
        if (navRefA.current) {
            navRefA.current.classList.toggle("responsive_bus");
        } else {
            console.error("navRefA.current is undefined");
        }
    };
    const orderList = [{
        id: 1,
        codigo: "HO1820234",
        hora: "13:01",
        fecha: "15/5/2024",
        detalles: [
            {
                nombre: "Hamburguesa",
                cantidad: 2,
                precio: 2000
            },
            {
                nombre: "Papas",
                cantidad: 1,
                precio: 1000
            },
            {
                nombre: "Refresco",
                cantidad: 1,
                precio: 500
            }
        ]
    }, {
        id: 2,
        codigo: "HO1820234",
        hora: "13:01",
        fecha: "15/5/2024",
        detalles: [
            {
                nombre: "Hamburguesa",
                cantidad: 2,
                precio: 2000
            },
            {
                nombre: "Papas",
                cantidad: 1,
                precio: 1000
            },
            {
                nombre: "Refresco",
                cantidad: 1,
                precio: 500
            }
        ]
    }, {
        id: 3,
        codigo: "HO1820234",
        hora: "13:01",
        fecha: "15/5/2024",
        detalles: [
            {
                nombre: "Hamburguesa",
                cantidad: 2,
                precio: 2000
            },
            {
                nombre: "Papas",
                cantidad: 1,
                precio: 1000
            },
            {
                nombre: "Refresco",
                cantidad: 1,
                precio: 500
            }
        ]
    }, {
        id: 4,
        codigo: "HO1820234",
        hora: "13:01",
        fecha: "15/5/2024",
        detalles: [
            {
                nombre: "Hamburguesa",
                cantidad: 2,
                precio: 2000
            },
            {
                nombre: "Papas",
                cantidad: 1,
                precio: 1000
            },
            {
                nombre: "Refresco",
                cantidad: 1,
                precio: 500
            }
        ]
    },

    ]


    return (
        <div className="bodyA">

            <Headerp
                primero="Inicio" enlacep="home"
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
                        <input className="busqueda" type="text" placeholder="Buscar" />
                        <div className="ordenes">

                            {orderList.map((order, index) => ( // Mapea la lista de datos a componentes Order
                                <Order key={order.id} codigo={order.codigo} hora={order.hora} fecha={order.fecha} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="detallepedido">
                    <h1 className="detalletitulo">DETALLES DEL PEDIDO</h1>
                    <div className= "separador"></div>
                    <div className="detalles">
                        <div className="datospedido">
                            <div className="datos">
                            <div className="dato">
                                <p className="titulodato">Metodo Pago</p>
                                <p className="infodato">Paypal</p>
                            </div>
                            <div className="dato">
                                <p className="titulodato">Estado Actual</p>
                                <p className="infodato">Finalizado</p>
                            </div>
                            <div className="dato">
                                <p className="titulodato">Total Pagado</p>
                                <p className="infodato">32$</p>
                            </div>
                            </div>
                        </div>
                        <div className="tuOrden">
                            <div className="orden">
                                <Plato nombre="Mololove" ingredientes="BASE, ATÚN, SALMÓN, CAMARÓN, EDAMAME, ZANAHORIA, KANI, AGUACATE, SALSAS."
                                    precio="32$" cant="2" />
                                <Plato nombre="Mololove" ingredientes="BASE, ATÚN, SALMÓN, CAMARÓN, EDAMAME, ZANAHORIA, KANI, AGUACATE, SALSAS."
                                    precio="32$" cant="2" />
                                <Plato nombre="Mololove" ingredientes="BASE, ATÚN, SALMÓN, CAMARÓN, EDAMAME, ZANAHORIA, KANI, AGUACATE, SALSAS."
                                    precio="32$" cant="2" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHist;

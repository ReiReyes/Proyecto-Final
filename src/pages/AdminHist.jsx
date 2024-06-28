
import "../assets/styles/Admin.css";
import "../assets/styles/AdminHist.css";
import Headerp from "../components/Header-p";
import Order from "../components/Order.jsx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useRef } from "react";

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
        },{
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
        },{
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
        },{
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
                    
                    <div className="pedidoshistorial" ref={navRefA}> {/* Asigna ref aquí */}
                        <button className="close-icon-admin" onClick={showBusq}><FaTimes /></button>
                        <input className="busqueda" type="text" placeholder="Buscar" />
                        <div className="ordenes">
                        
                        {orderList.map((order, index) => ( // Mapea la lista de datos a componentes Order
                            <Order key={order.id} codigo={order.codigo} hora={ order.hora} fecha = {order.fecha} />
                        ))}
                        </div>
                    </div>
                </div>
                <div className="detallepedido">
                    <h1 className="detalletitulo">DETALLES DEL PEDIDO</h1>
                    <div className="detalles">
                        <h1>detalle</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHist;

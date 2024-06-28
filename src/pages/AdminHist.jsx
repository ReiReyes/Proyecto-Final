
import "../assets/styles/Admin.css"
import "../assets/styles/AdminHist.css"
import Headerp from "../components/Header-p"
import Order from "../components/Order.jsx"
import { FaMagnifyingGlass } from "react-icons/fa6";
function AdminHist(){
    return(
        
        <div className="bodyA">
            <Headerp primero= "Inicio" enlacep = "home" 
                 segundo="Gestionar Menú" enlaces = "Manage-menu"
                 tercero= "Gestionar Historial" enlacet="Manage-shop-record"
                 cuarto="Gestionar Promociones" enlacec= "Manage-coupons"/>
        <div className="adminh-wrap">
            <div className="listapedidos">
            <h1 className="pedidotitulo">PEDIDO`S <button className="busquedahis"><FaMagnifyingGlass className="lupa"/></button></h1>
            <div className="pedidoshistorial">
            <Order dato = "HO1820234 13:01 15/5/2024"/>
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

export default AdminHist
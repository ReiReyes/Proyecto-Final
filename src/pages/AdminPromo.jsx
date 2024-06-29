
import "../assets/styles/Admin.css";
import "../assets/styles/AdminPromo.css";
import Headerp from "../components/Header-p.jsx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useRef } from "react";
import Activos from "../components/Activos.jsx";

function AdminPromo() {
    const Codigos = [
        {}
    ]
    
    return (
        <div className="bodyA">

            <Headerp
                primero="Inicio" enlacep="home"
                segundo="Gestionar Menú" enlaces="Manage-menu"
                tercero="Gestionar Historial" enlacet="Manage-shop-record"
                cuarto="Gestionar Promociones" enlacec="Manage-coupons"
            />
            <div className="adminp-wrap">
                <div className="adminp-wrap-inside">
                    <div className="activos">
                        <h1 className="tituloA">Codigos Activos</h1>
                        <div className="lineA"></div>
                        <Activos codigo="1234" estado= {true}/>
                    </div>
                    <div className="desactivados">
                        <h1 className="tituloA">Codigos Desactivos</h1>
                        <div className="lineA"></div>
                        <Activos codigo="1234" estado= {false}/>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default AdminPromo;

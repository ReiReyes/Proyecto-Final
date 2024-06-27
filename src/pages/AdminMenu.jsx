
import "../assets/styles/Admin.css"

import Headerp from "../components/Header-p"
function AdminMenu(){
    return(
        <div className="bodyA">

        <Headerp primero= "Inicio" enlacep = "home" 
                 segundo="Gestionar Menú" enlaces = "Manage-menu"
                 tercero= "Gestionar Historial" enlacet="Manage-shop-record"
                 cuarto="Gestionar Promociones" enlacec= "Manage-coupons"/>
        <h1>Welcome to admin menu</h1>
        </div>
    );
}

export default AdminMenu

import "../assets/styles/Admin.css"

import Headerp from "../components/Header-p"
import Order from "../components/Order.jsx"
function AdminHist(){
    return(
        
        <div className="bodyA">
            <Headerp primero= "Inicio" enlacep = "home" 
                 segundo="Gestionar Menú" enlaces = "Manage-menu"
                 tercero= "Gestionar Historial" enlacet="Manage-shop-record"
                 cuarto="Gestionar Promociones" enlacec= "Manage-coupons"/>
        <div className="adminh-wrap">
            
        
        </div>
        </div>
    );
}

export default AdminHist
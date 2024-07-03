import "../assets/styles/Admin.css";
import "../assets/styles/AdminPromo.css";
import Headerp from "../components/Header-p.jsx";
import { useState } from "react";
import Activos from "../components/Activos.jsx";
import AddCod from "../components/AddCod.jsx";

function AdminPromo() {
    const [showPopup, setShowPopup] = useState(false);
    const [savedDataList, setSavedDataList] = useState([]);
    const [savedDataListDes, setSavedDataListDes] = useState([]);

    const handleSave = (input1, input2) => {
        setSavedDataList([...savedDataList, { input1, input2 }]);
        console.log('Datos guardados:', { input1, input2 });
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const moveToInactive = (index) => {
        const itemToMove = savedDataList[index];
        setSavedDataListDes([...savedDataListDes, itemToMove]);
        setSavedDataList(savedDataList.filter((_, i) => i !== index));
    };
    const moveToActive = (index) => {
        const itemToMove = savedDataListDes[index];
        setSavedDataList([...savedDataList, itemToMove]);
        setSavedDataListDes(savedDataListDes.filter((_, i) => i !== index));
    };

    return (
        <div  className="bodyA">
            <Headerp 
                primero="Inicio" enlacep="LandingPage"
                segundo="Gestionar Menú" enlaces="Manage-menu"
                tercero="Gestionar Historial" enlacet="Manage-shop-record"
                cuarto="Gestionar Promociones" enlacec="Manage-coupons"
            />
            <div className="adminp-wrap">
                <div className="adminp-wrap-inside">
                    <div className="activos">
                        <h1 className="tituloA">Activos</h1>
                        <div className="lineA"></div>
                        <button className="addCod" onClick={togglePopup}>Agregar</button>
                        <AddCod show={showPopup} onClose={togglePopup} onSave={handleSave} />
                        <div className="codigos">
                            {savedDataList.length > 0 ? (
                                savedDataList.map((data, index) => (
                                    <div key={index} className="data-item">
                                        <Activos
                                            codigo={data.input1}
                                            porcentaje={data.input2}
                                            estado={true}
                                            onMoveToInactive={() => moveToInactive(index)}
                                        />
                                    </div>
                                ))
                            ) : (<></>
                            )}
                        </div>
                    </div>
                    <div className="desactivados">
                        <h1 className="tituloA">Inactivos</h1>
                        <div className="lineA"></div>
                        <div className="codigos">
                            {savedDataListDes.length > 0 ? (
                                savedDataListDes.map((data, index) => (
                                    <div key={index} className="data-item">
                                        <Activos
                                            codigo={data.input1}
                                            porcentaje={data.input2}
                                            estado={false}
                                            onMoveToActive={() => moveToActive(index)}
                                        />
                                    </div>
                                ))
                            ) : (<></>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPromo;
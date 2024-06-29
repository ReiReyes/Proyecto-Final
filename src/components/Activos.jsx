import "../assets/styles/Activos.css";
function Activos(props) {
    const Activado = () => {
        if (props.estado) {
            return  <div className="actBorder">
                    <p className="actCod">{props.codigo}</p>
                    <button className="desacbutton">Desactivar</button>
                    </div>;
        }else{
            return  <div className="desBorder">
                    <p className="desCod">{props.codigo}</p>
                    <button className="actbutton">Activar</button>
                    </div>;
        }
    }

    return (
        Activado()
  );
}
export default Activos;
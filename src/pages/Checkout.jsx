import Detalles from "../components/Detalles";
import MetodoPago from "../components/MetodoPago";
import Finalizar from "../components/Finalizar";
import Confirmado from "../components/Confirmado";
import Comentarios from "../components/Comentarios";

const Checkout = () => {
  return (
    <div>
      {/* Hay que separar las paginas */}  
      <Detalles />
      <MetodoPago/> 
      <Finalizar/>
      <Confirmado/>
      {/* <Comentarios/> */}
    </div>
  );
};
export default Checkout;

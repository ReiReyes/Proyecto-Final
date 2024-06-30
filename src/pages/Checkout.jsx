import Detalles from "../components/Detalles";
import MetodoPago from "../components/MetodoPago";
import Finalizar from "../components/Finalizar";
import Confirmado from "../components/Confirmado";


const Checkout = () => {
  return (
    <div>
      {/* Hay que separar las paginas */}  
      <Detalles />
      <MetodoPago/> 
      <Finalizar/>
      <Confirmado/>
    </div>
  );
};
export default Checkout;

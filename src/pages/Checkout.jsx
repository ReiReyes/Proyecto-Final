import { Navigate, BrowserRouter as Router} from "react-router-dom";

import Detalles from "../components/Detalles";
import MetodoPago from "../components/MetodoPago";
import Finalizar from "../components/Finalizar";
import Confirmado from "../components/Confirmado";
import Comentarios from "../components/Comentarios";

const Checkout = () => {
  return (
    <Router>
      {/* Hay que separar las paginas */}  
      <Detalles />
      <MetodoPago/> 
      <Finalizar/>
      <Confirmado/>
      <Comentarios/>
    </Router>
  );
};
export default Checkout;

// No puedo hacer el react router

// const Checkout = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route index element={user? <Navigate to ="/detalles"/> : <Detalles/>}/>
//         <Route path="/detalles" element={<Detalles />}/>
//         <Route path="/metodopago" element={<MetodoPago />}/>
//         <Route path="/finalizar" element={<Finalizar />}/>
//         <Route path="/confirmado" element={<Confirmado />}/>
//         <Route path="/comentarios" element={<Comentarios />}/>
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default Checkout;

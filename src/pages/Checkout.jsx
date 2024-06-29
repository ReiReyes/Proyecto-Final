import Detalles from "../components/Detalles";

const Checkout = () => {
  return (
    <div>
      <Detalles />
    </div>
  );
};

export default Checkout;

{/* <BrowserRouter>
  <Routes>
    <Route index  element={user?<Navigate to ='/Profile'/> : <Detalles />} />
    <Route path="/Login" element={<LoginForm />} />
    <Route path="/Register" element={<RegisterForm />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/LandingPage" element={<LandingPage />} />
  </Routes>
  <ToastContainer/>
</BrowserRouter> */}
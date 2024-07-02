import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "./pages/LoginForm.jsx";
import RegisterForm from "./pages/RegisterForm.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Entradas from "../src/pages/Menu/Entradas.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile.jsx";
import { useEffect, useState } from "react";
import { auth } from "./pages/firebase.js";
import Carro from "../src/pages/Menu/Carro.jsx";
import { ShopContextProvider } from "./context/shop-context";
import Bowls from "./pages/Menu/Bowls.jsx";
import Burritos from "./pages/Menu/Burritos.jsx";
import Bebidas from "./pages/Menu/Bebidas.jsx";

function App() {
  const [user, setUser] = useState();
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    }); 
  });

  return (
        <ShopContextProvider>
          <BrowserRouter>
              <Routes>
                <Route index element={user ? <Navigate to='/Profile' /> : <LoginForm />} />
                <Route path="/Login" element={<LoginForm />} />
                <Route path="/Register" element={<RegisterForm />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/LandingPage" element={<LandingPage />} />
                <Route path="/Entradas" element={<Entradas />} />
                <Route path="/Bowls" element={<Bowls />} />
                <Route path="/Burritos" element={<Burritos />} />
                <Route path="/Bebidas" element={<Bebidas />} />
                <Route path="/Carro" element={<Carro />} />
              </Routes>
              <ToastContainer />
          </BrowserRouter>
        </ShopContextProvider>
  )
}

export default App;


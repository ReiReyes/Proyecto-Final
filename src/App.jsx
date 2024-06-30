import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from './pages/LoginForm.jsx'
import RegisterForm from './pages/RegisterForm.jsx'
import LandingPage from './pages/LandingPage.jsx'
import AdminMenu from './pages/AdminMenu.jsx'
import AdminHist from './pages/AdminHist.jsx'
import Profile from './pages/Profile.jsx'
import Profile_Sec from './pages/Profile_Sec.jsx'
import AdminPromo from './pages/AdminPromo.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { auth } from "./pages/firebase.js";



function App() {

 const [user, setUser]=useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      setUser(user);
    }); 
  });


  return (
    <>
    <BrowserRouter>        
      <Routes>
        <Route index element={user? <Navigate to ="/Profile"/> : <LoginForm />} />
        <Route path="/Login" element = {<LoginForm />} />
        <Route path="/Profile" element = {<Profile />} />
        <Route path="/LandingPage" element = {<LandingPage/>} />
        <Route path="/register" element = {<RegisterForm/>} />
        <Route path="/Profile_security" element = { <Profile_Sec />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}
export default App

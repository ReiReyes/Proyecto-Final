import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import '../assets/styles/Profile.css';
import Header from '../components/Header-p';
import ImgUser from '../assets/imgs/imgUser/no_perfil.png';
import change_pfp from '../assets/imgs/imgUser/change_pfp.png';

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [telf, setTelf] = useState("");
  const [rol, setRol] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserDetails(data);
          setTelf(data.telefono || "");
          setRol(data.rol || "");
          setName(data.nombre || "");
          setLast_name(data.apellido || "");
        } else {
          console.log("Usuario no esta loggeado");
        }
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSave = async (event) => {
    event.preventDefault();
    console.log("HandleSave called");
    const change = doc(db, "Users", auth.currentUser.uid);
    await updateDoc(change, {
      nombre: name,
      apellido: last_name,
      rol: rol,
      telefono: telf,
    });
    console.log("Changes saved");
  };

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <form onSubmit={handleSave}>
        <div className='bodyProfile'>
          <Header enlacep="/Profile" primero="Perfil" enlaces="Profile_security" segundo="Metodos y Seguridad" tercero="Historial" cuarto="Log Out" />
          <div className='User_Profile'>
            <img className="Img_user" src={ImgUser} alt="User" />
            <img className="Img_change" src={change_pfp} alt="Change" />
          </div>
          <div className='container_user_options'>
            <h2 className='titulo_profile'>Nombre</h2>
            <input className='item_profile' value={name} onChange={(e) => setName(e.target.value)} />
            <div className='titulo_profile'>Apellido</div>
            <input className='item_profile' value={last_name} onChange={(e) => setLast_name(e.target.value)} />
            <div className='titulo_profile'>Rol Universitario</div>
            <input className='item_profile' value={rol} onChange={(e) => setRol(e.target.value)} />
            <div className='titulo_profile'>Telefono</div>
            <input className='item_profile' value={telf} onChange={(e) => setTelf(e.target.value)} />
            <button type="submit" className='profile_save_button_responsive'>Guardar Cambios</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Profile;

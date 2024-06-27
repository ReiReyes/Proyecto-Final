import '../assets/styles/Profile.css';
import Header from '../components/Header-p';
import ImgUser from '../assets/imgs/imgUser/no_perfil.png'
import change_pfp from '../assets/imgs/imgUser/change_pfp.png'

function Profile() {




  return (
    <>
    <div className='bodyProfile'>
    <Header primero= "Perfil" segundo= "Metodos y Seguridad" tercero= "Historial" cuarto= "Log Out"/>
        <div className='User_Profile'>
            <img className="Img_user" src={ImgUser}></img>
            <img className="Img_change" src={change_pfp}></img>
        </div>
        <div className='container_user_options'>
          <h2 className='titulo_profile'>Nombre</h2>
          <input className='item_profile' placeholder='hi' />
          <div className='titulo_profile'>Apellido</div>
          <input className='item_profile' placeholder='hallo' />
          <div className='titulo_profile'>Rol Universitario</div>
          <input className='item_profile' placeholder='hallo' />
          <div className='titulo_profile'>Telefono</div>
          <input className='item_profile' placeholder='hallo' />
        </div>
    </div>
    </>
  );
}

export default Profile;
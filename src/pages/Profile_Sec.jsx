import { useState } from 'react';
import '../assets/styles/Profile_Sec.css';
import Header from '../components/Header-p';



function Profile_Sec() {

const [cards] = useState([
  {
    title: 'Contraseña',
    text: 'yo hello guys its asian guy streamer here',
  },
  {
    title: 'Correo Electronico',
    text: 'yo hello guys its asian guy streamer here',
  },
]);

const [cards2] = useState([
  {
    title: 'Paypal',
    text: 'yo hello guys its asian guy streamer here',
  },
  {
    title: 'Preferencias',
    text: 'yo hello guys its asian guy streamer here',
  },
]);
  return (
    <>
    <div className='bodyProfile_Sec'>
    <Header primero= "Perfil" segundo= "Metodos y Seguridad" tercero= "Historial" cuarto= "Log Out"/>
    <section className='section_options'>
        <div className='card_box_1'>
            <div className='cards'>      
            {
                cards.map((card, i) => (
            
            <div key={i} className='card'>
                <p>{card.text}</p>
                <p> gogo tata</p>
            </div>
            ))
        }
        </div>
    </div>
        <div className='card_box_2'>
            <div className='cards'>      
            {
                cards2.map((card, i) => (
            
            <div key={i} className='card'>
                <h1>{card.title}</h1>
                <p>{card.text}</p>
                <p> gogo tata</p>
            </div>
            ))
        }
        </div>
    </div>
    </section>
    </div>
    </>
  )

}

export default Profile_Sec;
import { useState } from 'react';
import '../assets/styles/Profile_Sec.css';
import Header from '../components/Header-p';



function Profile_Sec() {

const [cards] = useState([
  {
    title: 'Contraseña',
    text: 'Cambiar',
  },
  {
    title: 'Pago en Linea',
    text: 'Paypal',

  },
]);

const [cards2] = useState([
  {
    title: 'Correo Electronico',
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
        <div className='card_box'>
            <div className='cards'>      
            {
                cards.map((card, i) => (

          <div className='cards'>
              <h3 className='titles_security'>{card.title}</h3>
            <div key={i} className='card'>
                <button className='cards_button'>{card.text}</button>
            </div>
          </div>
            ))
        }
        </div>
    </div>
        <div className='card_box_2'>
            <div className='cards'>      
            {
                cards2.map((card, i) => (

          <div className='cards'>
              <h3 className='titles_security'>{card.title}</h3>
            <div key={i} className='card'>
                <p>{card.text}</p>
            </div>
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
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

  const [card_correo] = useState([
    {
      title: 'Correo Electronico',
      text_1: 'd.andres@correo.unimet.edu.ve',
    },
  ]);

  const [card_preferencias] = useState([
    {
      title: 'Preferencias',
      text_1: 'Deseo recibir informacion de promociones',
      text_2: 'Deseo recibir informacion de eventos',
    },
  ]);

  const [classState_1, setClassState] = useState({
    firstCheck: 'fa-li fa fa-square-o first-check',
    secondCheck: 'fa-li fa fa-square-o second-check'
  });

  const handleFirstClick = () => {
    setClassState((prevClassState) => ({
      ...prevClassState,
      firstCheck: prevClassState.firstCheck === 'fa-li fa fa-square-o first-check'
        ? 'fa-li fa fa-check-square-o first-check'
        : 'fa-li fa fa-square-o first-check'
    }));
  };

  const handleSecondClick = () => {
    setClassState((prevClassState) => ({
      ...prevClassState,
      secondCheck: prevClassState.secondCheck === 'fa-li fa fa-square-o second-check'
        ? 'fa-li fa fa-check-square-o second-check'
        : 'fa-li fa fa-square-o second-check'
    }));
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className='bodyProfile_Sec'>
        <Header enlacep="/Profile" primero="Perfil" enlaces="Profile_security" segundo="Metodos y Seguridad" tercero="Historial" cuarto="Log Out" />
        <section className='section_options'>
          <div className='card_box'>
            <div className='cards'>
              {cards.map((card, i) => (
                <div key={i} className='cards'>
                  <h3 className='titles_security'>{card.title}</h3>
                  <div className='card'>
                    <button className='cards_button'>{card.text}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='card_box_2'>
            <div className='cards'>
              {card_correo.map((card, i) => (
                <div key={i} className='cards'>
                  <h3 className='titles_security'>{card.title}</h3>
                  <div className='card'>
                    <p className='display_correo'>{card.text_1}</p>
                  </div>
                </div>
              ))}
              {card_preferencias.map((card, i) => (
                <div key={i} className='cards'>
                  <h3 className='titles_security'>{card.title}</h3>
                  <div className='card_preferences'>
                    <ul className='fa-ul'>
                      <li>
                        <i
                          className={classState_1.firstCheck}
                          onClick={handleFirstClick}
                        ></i>
                      </li>
                    </ul>
                    <p className='preference_text'>{card.text_1}</p>
                    <ul className='fa-ul'>
                      <li>
                        <i
                          className={classState_1.secondCheck}
                          onClick={handleSecondClick}
                        ></i>
                      </li>
                    </ul>
                    <p className='preference_text_2'>{card.text_2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Profile_Sec;
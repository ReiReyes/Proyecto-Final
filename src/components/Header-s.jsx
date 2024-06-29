// import "../assets/styles/header-s.css";
// import logoMolokai from "../assets/imgs/imgHeader/Logo Molokai.png";
// import logoUnimet from "../assets/imgs/imgHeader/LogoUnimet.png";


// const Header = () => {
//   return (
//     <div className="body-header">
//     <header className="header">
//       <div className="top-bar">
//         <div className="uni-logo">
//           <img src={logoUnimet} alt="Universidad Metropolitana" />
//         </div>
//       </div>
//       <div className="main-header">
//         <div className="brand"> 
//         </div>
//         <div className="logoMolokai">
//           <img src={logoMolokai} alt="Logotipo de MOLOKA'I" />
//         </div>
//       </div>
//     </header>
//     </div>
//   );
// };

// export default Header;












// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: "Inter", sans-serif;
//   }
  
//   .header {
//     width: 100%;
//     position: fixed; /* Fija el header en la parte superior de la pantalla */
//     top: 0;
//     z-index: 10;
//     background-image: url("../assets/images/imgBanner/Banner-Poke.jpg");
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//   }
  
//   .top-bar {
//     background-color: #3b5998;
//     color: white;
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     padding: 5px 20px;
//     align-items: center;
//   }
  
//   .uni-logo img {
//     height: 35px;
//   }
  
//   .auth-links {
//     display: flex;
//     align-items: center;
//   }
  
//   .auth-links a {
//     color: white;
//     margin-left: 8px;
//     text-decoration: none;
//     font-weight: 500;
//   }
  
//   .auth-links a:hover {
//     text-decoration: underline;
//   }
  
//   .auth-links .separator {
//     margin: 0 5px;
//     height: 22px;
//   }
  
//   .auth-links .user-icon {
//     margin: 0 5px;
//     height: 25px;
//   }
  
//   .main-header {
//     background-color: white;
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 22px 30px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     position: relative;
//   }
  
//   .brand h1 {
//     color: #29CCBA;
//     font-size: 3em; /* Aumenta el tamaño de la fuente de MOLOKA'I */
//     margin: 0;
//     font-family: "Playfair Display", serif;
//     font-weight: 200;
//     letter-spacing: 10px;
//   }
  
//   nav {
//     display: flex;
//     gap: 20px;
//     align-items: center;
//     margin-left: auto;
//   }
  
//   nav a {
//     text-decoration: none;
//     color: #ff6b6b;
//     font-weight: bold;
//     font-size: 1.3em; /* Aumenta el tamaño de la fuente de INICIO, NOSOTROS, y MENU */
//   }
  
//   nav .menu-btn {
//     background-color: #ff6b6b;
//     color: white;
//     padding: 10px 15px;
//     border-radius: 5px;
//     font-size: 1.3em; /* Aumenta el tamaño de la fuente del botón MENU */
//   }
  
//   .cart {
//     margin-left: 40px;
//   }
//   .cart img {
//     height: 60px;
//     cursor: pointer;
//   }
  
//   .logoMolokai {
//     flex: 1;
//     text-align: center;
//     position: absolute;
//     top: 20px;
//     left: 50%;
//     transform: translateX(-50%);
//   }
  
//   .logoMolokai img {
//     max-width: 140px;
//   }
  
//   @media (max-width: 1024px) {
//     .menu {
//       position: fixed;
//       top: 0;
//       right: -100%;
//       height: 100vh;
//       flex-direction: column;
//       align-items: flex-start;
//       background-color: white;
//       padding: 2rem;
//       transition: right 0.3s ease-in-out;
//       z-index: 100;
//     }
  
//     .menu.responsive_nav {
//       right: 0;
//     }
  
//     .menu-icon {
//       display: block;
//     }
  
//     .close-icon {
//       display: block;
//       align-self: flex-end;
//     }
  
//     .logoMolokai {
//       position: static;
//       transform: none;
//     }
//   }
  
//   /* Media Queries para hacer el header responsive */
//   @media (max-width: 1020px) {
//     .top-bar {
//       align-items: center;
//       padding: 1px 20px;
//     }
  
//     .uni-logo img {
//       max-width: 100px;
//     }
  
//     .auth-links {
//       margin-top: 2px;
//     }
  
//     .auth-links a{
//       font-size: 0.8em; 
//     }
  
//     .main-header {
//       align-items: center;
//       padding: 17px 30px;
//     }
    
  
//     .brand h1 {
//       font-size: 34px;
//     }
  
//     .logoMolokai img {
//       max-width: 120px;
//     }
  
//     nav{
//       gap: 12px;
//     }
  
//     nav a {
//       margin: 0 1px;
//       font-size: 1em; 
//     }
  
//     nav .menu-btn {
//       padding: 8px 13px;
//       font-size: 1em; 
//     }
  
//     .cart{
//       margin-left: 20px;
//     }
  
//     .cart img {
//       height: 50px;
//       cursor: pointer;
//     }
  
//     .auth-links .separator {
//       height: 18px;
//     }
    
//     .auth-links .user-icon {
//       height: 19px;
//     }
//   }
  
//   @media (max-width: 795px) {
  
//     .uni-logo img {
//       max-width: 80px;
//     }
  
//     .auth-links {
//       margin-top: 2px;
//     }
  
//     .auth-links a{
//       font-size: 0.7em; 
//     } 
  
//     .brand h1 {
//       font-size: 27px;
//     }
  
//     .logoMolokai img {
//       max-width: 100px;
//     }
  
//     nav{
//       gap: 10px;
//     }
  
//     nav a {
//       font-size: 0.9em; 
//     }
  
//     nav .menu-btn {
//       font-size: 0.9em; 
//     }
  
//     .cart{
//       margin-left: 14px;
//     }
  
//     .cart img {
//       height: 44px;
//     }
  
//     .auth-links .separator {
//       height: 15px;
//     }
    
//     .auth-links .user-icon {
//       height: 17px;
//     }
    
//   }
  
  
//   @media (max-width: 725px) {
  
//     nav{
//       flex-direction: column;
//       gap: 8px;
//     }
  
//     nav a {
//       font-size: 0.6em;
//     }
  
//     nav .menu-btn {
//       font-size: 0.6em; 
//     }
  
//     .main-header {
//       padding: 8px 30px;
//     }
  
//     .logoMolokai img {
//       max-width: 92px;
//     }
    
//     .brand h1 {
//       font-size: 25px;
//     }
    
//     .cart img {
//       height: 40px;
//     }
  
//     .uni-logo img {
//       max-width: 70px;
//       height: 30px;
//     }
  
//     .auth-links a{ 
//       margin-left: 0px;
//     }
  
//   }
  
  
//   @media (max-width: 480px) {
  
//     nav{
//       gap: 6px;
//     }
  
//     nav a {
//       font-size: 0.5em; 
//     }
  
//     nav .menu-btn {
//       font-size: 0.5em;
//     }
  
//     .logoMolokai img {
//       max-width: 84px;
//     }
  
//     .brand h1 {
//       font-size: 22px;
//     }
    
//     .cart img {
//       height: 35px;
//     }
  
//     .uni-logo img {
//       max-width: 60px;
//       height: 25px;
//     }
  
//     .auth-links .separator {
//       height: 12px;
//     }
    
//     .auth-links .user-icon {
//       height: 14px;
//     }
  
//     .auth-links a{
//       font-size: 0.6em; 
//     }
  
//   }
  
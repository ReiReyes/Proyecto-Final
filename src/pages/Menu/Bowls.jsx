import React from "react";
import './Entradas.css';
import "../../assets/styles/header.css";
import Header from "../../components/Header.jsx";
import Navbarbo from "../../components/Navbarbo.jsx";
import { PRODUCTS } from '../../../products.js';
import { Product } from "../Menu/Product.jsx";



const Bowls = () => {
    
    
    return (
        
        <>  
            <div className="main-box">
            <div className="nav-menu"><Navbarbo /></div>

            <div className="products">
                {PRODUCTS.filter(product => product.productType === "bowl").map((product) => (
                    <Product key={product.id} data={product} />
                ))}

            </div>
            </div>

            <div className="headerc"><Header/></div>     
        </>
    );
    } 
export default Bowls; 
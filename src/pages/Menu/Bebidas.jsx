import React from "react";
import './Entradas.css';
import "../../assets/styles/header.css";
import Header from "../../components/Header.jsx";
import Navbarbe from "../../components/Navbarbe.jsx";
import { PRODUCTS } from '../../../products.js';
import { Product } from "../Menu/Product.jsx";



const Bebidas = () => {
    
    
    return (
        
        <>  
            <div className="main-box">
            <div className="nav-menu"><Navbarbe /></div>

            <div className="products">
                {PRODUCTS.filter(product => product.productType === "bebida").map((product) => (
                    <Product key={product.id} data={product} />
                ))}

            </div>
            </div>

            <div className="headerc"><Header/></div>     
        </>
    );
    } 
export default Bebidas; 
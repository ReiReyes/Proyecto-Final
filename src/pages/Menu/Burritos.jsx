import React from "react";
import './Entradas.css';
import "../../assets/styles/header.css";
import Header from "../../components/Header.jsx";
import { PRODUCTS } from '../../../products.js';
import { Product } from "../Menu/Product.jsx";
import Navbarbu from "../../components/Navbarbu.jsx";



const Burritos = () => {
    
    
    return (
        
        <>  
            <div className="main-box">
            <div className="nav-menu"><Navbarbu /></div>

            <div className="products">
                {PRODUCTS.filter(product => product.productType === "burrito").map((product) => (
                    <Product key={product.id} data={product} />
                ))}

            </div>
            </div>

            <div className="headerc"><Header/></div>     
        </>
    );
    } 
export default Burritos; 
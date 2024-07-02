import React from "react";

import "../../assets/styles/header.css";
import Header from "../../components/Header.jsx";
import Navbar from "../../components/Navbar.jsx";
import { PRODUCTS } from '../../../products.js';
import { Product } from "../Menu/Product.jsx";


const Entradas = () => {
    
    
    return (
        
        <>  
            <div className="main-box">
            <div className="nav-menu"><Navbar /></div>

            <div className="products">
                {PRODUCTS.filter(product => product.productType === "entrada").map((product) => (
                    <Product key={product.id} data={product} />
                ))}

            </div>
            </div>

            <div className="headerc"><Header/></div>     
        </>
    );
    } 
export default Entradas; 
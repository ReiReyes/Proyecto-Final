import React from "react";
import './Entradas.css';
import "../../assets/styles/header.css";
import Header from "../../components/Header.jsx";
import Navbar from "../../components/Navbar.jsx";
import { PRODUCTS } from '../../../products.js';
import { Product } from "../Menu/Product.jsx";
import { useEffect, useState } from 'react';


const Entradas = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('PRODUCTS')) || [];
        setProducts(storedProducts);
    }, []);

    return (
        
        <>  
            <div className="main-box">
            <div className="nav-menu"><Navbar /></div>

            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}
                {products.map((product) =>(
                            <Product data={product} />
                        ))}

            </div>
            </div>

            <div className="headerc"><Header/></div>     
        </>
    );
    } 
export default Entradas; 
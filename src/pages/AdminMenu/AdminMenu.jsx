import React from "react";
import './AdminMenu.css';
import Headerp from "../../components/Header-p.jsx";
import Navbar from "../../components/Navbar.jsx";
import { PRODUCTS } from '../../../products.js';
import { Product } from "../AdminMenu/ProductA.jsx";
import { NewProduct } from "../AdminMenu/ProductAdd.jsx"
import { useEffect, useState } from 'react';



const AdminMenu = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('PRODUCTS')) || [];
        setProducts(storedProducts);
    }, []);
    return (

        <>
            <div className="bodyA">
                <Headerp primero="Inicio" enlacep="LandingPage"
                    segundo="Gestionar Menú" enlaces="Manage-menu"
                    tercero="Gestionar Historial" enlacet="Manage-shop-record"
                    cuarto="Gestionar Promociones" enlacec="Manage-coupons" />
                <div className="main-box-a">
                    <div className="nav-menu-a"><Navbar /></div>

                    <div className="products-a">
                        {PRODUCTS.map((product) => (
                            <Product data={product} />
                        ))}
                        {products.map((product) =>(
                            <Product data={product} />
                        ))}
                        <NewProduct />
                    </div>
                </div>

            </div>
        </>
    );
}
export default AdminMenu; 
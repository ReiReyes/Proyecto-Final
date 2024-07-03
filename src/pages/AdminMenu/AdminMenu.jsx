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
        const deletedProductIds = JSON.parse(localStorage.getItem('DELETED_PRODUCTS')) || [];

        const filteredPredefinedProducts = PRODUCTS.filter(product => !deletedProductIds.includes(product.id));

        const filteredStoredProducts = storedProducts.filter(product => !deletedProductIds.includes(product.id));

        setProducts([...filteredPredefinedProducts, ...filteredStoredProducts]);
    }, []);

    return (
        <>
            <div className="bodyA">
                <Headerp primero="Inicio" enlacep="LandingPage"
                    segundo="Gestionar Menú" enlaces="Manage-menu"
                    tercero="Gestionar Historial" enlacet="Manage-shop-record"
                    cuarto="Gestionar Promociones" enlacec="Manage-coupons" />
                <div className="main-box-a">
                    <div className="box-title-a"><h1>NUESTRO MENU!</h1></div>

                    <div className="products-a">
                        <NewProduct />
                        {products.map((product) => (
                            <Product key={product.id} data={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminMenu;

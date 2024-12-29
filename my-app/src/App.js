// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/header/header';
import Footer from "../src/footer/footer";
import ProductList from "../src/component/ProductList";
import ProductDetail from "../src/component/ProductDetail";
import Cart from './Cart/cart';
import { handleAddToCart } from '../src/event handling/event handling Cart';
import './css/Cart.css';
import './css/App.css'; // Thêm file CSS cho layout

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        setCartItems((prevItems) => handleAddToCart(prevItems, product, quantity));
    };

    return (
        <Router>
            <div className="App">
                <Header cartItems={cartItems} />
                <div className="content"> {/* Bao bọc nội dung để đẩy footer xuống */}
                    <Routes>
                        <Route path="/" element={<ProductList addToCart={addToCart} />} />
                        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
                        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
                    </Routes>
                </div>
                <Footer cartItems={cartItems} />
            </div>
        </Router>
    );
}

export default App;

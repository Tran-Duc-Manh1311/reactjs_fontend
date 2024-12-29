// src/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import SearchInput from './SearchInput'; // Đường dẫn đến SearchInput.js
import '../css/Header.css';

function Header({ cartItems }) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <nav className="navbar navbar-expand-lg shadow-sm mb-4" style={{ backgroundColor: '#312b29' }}>
            <div className="container">
                <Link className="navbar-brand text-white fw-bold" to="/">Product Shop Online </Link>
                
                <form className="d-flex mx-auto search-bar">
                    <SearchInput 
                        searchTerm={searchTerm} 
                        setSearchTerm={setSearchTerm} 
                        placeholder="Tìm sản phẩm..."
                    />
                    <button className="btn btn-outline-light" type="submit">
                        <FiSearch />
                    </button>
                </form>
                
                <div className="d-flex align-items-center">
                    <Link className="nav-link text-white me-3" to="/cart">
                    <TiShoppingCart style={{ fontSize: '2rem' }} /> {/* Thay đổi kích thước ở đây */}
                    <span className="badge bg-light text-dark">{cartItems ? cartItems.length : 0}</span>
                    </Link>

                    <Link className="nav-link text-white" to="/profile">
                        <FaUser /> Profile
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;

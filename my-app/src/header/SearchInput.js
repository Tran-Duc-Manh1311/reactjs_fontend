// src/components/SearchInput.js
import React from 'react';

function SearchInput({ searchTerm, setSearchTerm, placeholder = "Tìm sản phẩm..." }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
        />
    );
}

export default SearchInput;

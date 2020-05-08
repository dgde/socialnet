import React from 'react';
import { FaSearch } from 'react-icons/fa';

import './style.css';

export default props => (
    <div className="search-box">
        <label htmlFor="search">
            <FaSearch className="search-icon" />
        </label>
        <input
            id="search"
            className="search-input"
            type="text"
            placeholder="Procurar..."
            autoComplete="off"
        />
    </div>
);
import React from 'react';

import './style.css';

export default props => (
    <nav className="menu-nav">
        <ul className="menu-list">
            {props.children}
        </ul>
    </nav>
);
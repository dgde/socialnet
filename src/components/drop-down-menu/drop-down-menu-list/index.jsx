import React from 'react';

import './style.css';

export default props => (
    <div className="drop-down-menu">
        <ul className="drop-down-menu-list">
            {props.children}
        </ul>
    </div>
);
import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default props => {
    const Icon = props.icon;

    return (
        <li className="drop-down-menu-item">
            <Link className="drop-down-menu-link" to={props.path}>
                <span className="drop-down-menu-icon"><Icon /></span>
                <span className="drop-down-menu-text">{props.text}</span>
            </Link>
        </li>
    );
}
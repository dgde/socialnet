import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './style.css';
import { sideBarModes } from '../../../globalDefinitions';

export default props => {
    const Icon = props.icon;

    const match = useRouteMatch({
        path: props.path,
        exact: true
    });

    return (
        <li className="menu-item">
            <Link className={`menu-item-link ${match ? 'active' : ''}`} to={props.path}>
                <span className="menu-item-icon"><Icon /></span>
                <span className={`menu-item-text ${props.sideBarMode === sideBarModes.lg ? 'text-on' : 'text-off'}`}>
                    {props.text}
                </span>
            </Link>
        </li>
    );
}
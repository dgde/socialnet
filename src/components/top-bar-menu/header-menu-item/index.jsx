import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import SearchItem from '../../../components/search-item';
import Show from '../../../common/Show';

export default props => {
    const Icon = props.icon;

    const iconLink = () => (
        <Link to={props.path} className="header-menu-link">
            <Icon className="header-menu-icon" />
            <Show if={props.count != null && props.count > 0}>
        <span className="badge badge-danger badge-icon">{props.count}</span>
            </Show>
        </Link>
    );

    const buttonLink = () => (
        <button
            className="header-menu-button"
            onClick={() => props.action(props.actionPar)}
        >
            <Icon className="header-menu-icon" />
        </button>
    );

    const searchItem = () => <SearchItem />;

    const menuItem = () => {
        switch (props.type) {
            case 'icon-link': return iconLink();
            case 'button-link': return buttonLink();
            case 'search-item': return searchItem();
            default: return false;
        }
    }

    return (
        <li className="header-menu-item">
            {menuItem()}
        </li>
    );
}
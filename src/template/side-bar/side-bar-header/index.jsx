import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import { sideBarModes } from '../../../globalDefinitions';

export default props => (
    <section className="side-bar-header">
        <div className="side-bar-header-group-items">
            <div className="side-bar-header-item">
                <Link className="side-bar-header-link" to="/">
                    <img src="assets/IconShareUser.png" alt="icon" className="side-bar-header-icon" />
                </Link>
            </div>
            <div className={`side-bar-header-item ${props.sideBarMode === sideBarModes.lg ? 'item-on' : 'item-off'}`}>
                <Link className="side-bar-header-link" to="/">
                    <span className="side-bar-header-logo">Social Network</span>
                </Link>
            </div>
        </div>
    </section>
);
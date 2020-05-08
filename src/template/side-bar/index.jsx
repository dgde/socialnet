import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import SideBarHeader from './side-bar-header';
import SideBarBody from './side-bar-body';
import { sideBarModes } from '../../globalDefinitions';

const SideBar = props => (
    <aside className={`side-bar ${props.sideBarMode === sideBarModes.lg ? 'side-bar-lg' : 'side-bar-sm'}`}>
        <SideBarHeader sideBarMode={props.sideBarMode} />
        <SideBarBody sideBarMode={props.sideBarMode} />
    </aside>
);

const mapStateToProps = state => ({ sideBarMode: state.sideBar.sideBarMode });

export default connect(mapStateToProps)(SideBar);
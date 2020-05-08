import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import { sideBarModes } from '../../globalDefinitions';

const Main = props => (
    // <main className="main main-sm">
    <main className={`main ${props.sideBarMode === sideBarModes.lg ? 'main-sm' : 'main-lg'}`}>
        {props.children}
    </main>
);

const mapStateToProps = state => ({ sideBarMode: state.sideBar.sideBarMode });

export default connect(mapStateToProps)(Main);
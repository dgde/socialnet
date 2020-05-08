import React, { Fragment } from 'react';

import './style.css';
import Header from '../template/header';
import SideBar from '../template/side-bar';
import Main from '../template/main';

const NoSideBarLayout = props => (
    <Fragment>
        <Header />
        <Main>
            {props.children}
        </Main>
    </Fragment>
);

const DynamicSideBarLayout = props => (
    <Fragment>
        <Header />
        <SideBar />
        <Main>
            {props.children}
        </Main>
    </Fragment>
);

export { NoSideBarLayout, DynamicSideBarLayout };
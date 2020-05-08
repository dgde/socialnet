import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaHome } from 'react-icons/fa';

import './style.css';
import { doNotShowUserDropDownMenu } from '../../template/header/headerActions';
import { DynamicSideBarLayout } from '../../layouts';
import PageHeader from '../../components/page-header';

const Home = props => {
    useEffect(() => {
        props.doNotShowUserDropDownMenu();
    });

    return (
        <DynamicSideBarLayout>
            <div className="home">
                <PageHeader icon={FaHome} title="Início" />
            </div>
        </DynamicSideBarLayout>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({ doNotShowUserDropDownMenu }, dispatch);

export default connect(null, mapDispatchToProps)(Home);
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaUsers } from 'react-icons/fa';

import './style.css';
import { DynamicSideBarLayout } from '../../layouts';
import { doNotShowUserDropDownMenu } from '../../template/header/headerActions';
import PageHeader from '../../components/page-header';

const Network = props => {
    useEffect(() => {
        props.doNotShowUserDropDownMenu();
    });

    return (
        <DynamicSideBarLayout>
            <div className="messages">
                <PageHeader icon={FaUsers} title="Sua Rede" />
            </div>
        </DynamicSideBarLayout>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({ doNotShowUserDropDownMenu }, dispatch);

export default connect(null, mapDispatchToProps)(Network);
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaEnvelope } from 'react-icons/fa';

import './style.css';
import { DynamicSideBarLayout } from '../../layouts';
import { doNotShowUserDropDownMenu } from '../../template/header/headerActions';
import PageHeader from '../../components/page-header';

const Messages = props => {
    useEffect(() => {
        props.doNotShowUserDropDownMenu();
    });

    return (
        <DynamicSideBarLayout>
            <div className="messages">
                <PageHeader icon={FaEnvelope} title="Suas Mensagens" />
            </div>
        </DynamicSideBarLayout>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({ doNotShowUserDropDownMenu }, dispatch);

export default connect(null, mapDispatchToProps)(Messages);
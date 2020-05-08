import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaHome, FaUsers, FaEnvelope, FaUser, FaCog, FaUserCog, FaSignOutAlt } from 'react-icons/fa';

import './style.css';
import { sideBarModes } from '../../globalDefinitions';
import { toggleSideBarMode } from '../side-bar/sideBarActions';
import { toggleUserDropDownMenu } from './headerActions';
import Show from '../../common/Show';

import HeaderMenuList from '../../components/top-bar-menu/header-menu-list';
import HeaderMenuItem from '../../components/top-bar-menu/header-menu-item';
import DropDownMenuList from '../../components/drop-down-menu/drop-down-menu-list';
import DropDownMenuItem from '../../components/drop-down-menu/drop-down-menu-item';

const Header = props => (
	<header className={`header ${props.sideBarMode === sideBarModes.lg ? 'header-sm' : 'header-lg'}`}>
		<HeaderMenuList sideBarMode={props.sideBarMode} toggleSideBarMode={props.toggleSideBarMode}>
			<HeaderMenuItem type="icon-link" icon={FaHome} path="/" />
			<HeaderMenuItem type="icon-link" icon={FaUsers} path="/network" count="1" />
			<HeaderMenuItem type="icon-link" icon={FaEnvelope} path="/messages" count="5" />
			<HeaderMenuItem type="button-link" icon={FaUser} action={props.toggleUserDropDownMenu} actionPar={props.showUserDropDownMenu} />
		</HeaderMenuList>
		<Show if={props.showUserDropDownMenu}>
			<DropDownMenuList>
				<DropDownMenuItem text="Ver Perfil" icon={FaUser} path="/profile" />
				<DropDownMenuItem text="Editar Perfil" icon={FaUserCog} path="/" />
				<DropDownMenuItem text="Configurações" icon={FaCog} path="/" />
				<DropDownMenuItem text="Sair" icon={FaSignOutAlt} path="/" />
			</DropDownMenuList>
		</Show>
	</header>
);

const mapStateToProps = state => ({
	sideBarMode: state.sideBar.sideBarMode,
	showUserDropDownMenu: state.header.showUserDropDownMenu
});

const mapDispatchToProps = dispatch => bindActionCreators({
	toggleSideBarMode,
	toggleUserDropDownMenu
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
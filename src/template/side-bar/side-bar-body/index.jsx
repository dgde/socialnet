import React from 'react';
import { FaHome, FaUser, FaUsers, FaEnvelope } from 'react-icons/fa'

import './style.css';
import MenuList from '../../../components/side-bar-menu/menu-list';
import Menuitem from '../../../components/side-bar-menu/menu-item';

export default props => (
    <section className="side-bar-body">
        <MenuList>
            <Menuitem
                icon={FaHome}
                text="Página Inicial"
                path="/"
                sideBarMode={props.sideBarMode}
            />
            <Menuitem
                icon={FaUser}
                text="Seu Perfil"
                path="/profile"
                sideBarMode={props.sideBarMode}
            />
            <Menuitem
                icon={FaUsers}
                text="Sua Rede"
                path="/network"
                sideBarMode={props.sideBarMode}
            />
            <Menuitem
                icon={FaEnvelope}
                text="Suas Mensagens"
                path="/messages"
                sideBarMode={props.sideBarMode}
            />
        </MenuList>
    </section>
);
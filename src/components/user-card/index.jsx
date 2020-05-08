import React from 'react';

import './style.css';
import Show from '../../common/Show';

export default props => (
    <div className="card user-card">
        <img className="card-img-top user-card-img" src="assets/default-profile-cover.jpg" alt="capa" />
        <div className="user-card-header">
            <img className="user-card-avatar" src="assets/default-male-avatar.png" alt="avatar"/>
            <div className="user-card-header-side">
                <h5 className="card-title text-white">Fulano de Tal</h5>
                <h6 className="card-subtitle">Porto Alegre</h6>
            </div>
        </div>
        <div className="card-body">
            <hr className="user-card-hr"/>
            <p className="card-text user-card-text"><span className="text-muted">Seguidores:</span> 123</p>
            <hr className="user-card-hr" />
            <p className="card-text user-card-text"><span className="text-muted">Seguindo:</span> 234</p>
            <hr className="user-card-hr" />
            <p className="card-text user-card-text"><span className="text-muted">Amigos:</span> 345</p>
            <hr className="user-card-hr" />
        </div>
        <Show if={true}>
            <div className="card-footer bg-white">
                <button className="btn btn-block btn-primary">
                    <span className="user-card-button-text">Seguir</span>
                </button>
            </div>
        </Show>
    </div>
);
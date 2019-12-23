import React from 'react';

import './style.css';

export default function Menu(props) {
    return (
        <div className="container">
            <h1 className="titulo">
                Sistema de Entregas
            </h1>        
            <div className="itensMenu">
                <a href="/entregas">
                    <i class="fa fa-list-ol" aria-hidden="true"></i>
                    Lista de Entregas
                </a>
                <a href="/cadastro">
                    <i className="fa fa-truck" aria-hidden="true"></i>
                    Cadastrar Entrega
                </a>
            </div>            
        </div>    
    );
}
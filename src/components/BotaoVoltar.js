import React from 'react';

import './style.css';

export default function BotaoVoltar({history, rota}) {

    function handleClick() {
        history.push(rota);
    }
    return (
        <a onClick={() => handleClick()} className="botaoVoltar">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            Voltar
        </a>
    );
}
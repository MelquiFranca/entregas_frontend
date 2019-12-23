import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Entregas from './pages/Entregas';
import Menu from './pages/Menu';
import Cadastro from './pages/Cadastro';
import Mapa from './pages/Mapa';

export default function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Menu}/>
                <Route path="/entregas" component={Entregas}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/mapa/:id" component={Mapa}/>

                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}
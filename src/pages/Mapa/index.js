import React, {useState, useEffect} from 'react';
import {Marker, GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps';

import BotaoVoltar from '../../components/BotaoVoltar';

import api from '../../services/api';

import './style.css';



export default function Mapa(props) {
    const [entrega, setEntrega] = useState(null);
    const [geocodePoint, setGeocodePoint] = useState({});

    useEffect(() => {
        const id = props.match.params.id;

        async function carregaDados() {
            const dados = await api.get(`/entregas/${id}`);            
            setEntrega(dados.data);
        }
        carregaDados();
    }, []);

    return (        
            <div className="container">
                <h1 className="titulo">Mapa</h1>
                {(entrega != null) && <div className="painelMapa">
                    <div className="dadosEntrega">
                        <div><label>Cliente: </label><span>{entrega.cliente}</span></div>
                        <div><label>Data de Entrega: </label><span>{entrega.dataEntrega}</span></div>
                        <div><label>Local de Origem: </label><span>{entrega.localOrigem}</span></div>
                        <div><label>Local de Destino: </label><span>{entrega.localDestino}</span></div>
                    </div>
                     <iframe 
                        src={`https://www.google.com/maps/embed/v1/directions?origin=${entrega.localOrigem}&destination=${entrega.localDestino}&key=AIzaSyAzDK8VGdxXfsKLgtmqUCxS8Po42vRuFYo`} 
                        frameBorder="0"
                        className="mapa"
                    >
                    </iframe>
                    <BotaoVoltar 
                        {...props}
                        rota="/entregas"
                    />
                </div>}
            </div>

    );
}


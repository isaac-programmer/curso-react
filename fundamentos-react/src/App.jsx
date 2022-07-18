import React from 'react';

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';

export default function App() {
    return (
        <div>            
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro />
            </Card>

            <Card titulo="#02 - Com Parâmetro">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Muito Legal!"
                />
            </Card>
            
            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>
            
            <Card titulo="#04 - Desafio Aleatório">
                <Aleatorio valorMin={10} valorMax={20} />
                <Aleatorio valorMin={10} valorMax={20} />
            </Card>
        </div>
    );
}
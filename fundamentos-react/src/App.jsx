import React from 'react';

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default function App() {
    return (
        <div>
            <Primeiro />
            <ComParametro
                titulo="Segundo Componente"
                subtitulo="Muito Legal!"
            />
            <Fragmento />
            <Aleatorio valorMin={10} valorMax={20} />
        </div>
    );
}
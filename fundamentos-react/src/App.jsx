import React from 'react';

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from './components/basicos/Fragmento';

export default function App() {
    return (
        <div>
            <Primeiro />
            <ComParametro
                titulo="Segundo Componente"
                subtitulo="Muito Legal!"
            />
            <Fragmento />
        </div>
    );
}
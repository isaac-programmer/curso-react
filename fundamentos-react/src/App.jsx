import React from 'react';
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import "./app.css";

export default function App() {
    return (
        <div className="app">
            <div className="cards">
                <Card titulo="#01 - Primeiro Componente" color="#F2E205">
                    <Primeiro />
                </Card>

                <Card titulo="#02 - Com Parâmetro" color="#F207E3">
                    <ComParametro
                        titulo="Segundo Componente"
                        subtitulo="Muito Legal!"
                    />
                </Card>
                
                <Card titulo="#03 - Fragmento" color="#4641D9">
                    <Fragmento />
                </Card>
                
                <Card titulo="#04 - Desafio Aleatório" color="#D907B6">
                    <Aleatorio valorMin={10} valorMax={20} />
                    <Aleatorio valorMin={10} valorMax={20} />
                </Card>
            </div>            
        </div>
    );
}
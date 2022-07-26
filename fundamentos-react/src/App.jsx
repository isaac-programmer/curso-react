import React from 'react';
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import "./app.css";
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';

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

                <Card titulo="#05 - Componente com Filhos" color="#D907B6">
                    <Familia sobrenome="Daniel">
                        <FamiliaMembro nome="Isaac" />
                        <FamiliaMembro nome="Isaac" />
                        <FamiliaMembro nome="Isaac" />
                    </Familia>
                </Card>

                <Card titulo="#06 - Repetição" color="#D907B6">
                    <ListaAlunos />
                </Card>

                <Card titulo="#07 - Desafio Repetição" color="#D907B6">
                    <TabelaProdutos />
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#D907B6">
                    <ParOuImpar numero={2} />
                    <UsuarioInfo usuario={{ nome: "Fernando" }} />
                </Card>
            </div>
        </div>
    );
}
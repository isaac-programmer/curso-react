import React from "react";

function calcularNumeroAleatorio(valorMin, valorMax) {
    return Math.floor(Math.random(valorMin, valorMax) * (valorMax - valorMin + 1)) + valorMin;
}

export default function Aleatorio({ valorMin, valorMax }) {
    return (
        <p>
            {calcularNumeroAleatorio(valorMin, valorMax)}
        </p>
    )
}
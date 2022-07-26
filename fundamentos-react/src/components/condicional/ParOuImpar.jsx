import React from "react";

export default function ParOuImpar({ numero }) {
    const isPar = numero % 2 === 0;

    return (
        <div>
            { isPar ? <span>Par</span> : <span>Ímpar</span> }
        </div>
    )
}
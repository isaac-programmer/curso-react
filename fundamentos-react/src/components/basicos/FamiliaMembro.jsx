import React from "react";

export default function FamiliaMembro({ nome, sobrenome }) {

    return (
        <p>
            <span>{nome}</span>
            <strong>{sobrenome}</strong>
        </p>
    )

}
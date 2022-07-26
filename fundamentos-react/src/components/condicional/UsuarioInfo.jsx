import React from "react";
import If from "./If";

export default function UsuarioInfo({ usuario }) {
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja Bem-Vindo <strong> { usuario.nome } </strong>!
            </If>

            <If test={!usuario || !usuario.nome}>
                Seja Bem-Vindo <strong>Amigão</strong>!
            </If>
        </div>
    )
}
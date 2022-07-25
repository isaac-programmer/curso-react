import React from "react";
import alunos from "../data/alunos";

export default function ListaAlunos() {

    return (
        <div>
            <ul>
                 {
                    alunos.map((aluno) => {
                        return (
                            <li key={aluno.id}>
                                {aluno.id} {') '} {aluno.nome} {' -> '} {aluno.nota}
                            </li>
                        )
                    })
                 }
            </ul>
        </div>
    )

}
import React, { Children, cloneElement } from "react";

export default function Familia({children, sobrenome}) {

    return (
        <div>
            {
                Children.map(children, (child, i) => {
                    cloneElement(child, { sobrenome, key: i });
                })
            }
        </div>
    );

}
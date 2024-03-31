import React, { useContext } from "react";
import { ComponenteNeto } from "./ComponenteNeto";
import { NumeroContext } from "./ComponenteAvo";

export function ComponenteFilho() {
    const { numero } = useContext(NumeroContext);

    return (
        <div>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 1}.png`}
                alt=""
            />
            <ComponenteNeto />
        </div>
    );
}

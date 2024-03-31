import React, { useContext } from "react";
import { NumeroContext } from "./ComponenteAvo";

export function ComponenteNeto() {
    const { numero } = useContext(NumeroContext);

    return (
        <div>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 2}.png`}
                alt=""
            />
        </div>
    );
}

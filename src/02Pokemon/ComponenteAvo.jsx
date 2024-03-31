import React, { createContext, useState } from "react";
import { ComponenteFilho } from "./ComponenteFilho";

const NumeroContext = createContext();

function ComponenteAvo() {
    const [numero, setNumero] = useState(1020);

    function handleIncrement() {
        if (numero === 1023) {
            return alert("Número máximo atingido");
        }
        setNumero(prev => prev + 1);
    }

    return (
        <NumeroContext.Provider value={{ numero }}>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                alt=""
            />
            <ComponenteFilho />
            <button onClick={handleIncrement}>Incrementar</button>
        </NumeroContext.Provider>
    );
}

export { NumeroContext, ComponenteAvo };

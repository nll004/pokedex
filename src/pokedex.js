import React from "react";
import Pokecard from "./pokecard";
import "./pokedex.css"


const Pokedex = (props) => {

    return (

        <div className="Pokedex">
            <h1 className="Pokedex-title">Pokedex</h1>
            <div className="Pokedex-container">
                {props.pokemon.map(p =>
                    <Pokecard
                        key={p.id}
                        pokemon={p}
                        imgUrl={props.imgUrl}
                />)}
            </div>

        </div>
    )
}

export default Pokedex

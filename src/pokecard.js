import React from 'react';
import './pokecard.css';


const Pokecard = (props) => {

    return (
        <div id={props.pokemon.id} className='pokecard'>
            <h2>{props.pokemon.name}</h2>
            <img src={props.imgUrl + props.pokemon.id + '.png'} alt=''></img>
            <p>Type: {props.pokemon.type}</p>
            <p>EXP: {props.pokemon.base_experience} </p>
        </div>
    );
};

export default Pokecard

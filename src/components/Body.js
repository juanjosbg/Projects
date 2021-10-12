import video1 from '../assets/video-poke.mp4';
import  './css/Styles.css';
import React from 'react';
import Call from'./PokemonDetail'

function Body({pokemon}){
    return (
        <section>
            <div className="absolute overlay">
                <h1>Welcome to <span>Pokemon</span> World</h1>
                <p>Here you can find diverse pokemons with their powers and names, so let's go for them</p>
            </div>

            <video src={video1} autoPlay muted />

            <PokemonDetail pokemon={pokemon}/>
        </section>
    );
}

export default Body;
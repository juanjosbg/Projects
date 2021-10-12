/* otra forma para llamar objetos {atributos del objeto}*/
import {useState} from 'react'; 
import  './css/Search.css';

const Search=({onSearch})=>{

    //retorna 2 valores
    const [pokemonName,setpokemonName] = useState('') 

    return (
        <section>
            <form className="d-flex">
                <input value={pokemonName} onChange={(m)=>setpokemonName(m.target.value)} 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"/>
                
                {/* para caputar los eventos (datos del usuari  o)*/}
                <button onClick={(e)=>{e.preventDefault(); onSearch(pokemonName) }} 
                className="btn btn-outline-success" 
                type="submit">Search</button>

            </form>
        </section>
    );
}
export default Search;
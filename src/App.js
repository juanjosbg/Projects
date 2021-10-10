
import React,{Fragment} from 'react';
import Body from './components/Body';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.css";
import './App.css'


function App() {
  
  const buscarPokemon=(name)=>{

  /*  */

  /* console.log('Name',name) => esto es solo para ver si funciona */
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then(response => response.json())
    .then(json => console.log(json));
    
  }

  return (
      <Fragment>
        <Header onSearch2={buscarPokemon}/>
        

        <Body/>
      </Fragment>
      
  );
}

export default App;

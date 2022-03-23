import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [listaPokemon,setListaPokemon] = useState([]);
  const [called, setCalled] = useState(false);
  useEffect(() =>{
    if(called){
      fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(respuesta =>{
        if(respuesta.ok){
          return respuesta.json();
        }
      })
      .then((data)=>{
        setListaPokemon([...data.results]);
      })
      .catch((err) =>{
        console.log(err);
      })
    }
    else{
      setListaPokemon([]);
    }
    
  },[called])
  
  return (
    <div className="App">
      <button onClick={(e) => setCalled(!called)}>{!called? "Fetch Pokemon": "Clear Pokemon"}</button>
      <ul>
        {
          listaPokemon.map((pokemon,indice) => {
            return(
              <li key={indice}>{pokemon.name}</li>
            );
          })
        }
      </ul>
      
    </div>
  );
}

export default App;

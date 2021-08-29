import CharacterCard from "./characterCard";
import {useState, useEffect} from "react";

export default function CharacterList(){
  const [charactersArray, setCharactersArray] = useState([]);

  function getCharacterList(){
    return fetch("https://rickandmortyapi.com/api/character")
     .then(data => data.json())
  }

  useEffect(() => {
    let mounted = true;
    getCharacterList()
     .then(response => {
       if(mounted) {
         setCharactersArray(response.results)
       }
     })
    return () => mounted = false;
  }, [])

  return(
   <div>
     {charactersArray.map((item,index) => <CharacterCard character={item} key={index}/> )}
   </div>
  )
}


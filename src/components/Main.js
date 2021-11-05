import react from "react";
import { useState } from "react";

function Main (props) {
  const [animals, setAnimals] = useState({ animals: []});
  const URL = "https://stormy-falls-16916.herokuapp.com/animals"
  

  return (
    <div>
    <h1> main</h1>
    <h1>{animals.name}</h1>
    </div>
  )
}

export default Main
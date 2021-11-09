import react from "react";
import { useState } from "react";

function Show(props, handleDelete) {
  const id = props.match.params.id
  const animals = props.animals
  const animalX = animals.filter(p => p.id == id)[0]
  return (
  <div className="animalShow">
     <img src={animalX.image} alt={animalX.name} />
    <h1>{animalX.name}</h1>
     <p><b>What to do:</b> {animalX.action}</p>
     <p><b>Type:</b> {animalX.diet}</p>
     <p><b>Temperament:</b> {animalX.temp}</p>
     <p><b>Location:</b> {animalX.location}</p>
      {/* <button onClick={() => handleDelete(animals.id)} >X</button> */}
  </div>
//     <div>
//       {/* {animals.map((animal) => {
//           return (
//           <div>
//             <h1></h1>
//             <img src={animal.image} />
//           </div>
//           )
//         })
//       } */}
//     </div>
  )
}

export default Show;
// In the new array, I want to get one animal's id and render that one animal's information
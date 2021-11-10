import react from "react";
import { useState } from "react";

function Show({animals, handleDelete, match}) {
  const id = match.params.id
  const filteredAnimal = animals.filter(p => p.id == id)[0]
  return (
  <div className="animalShow">
     <img src={filteredAnimal.image} alt={filteredAnimal.name} />
    <h1>{filteredAnimal.name}</h1>
     <p><b>What to do:</b> {filteredAnimal.action}</p>
     <p><b>Type:</b> {filteredAnimal.diet}</p>
     <p><b>Temperament:</b> {filteredAnimal.temp}</p>
     <p><b>Location:</b> {filteredAnimal.location}</p>
    <button onClick={() => handleDelete(filteredAnimal.id)} >X</button>
    
        
      




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
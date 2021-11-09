import react from "react";
import { useState } from "react";

function Show({ animals }) {
  return (
    <div>
      {animals.map((animal) => {
          return (
          <div>
            <h1></h1>
            <img src={animal.image} />
          </div>
          )
        })
      }
    </div>
  )
}

export default Show;
// In the new array, I want to get one animal's id and render that one animal's information


// const animals = props.animals
// const animal = animals.find(p => p._id === id)
//   return (
//     <div className="person">
//     <h1>{animal.name}</h1>
//     <h2>{animal.title}</h2>
//     <img src={animal.image} alt={animal.name} />
//   </div>
//   )
// } 

{/* <div className="person">
<h1>{animalX.name}</h1>
<h2>{animal.title}</h2>
<img src={animal.image} alt={animal.name} />
</div> */}

  // console.log(animals)
  // const id = props.match.params.id
  // const animal = props.animal
  // const animalX = animal.find(p => p._id === id)
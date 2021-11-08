import react from "react";
import { useState } from "react";

function Main ({animals}) {
  

  return (
    <div>
      <h1>main</h1>
      {/*If animal is defined, display the animals  */}
      {animals && 
        animals.map((animal) => {
          return (
            <div>
              <h1>{animal.name}</h1>
              <img src={animal.image} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Main
import react from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Main({ animals, handleDelete }) {
  
  return (
    <div className="main-animals">
      <Link className="cna" to="/animals">
        <div>Create New Animal</div>
      </Link>
      {/*If animal is defined, display the animals  */}
      {animals && 
        animals.map((animal) => {
          return (
          <div>
              <h1>{animal.name}</h1>
              <Link to={`/animals/${animal.id}`}>
            <img src={animal.image} />
              </Link>
          </div>
          )
        })
      }
    </div>
  )
}

export default Main
// I want to wrap a link tag around each photo so that it's a clickalble link
// That link should direct me to a show page based on that photo's id
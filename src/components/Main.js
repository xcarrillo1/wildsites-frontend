import { Link } from "react-router-dom";

function Main({ animals }) {
  
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


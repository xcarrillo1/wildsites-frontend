import { useState } from "react";
import { Link } from "react-router-dom";

function Show(props) {
  const id = props.match.params.id
  const filteredAnimal = props.animals.filter(p => p.id == id)[0]

  const [editForm, setEditForm] = useState(filteredAnimal);
  const handleChange = event => {
    setEditForm({...editForm, [event.target.name]: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.handleUpdate(editForm, filteredAnimal.id);
    props.history.push('/');
  }
  
  const removePosting= () => {
    props.handleDelete(filteredAnimal.id);
    props.history.push('/');
  }
  return (
  <div className="animalShow">
     <img src={filteredAnimal.image} alt={filteredAnimal.name} />
    <h1>{filteredAnimal.name}</h1>
     <p><b>What to do:</b> {filteredAnimal.action}</p>
     <p><b>Diet:</b> {filteredAnimal.diet}</p>
     <p><b>Temperament:</b> {filteredAnimal.temp}</p>
     <p><b>Location:</b> {filteredAnimal.location}</p>
     <Link to='/'>
    <button onClick={removePosting}>X</button>
    </Link>
    <h3>___________________________________________________</h3>
    <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="image"
            placeholder="Image"
            type="text"
            value={editForm.image}
            id="image"
          />
          <input
            onChange={handleChange}
            name="name"
            placeholder="Animal Name"
            type="text"
            value={editForm.name}
            id="name"
          />
          <input
            onChange={handleChange}
            name="action"
            placeholder="What should I do?"
            type="text"
            value={editForm.action}
            id="action"
          />
          <input
            onChange={handleChange}
            name="diet"
            placeholder="Diet"
            type="text"
            value={editForm.diet}
            id="diet"
          />
          <input
            onChange={handleChange}
            name="temp"
            placeholder="Temperament"
            type="text"
            value={editForm.temp}
            id="temp"
          />
          <input
            onChange={handleChange}
            name="location"
            placeholder="Location"
            type="text"
            value={editForm.location}
            id="location"
          />
          <input className="update" type="submit" value="Update animal"/>
        </form>
  </div>
  )
}

export default Show;
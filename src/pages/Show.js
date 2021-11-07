import { useState } from "react";

function Show(props) {
    const id = props.match.params.id
    const animals = props.animals
    const animal = animals.find(p => p._id === id)

    const [editForm, setEditForm] = useState(animal);

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.updateAnimals(editForm, animal._id);
        props.history.push("/");
    }

    const removePosting = () => {
        props.deletePost(animal._id);
        props.history.push("/");
    }

    return (
        <div className="posting">
            <img src={animal.image} alt={animal.name} />
            <h1 className="title">{animal.name}</h1>
            <h2 className="author">By: {animal.action}</h2>
            <p>{animal.diet}</p>
            <br/>
            <h3>_____________________________________________</h3>
            <button id="delete" onClick={removePosting}>
                DELETE
            </button>
            <form className="updateForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Animal Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.action}
                    name="action"
                    placeholder="What do I do?"
                    onChange={handleChange}
                />
                <textarea
                    type="text"
                    value={newForm.diet}
                    name="diet"
                    placeholder="Diet"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.temp}
                    name="temp"
                    placeholder="How aggressive?"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.location}
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                />
                <input className="create" type="submit" value="Update Animal" />
            </form>
        </div>
    )
}

export default Show;
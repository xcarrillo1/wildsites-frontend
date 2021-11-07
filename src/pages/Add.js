import { useState } from "react";

function Add(props) {
    const [newForm, setNewForm] = useState({
        image: "",
        name: "",
        action: "",
        diet: "",
        temp: "",
        location: ""
    });
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createAnimals(newForm);
        setNewForm({
            image: "",
            name: "",
            action: "",
            diet: "",
            temp: "",
            location: ""
        });
    };

    return (
        <section className="container-new">
            <form onSubmit={handleSubmit}>
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
                <input className="create" type="submit" value="Create Animal" />
            </form>
        </section>
    );
}

export default Add;
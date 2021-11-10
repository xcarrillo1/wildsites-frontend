
import { useState } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
      image:'',
      name:'',
      action: '',
      diet: '',
      temp: '',
      location:''
    });

  function handleChange(event) {
    setFormState(prevState => ({
      ...prevState,
      [event.target.id] : event.target.value
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
    props.handleAdd(formState);
    setFormState({
      image:'',
      name:'',
      action: '',
      diet: '',
      temp: '',
      location:''
    })
  }
    return (
      <section className="container-new">
        <form onSubmit={handleSubmit}>
          <Input
            handleChange={handleChange}
            name="image"
            placeholder="Image"
            type="text"
            value={formState.image}
            id="image"
          />
          <Input
            handleChange={handleChange}
            name="name"
            placeholder="Animal Name"
            type="text"
            value={formState.name}
            id="animalName"
          />
          <Input
            handleChange={handleChange}
            name="action"
            placeholder="What should I do?"
            type="text"
            value={formState.action}
            id="action"
          />
          <Input
            handleChange={handleChange}
            name="diet"
            placeholder="Diet"
            type="text"
            value={formState.diet}
            id="diet"
          />
          <Input
            handleChange={handleChange}
            name="temp"
            placeholder="Temperament"
            type="text"
            value={formState.temp}
            id="temp"
          />
          <Input
            handleChange={handleChange}
            name="location"
            placeholder="Location"
            type="text"
            value={formState.location}
            id="location"
          />
          <a href='localhost:3000'>
        <input className="create" type="submit" value="Add Entry"/>
        </a>
        </form>
      </section>
    );
  }

export default Form;
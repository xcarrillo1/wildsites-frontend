import { useState, useEffect } from 'react';
import './App.css';
// Import components //
import Header from "./components/Header";
import Main from "./components/Main";

// API call function for animals
function App() {
  const [animalsState, setAnimalsState] = useState({ animals: [] });
//
useEffect(() => {
  async function getAnimals() {
    try {
      const animals = await fetch('https://stormy-falls-16916.herokuapp.com/animals')
      .then(response => response.json())
      setAnimalsState({animals})
    } catch (error) {
      console.log(error)
    }
  }
 
// Create
async function handleAdd(formInputs) {
    try {
      const animals = await fetch('https://stormy-falls-16916.herokuapp.com/animals', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(formInputs)
      }).then(res => res.json())

      setAnimalsState({ animals });
      
    } catch(error) {
      console.log(error)
    }
  } 

 getAnimals();
}, []);
  
  return (
    <div className="App">
      <Header />
      <Main animals={ animalsState.animals } />
    </div>
  );
}

export default App;
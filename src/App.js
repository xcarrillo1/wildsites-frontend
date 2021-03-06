import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// Import components //
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
// Import pages //
import Show from "./pages/Show";

// API call function for animals
function App() {
  const [animals, setAnimals] = useState({ animals: [] });

  // useEffect gets called every time a component renders
  useEffect(() => {
    async function getAnimals() {
      try {
        const animals = await fetch(
          "https://stormy-falls-16916.herokuapp.com/animals"
        ).then((response) => response.json());
        setAnimals({ animals });
      } catch (error) {
        console.log(error);
      }
    }
    getAnimals();
  }, []);

    // Create
    async function handleAdd(formInputs) {
      try {
        const animals = await fetch(
          "https://stormy-falls-16916.herokuapp.com/animals",
          {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
            },
            body: JSON.stringify(formInputs),
          }
        ).then((res) => res.json());

        setAnimals({ animals });
      } catch (error) {
        console.log(error);
      }
    }
  
  // Update
  async function handleUpdate(formInputs, animalId) {
    try {
      const animals = await fetch(`https://stormy-falls-16916.herokuapp.com/animals/${animalId}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(formInputs),
      }
      ).then((res) => res.json());
      setAnimals({ animals });
      } catch (error) {
        console.log(error)
      }
  }
  
  // Delete
  async function handleDelete(animalId) {
      console.log(animalId)
      try {
        const animals = await fetch(`https://stormy-falls-16916.herokuapp.com/animals/${animalId}`, {
          method: 'DELETE',
        }).then(res => res.json());
      
      setAnimals({ animals });
  
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/">
            <Main animals={animals.animals}
              handleDelete={handleDelete} />
          </Route>
          <Route path="/animals/:id"
            render={(rp) => (
              <Show
                animals={animals.animals}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                {...rp}
              />
            )}
          />
          <Route path="/animals/">
          <Form handleAdd={handleAdd} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
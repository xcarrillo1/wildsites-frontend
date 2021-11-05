import { useState, useEffect } from 'react';
import './App.css';
// Import components //
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from './components/Footer';

function App() {
  const [animalsState, setAnimalsState] = useState({ animals: [] });


useEffect(() => {
  async function getAnimals() {
    try {
      const animals = await fetch('https://bmrx.herokuapp.com/animals')
      .then(response => response.json())
      console.log(animals)
    } catch (error) {
      console.log(error)
    }
  }
 getAnimals();
}, []);





  return (
    <div className="App">
      <Header />
      <Main animals={ animalsState.animals } />
      <Footer />
    </div>
  );
}

export default App;
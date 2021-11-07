import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Add from "../pages/Add";
import About from "../pages/About";

function Main(props) {
    const [animals, setAnimals] = useState(null);

    const URL = "https://stormy-falls-16916.herokuapp.com/animals";

    const getAnimals = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setAnimals(data);
    };

    const createAnimals = async (animals) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(animals),
        });
        getAnimals();
    };

    const updateAnimals = async (animals, id) => {
        await fetch(URL + id, { 
            method: "PUT" , 
            headers: {
                "Content-Type": "Application/json", 
            },
            body: JSON.stringify(animals),
        });
        getAnimals();
    }

    const deleteAnimals = async id => {
        await fetch(URL + id, { 
            method: "DELETE", 
        })
        getAnimals();
    }

    useEffect(() => getAnimals(), []);

    return (
        <main>
            <Routes>
                <Route exact path="/">
                    <Index animals={animals} createAnimals={createAnimals} />
                </Route>
                <Route path="/create">
                    <Add animals={animals} createAnimals={createAnimals} />
                </Route>
                <Route
                    path="/animals/:id"
                    render={(rp) => (
                        <Show
                            animals={animals}
                            updateAnimals={updateAnimals}
                            deleteAnimals={deleteAnimals}
                            {...rp}
                        />
                    )}
                />
                <Route path="/about">
                     <About />   
                </Route>
            </Routes>
        </main>
    );
}

export default Main;
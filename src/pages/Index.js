import { Link } from "react-router-dom"

function Index(props) {
    const loaded = () => {
        return props.animals.map((animals) => (
            <div key={animals._id} className="post">
                <Link to={`/animals/${animals._id}`}><img src={animals.image} alt={animals.name} /></Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
        return props.animals ? loaded() : loading()

}

export default Index;
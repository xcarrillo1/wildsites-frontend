import { Link } from "react-router-dom";

function Sub(props) {
    return (
        <nav className="sub">
            <Link to="/create">
                <div>Create New Post</div>
            </Link>
            <Link to ="/about">
                <div>About</div>
            </Link>
        </nav>
    )    
};

export default Sub;
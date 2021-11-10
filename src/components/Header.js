import { Link } from "react-router-dom";

function Header(){
  return ( 
    <div className="header">
      <Link className="jesse" to="/">
        <h1>🐻 WildSites 🦜</h1>
      </Link>
      </div>
  );
} 

export default Header;
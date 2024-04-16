import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <nav>
            <div className="logo">
                <h2>Logo</h2>
            </div>
            <ul>
                <li>
                    <img src="./images/png1blue.png" alt="png1" width="16px"/>
                    <Link className="link" to="/barreaux">Barreaux</Link>
                </li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
            </ul>
        </nav>
    );
}
export default Nav;
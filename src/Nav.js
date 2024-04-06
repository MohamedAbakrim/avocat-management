import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                Logo
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="">
                            <Link to="/">Home</Link>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <Link to="/users">Users</Link>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <Link to="/add-user">Add a user</Link>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
export default Nav;
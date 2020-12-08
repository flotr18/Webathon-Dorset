import './Home.css';
import {Link} from "react-router-dom";
import Logo from './img/MovieReact Logo.png'

function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/"><img src={Logo} alt={"logo"} id="navlogo" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Movie">Movie</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Serie">Serie</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex">
                        <input id="navsearch" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="body">
                <div id="main" className="row">
                    <div className="col-12">
                        <img src={Logo} alt={"logo"}/>
                    </div>
                    <div className="col-12">
                        <form className="row ">
                            <div className="col-12">
                                <input id="mainsearch" className="form-control" type="search" placeholder="Search" aria-label="Search" w1/>
                            </div>
                            <div className="col-12">
                                <button className="btn" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

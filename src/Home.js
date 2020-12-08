import './Home.css';
import {Link} from "react-router-dom";
import Logo from './img/MovieReact Logo.png'
import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            title: '',
            release_date: '',
            overview: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {

        let display = this.value.replace(" ", "%20");
        fetch('https://api.themoviedb.org/3/search/movie?api_key=27beba95fd51654379e58b8e53c1c594&language=en-US&query=' + display + '&page=1&include_adult=false')
            .then((res) => {
                return res.json() // Convert Recepted Data into JSON Format
            })
            .then((data) => {
                console.log(data.results[0]);
                this.setState({
                    title: data.results[0].original_title,
                    release_date: data.results[0].release_date,
                    overview: data.results[0].overview
                })
            });


    }


    render() {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/"><img src={Logo} alt={"logo"} id="navlogo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
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
                        <input id="navsearch" className="form-control mr-sm-2" type="search" placeholder="Search"
                               aria-label="Search" onChange={this.handleChange} value={this.state.value}/>
                        <button className="btn my-2 my-sm-0" type="submit" onClick={this.handleSubmit}>Search</button>
                    </form>
                </div>
            </nav>
            <div className="body">
                <div id="main" className="row">
                    <div className="col-12">
                        <img src={Logo} alt={"logo"}/>
                    </div>
                    <div className="col-12">
                        <form className="row">
                            <div className="col-12">
                                <input id="mainsearch" className="form-control" type="search" placeholder="Search"
                                       aria-label="Search" w1/>
                            </div>
                            <div className="col-12">
                                <button className="btn" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                    <div className={"col-12"}>
                        {this.state.title}
                        {this.state.overview}
                    </div>
                </div>
            </div>
        </div>
    }
}


export default Home;

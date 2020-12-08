import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Logo from "./img/MovieReact Logo.png";
import './Home.css';

export default class MovieList extends Component {

    state = {
        popularMovies: []

    }

    async componentDidMount() {
        const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=27beba95fd51654379e58b8e53c1c594';
        const response = await fetch(url)
        const data = await response.json();
        this.setState({
            popularMovies: data.results

        })


    }


    render() {
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
                <div className="container">
                    <div className="row">
                        <h2>Movie List</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Genre
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" >##</a></li>
                                    <li><a className="dropdown-item" >##</a></li>
                                    <li><a className="dropdown-item" >##</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Year
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item">##</a></li>
                                    <li><a className="dropdown-item">##</a></li>
                                    <li><a className="dropdown-item">##</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Rating
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item">##</a></li>
                                    <li><a className="dropdown-item">##</a></li>
                                    <li><a className="dropdown-item">##</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-primary">Search</button>
                        </div>

                    </div>

                    { this.state.popularMovies.map((popularMovie) => (
                        <div className="col-md-2">
                            <div className="card">
                                <img src={"https://image.tmdb.org/t/p/w342/" + popularMovie.poster_path} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{popularMovie.title}</h5>
                                    <p className="card-text">Release Date : {popularMovie.release_date}</p>
                                    <p> Popularity {popularMovie.popularity}</p>
                                </div>
                            </div>
                        </div>

                    ))}


                </div>





            </div>

        );
    }
}
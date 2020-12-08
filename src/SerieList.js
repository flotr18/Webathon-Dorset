import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SerieList extends Component {
    render(){
        return (
                <div className="container">
                    <div className="row">
                        <h2>Serie List</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Genre
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href="#">##</a></li>
                                    <li><a class="dropdown-item" href="#">##</a></li>
                                    <li><a class="dropdown-item" href="#">##</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Year
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href="#">##</a></li>
                                    <li><a class="dropdown-item" href="#">##</a></li>
                                    <li><a class="dropdown-item" href="#">##</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Rating
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href="#">##</a></li>
                                    <li><a class="dropdown-item" href="#">##</a></li>
                                    <li><a class="dropdown-item" href="#">##</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-primary">Search</button>
                        </div>
                        
                    </div>

                    <div className="row">
                    <div className="col-md-2">
                            <div class="card">
                                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Serie title</h5>
                                    <p class="card-text">Details</p>
                                    <p>rating</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div class="card">
                                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Serie title</h5>
                                    <p class="card-text">Details</p>
                                    <p>rating</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div class="card">
                                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Serie title</h5>
                                    <p class="card-text">Details</p>
                                    <p>rating</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div class="card">
                                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Serie title</h5>
                                    <p class="card-text">Details</p>
                                    <p>rating</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div class="card">
                                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Serie title</h5>
                                    <p class="card-text">Details</p>
                                    <p>rating</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div class="card">
                                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Serie title</h5>
                                    <p class="card-text">Details</p>
                                    <p>rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    



                </div>

                
        );
    }
}

if (document.getElementById('serieList')){
    ReactDOM.render(<SerieList/>, document.getElementById('serieList'));
}
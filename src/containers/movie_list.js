import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component{
    render(){
        return(
            <section>
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <img className="" src={this.props.movie.Poster}  alt="Card image cap"/>
                    </div>
                    <div className="col-md-6">
                        <div className="card rounded ">
                            <div className="card-body">
                                <h5 className="card-title">{console.log(this.props.movie)}{this.props.movie.Title}</h5>
                                <p className="card-text">Plot: {this.props.movie.Plot}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                <p className="card-text">Cast: {this.props.movie.Actors}</p>
                                </li>
                                <li className="list-group-item">
                                <p className="card-text">Released: {this.props.movie.Released}</p>
                                </li>
                                <li className="list-group-item">
                                <p className="card-text">IMDB Rating: {this.props.movie.imdbRating}</p>                                
                                </li>
                                <li className="list-group-item">
                                <p className="card-text">Runtime: {this.props.movie.Runtime}</p>                                
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps({movie}){
    return{ movie };
}
export default connect(mapStateToProps)(MovieList);
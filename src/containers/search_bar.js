import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../actions/index';

class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        this.setState({term: event.target.value})
        
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchMovie(this.state.term);
        this.setState({ term:'' });
    }
    render(){
        return(
            <div>
            <div className="container">
            <br/>
            <h1>Search for your favorite movies</h1>
            </div>
            <br></br>
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
                <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchMovie },dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
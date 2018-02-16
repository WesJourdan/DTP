import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { initialSearch, resetGame, setNumberOfSteps } from "../actions";

class SearchBar extends Component {
  //allow SearchBar to have local state because passing search input to the store character by character is overkill. See: https://github.com/reactjs/redux/issues/1287
  constructor (props) {
    super (props);
    this.state = {
      term: '',
      numberOfSteps: '6'
    };
    this.onInputChange = this.onInputChange.bind(this)
  }


  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  handleChange(event) {
    this.props.resetGame()
    this.setState({numberOfSteps: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.initialSearch(this.state.term);
    this.props.setNumberOfSteps(this.state.numberOfSteps);
    this.setState({ term: '' });
  }

  render () {
    return (

      <div className="text-center">
        <h1>Digital Telephone Pictionary Game</h1>
        <h5>Please choose the number of turns you want and enter a search term to start the game.</h5>
        <form className="m-3 d-inline" onSubmit={this.onFormSubmit.bind(this)}>

          <input
            className="w-50"
            type="text"
            value={this.state.term}
            placeholder="Enter a search term"
            onChange={this.onInputChange}
          />

          <select className="form-control d-inline w-25" value={this.state.numberOfSteps} onChange={this.handleChange.bind(this)}>
            <option value="6">6 turns</option>
            <option value="9">9 turns</option>
            <option value="12">12 turns</option>
            <option value="15">15 turns</option>
          </select>

          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Submit</button>
          </span>


        </form>
        <span>
          <button onClick={this.props.resetGame.bind(this)} type="submit" className="btn btn-danger">Reset Game</button>
        </span>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initialSearch, resetGame, setNumberOfSteps }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);

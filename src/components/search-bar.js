import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchImage } from "../actions";

class SearchBar extends Component {
  //allow SearchBar to have local state because passing search input to the store character by character is overkill. See: https://github.com/reactjs/redux/issues/1287
  constructor (props) {
    super (props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //call appropriate function. for now, that's the image fetch function.
    this.props.fetchImage(this.state.term)
    this.setState({ term: '' });
  }

  render () {
    return (
        <form className="text-center m-3" onSubmit={this.onFormSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.value}
            placeholder="Enter a search term"
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Submit</button>
          </span>
        </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchImage }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);

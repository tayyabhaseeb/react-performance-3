import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: "",
  };

  onSubmitSearchBar = (event) => {
    event.preventDefault();

    // calling the function
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onSubmitSearchBar}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={(event) => this.setState({ term: event.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

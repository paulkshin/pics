import React from "react";
import ReactDOM from "react-dom";

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={(event) => this.onFormSubmit(event)}
          className="ui form"
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

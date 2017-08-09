import React, { Component } from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: 'value={this.state.term}'};
  }

  // 'this.setState({ term:...})' allows us to change state value
  // Everytime a state is changed, class rerenders
  render() {
    return (
      <div>
        <input
          value={this.state.term} //controlled field
          onChange={event => this.setState({ term: event.target.value }) }
        />
      </div>
    );
  }

}

export default SearchBar;



/* ------------- EXTRA NOTES -------------

-------------
'this.state = { term: ''};''
&&
'this.setState({ term: event.target.value })'
Both change state. But only use first one in constructor.
-------------
super() allows access to parent methods (React.Component is parent class)
-------------
All JS classes have function called constructor called on every new instance
-------------
*/

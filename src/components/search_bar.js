// Even though not using var React, it's used when generating DOM
import React, { Component } from 'react';

// define class SearchBar with all React.Component class' functionality
// 'onChange={this.onInputChange}' to tap into HTML changes
class SearchBar extends React.Component {
  render() { // render() must return JSX
    return <input onChange={event => console.log(event.target.value) } />;
  }

  // whenever the input element changes run this
  // This is the event handler for <input />
  // event parameter describes event that occured, such as text input
/*
onInputChange(event) {
    console.log(event.target.value);
  }
*/ // This was all replaced with an arrow function in render()

}

// Now any file that imports SearchBar will get it
export default SearchBar;



/* ------------- EXTRA NOTES -------------

-------------

-------------
'onChange' is a REACT property
-------------
'console.log(event.target.value);' in onInputChange to see text values in real time
-------------
line 5 used to have
'extends React.Component'
instead. But adding
', { Component }'
to the import allows essentially made Component equal to React.Component
-------------
Every React component that's class based must have a render method
-------------
function on line 5 is a class component, it has internal record keeping
-------------
*/

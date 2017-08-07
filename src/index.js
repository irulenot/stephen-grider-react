// Go find 'react' from node_modules and assign it to React
import React from 'react';
import ReactDOM from 'react-dom';

/*
This file should:
Create a new component.
This component should produce some HTML.
*/

// This is a component/class decleration
// const: means App will never change
// Line 7  is JSX, gets turned into HTML
const App = () => {
  return <div>Hi!</div>;
}

/*
This file should:
Take this component's generated HTML,
and put it on the page (in the DOM)
*/

// Find div with the class name '.container' and render <App /> instance into div
// <App /> = <App></App> and creates an instance of App
// '.container' is in /index.html
ReactDOM.render(<App />, document.querySelector('.container') );




/* ------------- EXTRA NOTES -------------

-------------
=> is called 'fat arrow'
  more or less equivelant to function()
-------------
ES5 version of lines 14 - 16 is

const App = function() {
  return <div>Hi!</div>;
}
-------------
error
"_registerComponent(...): Target container is not a DOM element."
is thrown if
-------------
JSX tag: < >
<... /> is equivelant to <...> <.../>
  When nothing is inside text
-------------
lines 14 - 16 produces a class/definition of App, not an instance
-------------
error
"React.render is deprecated. Please use ReactDOM.render from require('react-dom') instead."
is thrown if using react instead of react-dom
to render DOM file
-------------
error
"Invalid component element. Instead of passing a component class, make sure to instantiate it by passing it to React.createElement."
is thrown if class is rendered rather than instance
-------------
error
"Uncaught ReferenceError: React is not defined"
is thrown if 'react' is not imported
-------------
if JSX on line 7 were written in pure javascript:

return React.createElement(
  "div",
  null,
  "Hi!"
);
-------------

*/

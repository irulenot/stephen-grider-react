import React from 'react';
import ReactDOM from 'react-dom';


import SearchBar from './components/search_bar'; //search_bar.js

// Google API key for Youtube. Generated it online through my account.
const API_KEY = 'AIzaSyCwYNoJgybR6ZvbgAMobu04npCNfpMCk_k';

//Create a new component. This component should produce some HTML.
// '(' are standard for multiple lines of JSX
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


//Take this component's generated HTML, and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container') );




/* ------------- EXTRA NOTES -------------

-------------
function on line 12 is a functional component, doesn't have the internal recording keeping that a class component does.
-------------
*/

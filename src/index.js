import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCwYNoJgybR6ZvbgAMobu04npCNfpMCk_k';

//Create a new component. This component should produce some HTML.
class App extends Component {
  constructor(props) {
    super(props);

    // videos: {} is array
    this.state = { videos: {} }; //in general make state name that makes sense

    // a network request, takes some time so first render() occurs before it
    YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
      // since normally 'videos: videos', ES6 allows us to replace with just 'videos'
      this.setState({ videos }); // passes array of videos
    });
  }

  render() {
    // 'videos={this.state.videos}' is passing a prop to child component
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );

  }
}

//Take this component's generated HTML, and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container') );



/* ------------- EXTRA NOTES -------------

*/

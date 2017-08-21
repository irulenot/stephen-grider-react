import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCwYNoJgybR6ZvbgAMobu04npCNfpMCk_k';

class App extends Component {
  constructor(props) {
    super(props);

    // [] is an array, {} is an object
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container') );



/* ------------- EXTRA NOTES -------------

*/

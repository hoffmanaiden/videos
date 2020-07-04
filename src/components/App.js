import React, { Component } from 'react'
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// const KEY = 'AIzaSyBWFcOi8NDRzDJhiQjKchDJev2mdXOJ4xE';
const KEY = process.env.YOUTUBE_API_KEY;

class App extends Component {
  state = {
    videoList: [],
    selectedVideo: null
  };

  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: `${KEY}`
      }
    })
    this.setState({ 
      videoList: response.data.items,
      selectedVideo: response.data.items[0]
     });
  };

  onVideoSelect = (video) => {
    // console.log(`Selected video: ${video.snippet.title}`);
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {this.state.selectedVideo !== null ?
                <VideoDetail video={this.state.selectedVideo} /> :
                ''
              }
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videoList} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
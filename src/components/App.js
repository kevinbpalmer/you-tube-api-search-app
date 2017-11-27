import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('thor ragnarok');
  }

  onVideoSelect(selectedVideo) {
    console.log('SELECTED VIDEO:', selectedVideo);

    this.setState({
      selectedVideo
    });
  }

  videoSearch(term) {
    const {API_KEY} = this.props;
    console.log('TERM: ', term);

    YTSearch({
      key: API_KEY,
      term: term
    }, videos => {
      console.log(videos);
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

   render() {
     const {videos, selectedVideo} = this.state;
     const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

      return (
        <div className='app-inner-wrapper'>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={selectedVideo} />
          {
            videos.length > 0 &&
            <VideoList
              videos={videos}
              onVideoSelect={this.onVideoSelect.bind(this)}
            />
          }
        </div>
      );
   }
}

App.propTypes = {
  // proptypes go here
};

export default App

import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = ""; // Replace this with process.env reference or your own key

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos : [],
            selectedVideo : null
        };

        this.videoSearch('surfboards');
    }

    videoSearch = (term) => {
        YTSearch({key:API_KEY, term: term}, (videos) => {
            this.setState(
                {
                    videos : videos,
                    selectedVideo: videos[0]
                }
            )
        });
    };

    render() {
        return (
            <div className="App">
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;

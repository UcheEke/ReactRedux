/**
 * Created by ekeu on 17/02/17.
 */
import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
    return (
        <ul className="col-md-4 list-group video-list">
            {videos.map((video) => {
                return (
                    <VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video}/>
                );
            })}
        </ul>
    );
};

export default VideoList;
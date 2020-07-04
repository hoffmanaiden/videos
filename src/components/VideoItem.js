import React from 'react';
import "./VideoItem.css";

const VideoItem = props => {
  // props.video (video obj)
  // props.key (video id)
  // props.onVideoSelect (callback function)
  return (
    <div className="item video-item" onClick={() => props.onVideoSelect(props.video)} >
      <img src={props.video.snippet.thumbnails.medium.url} className="ui image" alt={props.video.snippet.description} />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
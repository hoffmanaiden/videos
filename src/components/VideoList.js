import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  // props.videos (array of vid)
  // props.onVideoSelect (callback function)
  const wholeList = props.videos.map(vid => {
    return <VideoItem 
      key={vid.id.videoId} 
      video={vid}
      onVideoSelect={props.onVideoSelect} />
  })
  return(
    <div className="ui relaxed divided list">
      {wholeList}
    </div>
  )
}

export default VideoList;
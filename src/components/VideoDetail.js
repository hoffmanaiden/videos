import React from 'react';

const VideoDetail = ({ video }) => {

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <iframe
        title="video player"
        src={videoSrc}
        width="100%"
        height="400px"
        frameBorder="0"
        allowFullScreen={true}
      />
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
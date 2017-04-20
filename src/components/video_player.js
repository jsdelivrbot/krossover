import React from 'react';

const VideoPlayer = ({video}) => {
  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
          <video src={video.url} controls={video.controls} autoPlay/>
      </div>
    <h2>{video.title}</h2>
    </div>
  );
};

export default VideoPlayer;

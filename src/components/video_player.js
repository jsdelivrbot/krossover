import React from 'react';
const VideoPlayer = ({video}) => {
console.log(video)
  return (
    <div className="video-detail col-lg-8 col-xs-12">
      <div className="embed-responsive embed-responsive-16by9">
          <video src={video.url} controls={video.controls} autoPlay/>
      </div>
    </div>
  );
};

export default VideoPlayer;

import React from 'react';
import VideoClipForm from './video_clip_form';

const VideoPlayer = ({video}) => {
  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
          <video src={video.url} controls={video.controls} autoPlay/>
      </div>
    <h2>{video.title}</h2>
    <VideoClipForm removable={video.removable} duration={video.duration} title={video.title}/>
    </div>
  );
};

export default VideoPlayer;

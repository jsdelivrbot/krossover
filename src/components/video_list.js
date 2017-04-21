import React from 'react';
import VideoListItem from './video_list_item';
const VideoList = (props) => {
  const videoItems = props.videos.map((video, id) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        onVideoRemove={props.onVideoRemove}
        title={video.title}
        duration={video.duration}
        key={id}
        _id={video._id}
        removable={video.removable}
        controls={video.controls}
        video={video.url} />
    );
  });

  return (
    <ul className='col-lg-4 col-xs-12 list-group'>
      {videoItems}
    </ul>
  );
};

export default VideoList;

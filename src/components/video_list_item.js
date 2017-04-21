import React from 'react';
const divStyle = {
  background: 'url("http://i64.tinypic.com/5eak4y.png") no-repeat center center',
  WebkitBackgroundSize: 'cover',
  MozBackgroundSize: 'cover',
  OBackgroundSize: 'cover',
  backgroundSize: 'cover',
  height: '150px'

};

const VideoListItem = ({video, onVideoSelect,
onVideoRemove, title, duration, controls, removable, _id}) => {
  const selectVideo = () => onVideoSelect({url: video, title, duration, controls, removable, _id });
  if (removable) {
    return (
      <li onClick={selectVideo} className='list-group-item'>

        <div className='video-list media' style={divStyle}>
          <div className='edit-list'>
            <a className='remove' title='Remove' href='#'><i className='fa fa-times' aria-hidden='true'
              onClick={(e) => {
                e.stopPropagation();
                onVideoRemove(_id);
              }}
 /></a>
          </div>
          <div className='media-left' />
          <div className='media-body'>
            <div className='media-heading white'>
              {title} - [ {duration[0]} - {duration[1]} ]
            </div>
          </div>
        </div>
      </li>
    );
  }
  return (
    <li onClick={selectVideo} className='list-group-item'>
      <div className='video-list media' style={divStyle}>
        <div className='media-left' />
        <div className='media-body'>
          <div className='media-heading white'>
            {title} - [ {duration[0]} - {duration[1]} ]
            </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;

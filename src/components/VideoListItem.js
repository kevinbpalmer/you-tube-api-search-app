import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const videoThumbnail = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item video-list-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img
            className='media-object'
            alt={`Video thumbnail for: ${video.snippet.title}`}
            src={videoThumbnail}
          />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
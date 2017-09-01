import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // For each element of video, we'll have a function called per element
  // "video.etag" found under inspecting youtube api result via inspect>Network>search?part...>Preview>etag
  const videoItems = props.videos.map( (video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  // REACT will recognize that videoItems is array of components and will render each
  return (
   <ul className="col-md-4 list-group">
     {videoItems}
   </ul>
  );
};

export default VideoList;



/* ------------- EXTRA NOTES -------------

*/

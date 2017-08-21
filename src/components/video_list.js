import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // For each element of video, we'll have a function called per element
  // "video.etag" found under inspecting youtube api result via inspect>Network>search?part...>Preview>etag
  const videoItems = props.videos.map( (video) => {
    return <VideoListItem key={video.etag} video={video} />
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

-------------
Error
"Each child in an array or iterator should have a unique "key" prop. Check the render method of `VideoList`."
due to:
Objects don't have unique key, which they should.
-------------
Use .map to iterate, not for loops
-------------
When developing in REACT, develop from parent downwards.
ex) First Index.js, then video_list, then video_list_item.
-------------
*/

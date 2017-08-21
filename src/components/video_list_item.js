import React from 'react';

//const VideoListItem = (props) => {
//const video = props.video;
//converted to one line in function header via ES6

// line 8 says: "This first object in the argument array has a property video, grab that video and declare new variable called video"
const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  // "src={imageUrl}" of course include curly braces as referencing .JS variable in JSX
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;



/* ------------- EXTRA NOTES -------------

-------------
// "console.log(video);" allows us to see what data we can work with in video object
-------------
*/

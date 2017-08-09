 import React from 'react';

 //props is passed from class App in index.js
 const VideoList = (props) => {
   return (
     //bootstap
     <ul className="col-md-4 list-group">
       {props.videos.length}
     </ul>
   );
 }

export default VideoList;

/* ------------- EXTRA NOTES -------------

-------------
In a class component (unlike the functional component above),
'this.props' can be accessed anywhere instead of being passed in.
-------------
*/

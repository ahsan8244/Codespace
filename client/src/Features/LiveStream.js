
import { Center, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import YouTube from "react-youtube";
var getYouTubeID = require("get-youtube-id");

 const LiveStream = () => {const [id, setId] = useState("");

 function handleChange(e) {
   console.log(e.target.value);

   setId(getYouTubeID(e.target.value));
 }
 const opts = {
   height: "390",
   width: "640",
   playerVars: {
     // https://developers.google.com/youtube/player_parameters
     autoplay: 0
   }
 };
 return (
    <Center>
       <Box mt="2" shadow="md" >
     <input
       type="text"
       padding="10px"
       onChange={handleChange}
       required
       placeholder="URL..."
     />
    </Box>

     <YouTube videoId={id} opts={opts} />
     </Center>
 
 );
}
  

export default LiveStream;


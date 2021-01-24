
import { Center, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import YouTube from "react-youtube";
var getYouTubeID = require("get-youtube-id");


 var YTids = ["NTB6VDcVmKY", "g6BtbIiJ_rc", "T8f1fKsiLvE", "e_TxH59MclA", "F4rykKLcduI", "wM82hE6oimw"];
 const LiveStream = () => {const [id, setId] = useState(YTids);
    function handleChange(e) {
    console.log(e.target.value);

    setId(getYouTubeID(e.target.value));
 }

 
 const opts = {
   
   height: "220",
   width: "220",
   playerVars: {
     // https://developers.google.com/youtube/player_parameters
     autoplay: 0
   }
 };
 return (
    <Center padding="75px" justify="space-between">
      
    { 
    YTids.map((id, index) => (
        <YouTube key={index} videoId={id} opts={opts} />
    ))
    }
     </Center>
 
 );
}
  

export default LiveStream;


/*
<Box mt="2" shadow="md" >
     <input
       type="text"
       padding="10px"
       onChange={handleChange}
       required
       placeholder="URL..."
     />
    </Box>*/

import "./Video.scss"
import React from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';


const Video = () => {
  return (
    <Player
    playsInline
    poster      = "/assets/poster.png"
    src         = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    fluid       = {true}
    muted       = {true}
    aspectRatio = "auto"
    autoPlay    = {false} >
    <ControlBar disableCompletely={true}/>
    <BigPlayButton position={'center'}/>
    
    
    </Player>
     
  )
}

export default Video;


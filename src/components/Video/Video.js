import "./Video.scss"
import React from 'react';
import { Player, ControlBar } from 'video-react';


const Video = () => {
  return (
      <Player
          playsInline
          poster      = "/assets/poster.png"
          src         = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          fluid       = {true}
          muted       = {true}
          aspectRatio = "auto"
          autoPlay    = {true} >
        <ControlBar autoHide={true} />


    </Player> 
    
  )
}

export default Video;
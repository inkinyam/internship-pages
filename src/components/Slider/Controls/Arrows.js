import React from "react";
import { SliderContext } from "../Slider";

const Arrows = ({onCursorLeftArrowEnter, onCursorRightArrowEnter, onCursorDefault}) => {
  const { changeSlide } = React.useContext(SliderContext);

  const onCursorLeftArrowHover = () => {
    onCursorLeftArrowEnter();
  }
  const onCursorRightArrowHover = () => {
    onCursorRightArrowEnter();
  }
  
  const onCursorLeave = () => {
    onCursorDefault();
  }


  return (
    <div className="arrows">
      <div className="arrow left" 
           onClick={() => changeSlide(-1)} 
           onMouseEnter = {onCursorLeftArrowHover}
           onMouseLeave = {onCursorLeave}/>
           
      <div className="arrow right" 
           onClick={() => changeSlide(1)} 
           onMouseEnter = {onCursorRightArrowHover}
           onMouseLeave = {onCursorLeave}/>
    </div>
  );
}

export default Arrows;
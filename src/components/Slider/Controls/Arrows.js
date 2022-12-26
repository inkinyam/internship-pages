import React from "react";
import { SliderContext } from "../Slider";

const Arrows = () => {
  const { changeSlide } = React.useContext(SliderContext);

  return (
    <div className="arrows">
      <div className="arrow left" onClick={() => changeSlide(-1)} />
      <div className="arrow right" onClick={() => changeSlide(1)} />
    </div>
  );
}

export default Arrows;
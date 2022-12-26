import React from "react";
import SlideImage from "./SlideImage";


const  Slide = ({ data: { url, title } }) => {
  return (
    <div className="slider__slide">
      <SlideImage src={url} alt={title} />
    </div>
  );
}

export default Slide;
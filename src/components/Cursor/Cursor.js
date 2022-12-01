import './Cursor.scss';
import {gsap} from 'gsap';
import React from 'react';

const Cursor = () => {
  let cursor = React.useRef(null);
  let tl = gsap.timeline();

  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;

  function handleLinkHovers() {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => {
        tl.set(cursor,{scale:5})
      });
      el.addEventListener("mouseout", () => {
        tl.set(cursor,{scale:1})
      });
    });
  }

  React.useEffect(() => {
    tl.to({},0.016,{
      repeat: -1,
      onRepeat: function(){
        posX += (mouseX-posX) ;
        posY += (mouseY-posY);
        tl.set(cursor,{
          css: {
            left: posX - 10,
            top: posY - 10,
          }
        })
      }
    })
    document.addEventListener("mousemove", function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
    })

   handleLinkHovers();   
  })



  return (
    <div className='cursor' ref={el => cursor = el}>
        <div className='cursorIcon'></div>
    </div>
  )
}

export default Cursor;
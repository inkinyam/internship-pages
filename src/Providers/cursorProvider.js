import React from "react";
import cx from "classnames";
export const CursorContext = React.createContext("cursorContext");

const SUPPORTED_CURSORS = [false, 'big', 'eye', 'pensil', 'right', 'left'];



const CursorProvider = ({children}) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y : 0 });
  const [cursor, setCursor] = React.useState(false);


  const onMouseMove = (evt) => {
    const { pageX: x, pageY: y} = evt;
    setMousePosition({ x, y});
  }
  
  React.useEffect (() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, [])

  const { x, y } = mousePosition;

  const onCursor = cursorType => {
    cursorType = (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false;
    setCursor(cursorType);
  }




  return (
    <CursorContext.Provider value={{ onCursor }}>
    <div className = {cx('cursor', {
                        [`cursor-${cursor}`]: !! cursor
        })}
         style={{
           left: `${x}px`,
           top: `${y}px`
         }}/>

      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
  

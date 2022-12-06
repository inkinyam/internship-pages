import './Main.scss';
import '../Cursor/Cursor.scss';

import Lead from '../Lead/Lead';
import About from '../About/About';
import Layout from '../Layout/Layout';
import Works from '../Works/Works';

import React from 'react';
import { motion } from "framer-motion";

const Main = () => {
  const [cursorVariant, setCursorVariant] = React.useState('default');
  const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0});

  const mouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  React.useEffect (() => {
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }

  }, [])

  const variants = {
    default: {
      x: mousePosition.x-12,
      y: mousePosition.y-12,
    },

    button: {
      x: mousePosition.x -60,
      y: mousePosition.y -60,
      width: 120,
      height: 120,
      opacity: 0.9,
      transitionDuration: 0.2
    }
  }


  const onCursorButtonEnter = () =>  setCursorVariant('button');
  const onCursorDefault = () => setCursorVariant('default');


  return (
    <>
      <main className='main'>
      <motion.div className = 'cursor'
                variants   = {variants}
                animate    = {cursorVariant}
                transition = {{ duration: 0 }} 
                whileTap   = {{ scale: 0.8 }}
                /> 

        <Lead onCursorButtonEnter = {onCursorButtonEnter} 
              onCursorDefault     = {onCursorDefault}/>

        <About />
        <Layout/>

        <Works />


      </main>
    </>
  )
}

export default Main;
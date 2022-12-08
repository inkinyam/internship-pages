import './Main.scss';
import '../Cursor/Cursor.scss';

import Lead from '../Lead/Lead';
import About from '../About/About';
import Layout from '../Layout/Layout';
import AboutUs from '../AboutUs/AboutUs.js';
import SMI from '../SMI/SMI';
import FAQ from '../FAQ/FAQ';
import HowItWas from '../HowItWas/HowItWas';
import Works from '../Works/Works';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

import React from 'react';
import { motion } from "framer-motion";

const Main = () => {
  const [cursorVariant, setCursorVariant] = React.useState('default');
  const [isCursorEyeVariant, setCursorEyeVariant] = React.useState(false);
  const [isCursorPensilVariant, setCursorPensilVariant] = React.useState(false);
   
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
      window.removeEventListener('mousemove', mouseMove);
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
      width: 100,
      height: 100,
      opacity: 0.9,
    },
    eye: {
      x: mousePosition.x -47,
      y: mousePosition.y -47,
      width: 94,
      height: 94,
      borderStyle: 'solid',
      borderWidth: 3,
      borderColor: '#DAE856'
    },
    pensil: {
      x: mousePosition.x -20,
      y: mousePosition.y -20,
      width: 40,
      height: 40,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#DAE856'
      
    }

  }


  const onCursorButtonEnter = () =>  {
    setCursorVariant('button');
  }

  const onCursorDefault = () => {
    setCursorVariant('default');
    setCursorEyeVariant(false);
    setCursorPensilVariant(false);
  }

  const onCursorCardEnter = () => {
    setCursorVariant('eye');
    setCursorEyeVariant(true);
  }

  const onCursorInputEnter = () => {
    setCursorVariant('pensil');
    setCursorPensilVariant(true);
  }

    const cursorClassNames = isCursorEyeVariant ? 'cursor cursor-eye': isCursorPensilVariant? 'cursor cursor-pensil': 'cursor';
  return (     
    <>
      <main className='main'>
      <motion.div className = {cursorClassNames}
                  variants   = {variants}
                  animate    = {cursorVariant}
                  transition = {{ duration: 0 }}                  
                /> 

        <Lead onCursorButtonEnter = {onCursorButtonEnter} 
              onCursorDefault     = {onCursorDefault}/>

        <About />
        <Layout/>
        <AboutUs onCursorButtonEnter = {onCursorButtonEnter} 
                 onCursorDefault     = {onCursorDefault}
                 isAnimated          = {true}
                 isHasButton         = {true}
                 text=''/>
        <SMI onCursorCardEnter = {onCursorCardEnter} 
              onCursorDefault  = {onCursorDefault}/>

        <FAQ onCursorCardEnter = {onCursorCardEnter} 
              onCursorDefault  = {onCursorDefault}/>     

        <HowItWas/>         
        <Works />
        <AboutUs onCursorButtonEnter = {onCursorButtonEnter} 
                 onCursorDefault     = {onCursorDefault}
                 isAnimated          = {false}
                 isHasButton         = {false}
                 text=''/>
        <Form onCursorButtonEnter = {onCursorButtonEnter}
              onCursorInputEnter  = {onCursorInputEnter} 
              onCursorDefault     = {onCursorDefault}/>

      </main>
      <Footer onCursorButtonEnter = {onCursorButtonEnter} 
              onCursorDefault     = {onCursorDefault}/>
    </>
  )
}

export default Main;
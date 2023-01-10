import './Main.scss';
import '../Cursor/Cursor.scss';

import Loader from '../Loader/Loader';

import Layout from '../Layout/Layout';
import About from '../About/About';
import AboutUs from '../AboutUs/AboutUs.js';
import Video from '../Video/Video';
import Phases from '../Phases/Phases';

import SMI from '../SMI/SMI';
import FAQ from '../FAQ/FAQ';
import HowItWas from '../HowItWas/HowItWas';
import Works from '../Works/Works';
import Programs from '../Programs/Programs';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

import React from 'react';
import { motion } from "framer-motion";


const Main = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const [cursorVariant, setCursorVariant] = React.useState('default');
  const [isCursorEyeVariant, setCursorEyeVariant] = React.useState(false);
  const [isCursorPensilVariant, setCursorPensilVariant] = React.useState(false);
  const [isCursorArrowLeft, setCursorArrowLeft] = React.useState(false);
  const [isCursorArrowRight, setCursorArrowRight] = React.useState(false);
   
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

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  })

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
    },
    arrowLeft: {
      x: mousePosition.x -60,
      y: mousePosition.y -60,
      width: 100,
      height: 100,
      opacity: 0.9,
    },
    arrowRight: {
      x: mousePosition.x -60,
      y: mousePosition.y -60,
      width: 100,
      height: 100,
      opacity: 0.9,
    }

  }


  const onCursorButtonEnter = () =>  {
    setCursorVariant('button');
  }

  const onCursorDefault = () => {
    setCursorVariant('default');
    setCursorEyeVariant(false);
    setCursorPensilVariant(false);
    setCursorArrowLeft(false);
    setCursorArrowRight(false);
  }

  const onCursorCardEnter = () => {
    setCursorVariant('eye');
    setCursorEyeVariant(true);
  }

  const onCursorInputEnter = () => {
    setCursorVariant('pensil');
    setCursorPensilVariant(true);
  }

  const onCursorLeftArrowEnter = () => {
    setCursorVariant('arrowLeft');
    setCursorArrowLeft(true);
  }

  const onCursorRightArrowEnter = () => {
    setCursorVariant('arrowRight');
    setCursorArrowRight(true);
  }

  const cursorClassNames = isCursorEyeVariant ? 'cursor cursor-eye': 
                           isCursorPensilVariant? 'cursor cursor-pensil': 
                           isCursorArrowLeft? 'cursor cursor-arrow-left': 
                           isCursorArrowRight? 'cursor cursor-arrow-right': 
                           'cursor';
  return (     
    <>  
      <Loader isLoading = {isLoading}/>
      <div className={isLoading? 'hide_content': ''}>
        <main className='main'>
            <motion.div className = {cursorClassNames}
                        variants   = {variants}
                        animate    = {cursorVariant}
                        transition = {{ duration: 0 }}                  
                      /> 

              <Layout onCursorButtonEnter = {onCursorButtonEnter} 
                      onCursorDefault     = {onCursorDefault}/>

              <About />
              <Video/>
              <Phases onCursorLeftArrowEnter  = {onCursorLeftArrowEnter} 
                      onCursorRightArrowEnter = {onCursorRightArrowEnter} 
                      onCursorDefault         = {onCursorDefault}/>
            
              <AboutUs onCursorButtonEnter = {onCursorButtonEnter} 
                      onCursorDefault     = {onCursorDefault}
                      isAnimated          = {true}
                      isHasButton         = {true}
                      text='Разрабатываем генеральные планы, проекты планировки, нормативы и градостроительную документацию по всей России. Раз в год проводим стажировку для студентов.'/>
              <SMI onCursorCardEnter = {onCursorCardEnter} 
                    onCursorDefault  = {onCursorDefault}/>

              <FAQ onCursorCardEnter = {onCursorCardEnter} 
                    onCursorDefault  = {onCursorDefault}/>     

              <HowItWas/>    
              <AboutUs onCursorButtonEnter = {onCursorButtonEnter} 
                      onCursorDefault     = {onCursorDefault}
                      isAnimated          = {false}
                      isHasButton         = {false}
                      text='Основной темой стажировки и практики в 2022 году станет разработка проектов для Новой Москвы.'/>     
              <Works />
              <Programs onCursorButtonEnter = {onCursorButtonEnter} 
                        onCursorDefault     = {onCursorDefault}/>
              
              <Form onCursorButtonEnter = {onCursorButtonEnter}
                    onCursorInputEnter  = {onCursorInputEnter} 
                    onCursorDefault     = {onCursorDefault}/>

        </main>
        <Footer onCursorButtonEnter = {onCursorButtonEnter} 
                onCursorDefault     = {onCursorDefault}/>
       </div>
    </>
  )
}

export default Main;
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




const Main = () => {
  const [isLoading, setIsLoading] = React.useState(false);

/*   React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }) */

  return (     
    <>
        <Loader isLoading = {isLoading}/>
        <div className = {isLoading ? 'hide_content': ''}>
          <main className = 'main'>
              <Layout/>
              <About />
              <Video/>
              <Phases/>
              <AboutUs isAnimated = {true}
                      isHasButton = {true}
                      text = 'Разрабатываем генеральные планы, проекты планировки, нормативы и градостроительную документацию по всей России. Раз в год проводим стажировку для студентов.'/>
              <SMI/>
              <FAQ />     
              <HowItWas/>    
              <AboutUs isAnimated = {false}
                      isHasButton = {false}
                      text = 'Основной темой стажировки и практики в 2022 году станет разработка проектов для Новой Москвы.'/>     
              <Works />
              <Programs />
              <Form />
          </main>
          <Footer/>
        </div>
    </>
  )
}

export default Main;
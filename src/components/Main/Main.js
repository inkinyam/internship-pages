import Lead from '../Lead/Lead';

import About from '../About/About';
import Layout from '../Layout/Layout';

import Works from '../Works/Works';


import './Main.scss';

const Main = () => {
  return (
    <>
      <main className='main'>
        <Lead />

        <About />
        <Layout/>

        <Works />


      </main>
    </>
  )
}

export default Main;
import Header from '../Header/Header';
import Lead from '../Lead/Lead';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';

import './Main.scss';

const Main = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Lead/>

        <Navigation isFixed = {true}/>
        <About/>
      </main>
    </>
  )
}

export default Main;
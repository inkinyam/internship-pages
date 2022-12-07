import './HowItWas.scss';
import Title from '../Title/Title';
import { Player, ControlBar, BigPlayButton } from 'video-react';

const HowItWas = ()=>{
  return (
    <section className='howItWas'>
      <div className='howItWas__layout'>
        <div className='howItWas__bg'></div>
      </div>


      <div className='howItWas__container'>
        <Title title = 'Стажировка 2022'/>
        <Player
          playsInline
          poster      = "/assets/poster.png"
          src         = "http://media.w3.org/2010/05/bunny/movie.mp4"
          fluid       = {true}
          muted       = {true}
          aspectRatio = "auto"
          autoPlay    = {false} >
          <ControlBar disableCompletely={true}/>
          <BigPlayButton position={'center'} className={'howItWas__playerbutton'}/>
        </Player> 

        <div className='howItWas__statistic'>
          <div className='howItWas__statCard'>
            <h4 className='howItWas__statTitle'>200 заявок</h4>
            <p className='howItWas__statText'>подали студенты за период отбора</p>
          </div>

          <div className='howItWas__statCard'>
            <h4 className='howItWas__statTitle'>32 студента</h4>
            <p className='howItWas__statText'>прошли отбор по конкурсу портфолио</p>
          </div>

          <div className='howItWas__statCard'>
            <h4 className='howItWas__statTitle'>3 участника</h4>
            <p className='howItWas__statText'>программ теперь работают в Институте</p>
          </div>
        </div>
      </div>


      
      

    </section>
  )
}

export default HowItWas;
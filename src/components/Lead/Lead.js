import './Lead.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
const Lead = () => {


  return (
    <section className='lead' >
      <Navigation isFixed = { false }/>
      <div className='lead__bg'>
        <div className='lead__big'></div>
        <div className='lead__middle r1'></div>
        <div className='lead__middle r2'></div>
        <div className='lead__middle r3'></div>
        <div className='lead__middle r4'></div>
        <div className='lead__small'></div>
      </div>
      <div className='lead__content'>
        
          <h1 className='lead__title'>Практика <br/> в Институте Генплана Москвы</h1>
          <Link to="/form" className='lead__button'> Заполнить заявку</Link>

      
        <div className="lead__startpoint"></div>


        <div className='lead__infoblock'>
          <p className='lead__info'>ждем студентов, изучающих специальности:</p>
          <p className='lead__prof'>Архитектор, Инженер, Экономист, Социолог, Эколог, Аналитик, ГИС-специалист, Урбанист</p>
        </div>

      </div>


     
    </section>
  )
}

export default Lead;